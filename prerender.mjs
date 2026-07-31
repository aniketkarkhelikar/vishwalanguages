import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, 'dist');

// Define all routes to prerender
const routes = [
  '/',
  '/about',
  '/services',
  '/corporate-training',
  '/healthcare-placement',
  '/interpretation-services',
  '/translation-services',
  '/languages',
  '/languages/german',
  '/languages/japanese',
  '/languages/french',
  '/languages/spanish',
  '/languages/english',
  '/languages/ielts',
  '/languages/mandarin',
  '/languages/korean',
  '/languages/sanskrit',
  '/contact'
];

async function prerender() {
  console.log('Starting Playwright prerendering...');
  
  // Launch headless browser
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Serve the dist directory locally using a simple file server approach
  // or just use page.setContent(indexHtml) with base tag
  
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    
    // Create a mock server URL approach or just inject HTML and wait for hydration
    // To keep it simple and robust for Vite SPA:
    // We can load the base index.html and execute the JS
    
    // A trick: set the URL so React Router knows where it is
    await page.route('**/*', (routeReq) => {
      const url = routeReq.request().url();
      if (url === 'http://localhost/') {
        routeReq.fulfill({
          status: 200,
          contentType: 'text/html',
          body: indexHtml.replace('<head>', `<head><base href="/">`)
        });
      } else if (url.startsWith('http://localhost/assets/')) {
        // Serve local assets
        const assetPath = path.join(distDir, new URL(url).pathname);
        if (fs.existsSync(assetPath)) {
          routeReq.fulfill({
             status: 200,
             body: fs.readFileSync(assetPath)
          });
        } else {
          routeReq.continue();
        }
      } else {
        routeReq.continue();
      }
    });

    await page.goto(`http://localhost${route}`, { waitUntil: 'networkidle' });
    
    // Wait for the app to render (e.g. framer-motion finishes or content appears)
    await page.waitForTimeout(500); 

    let html = await page.content();
    
    // Clean up base tag if we added it
    html = html.replace('<base href="/">', '');
    
    // Determine output path
    const routePath = route === '/' ? '/index' : route;
    const outDir = path.join(distDir, path.dirname(routePath));
    const outPath = path.join(distDir, `${routePath}.html`);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    fs.writeFileSync(outPath, html);
    console.log(`✅ Saved ${outPath}`);
  }

  await browser.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);
