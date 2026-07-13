import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';

/**
 * RootLayout — wraps every page with Navbar + Footer.
 * The consultation modal trigger is passed down as a prop.
 */
export function RootLayout({ children, onOpenConsultation }) {
  return (
    <div className="min-h-screen flex flex-col font-body bg-paper text-ink overflow-x-hidden">
      <Navbar onOpenConsultation={onOpenConsultation} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer onOpenConsultation={onOpenConsultation} />
    </div>
  );
}
