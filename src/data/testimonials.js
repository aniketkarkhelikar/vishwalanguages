/**
 * VISHWA LANGUAGES — Testimonials Data
 * All student/corporate testimonials centralized here.
 * Components just render this data.
 */

export const testimonials = [
  {
    id:      'aniket-sharma',
    type:    'student',
    language: 'japanese',
    quote:   "Vishwa didn't just teach me grammar. They prepared me for the culture. That fluency helped me clear my interviews and seamlessly join a Tokyo-based tech firm.",
    name:    'Aniket Sharma',
    role:    'Software Engineer',
    outcome: 'Placed in Tokyo',
    level:   'JLPT N3',
    initials: 'AS',
  },
  {
    id:      'priya-mehta',
    type:    'student',
    language: 'german',
    quote:   "The B2 batch was structured exactly how a serious learner needs it. The technical vocabulary track helped me clear my German employer interview on the first attempt.",
    name:    'Priya Mehta',
    role:    'Mechanical Engineer',
    outcome: 'Placed in Munich',
    level:   'Goethe B2',
    initials: 'PM',
  },
  {
    id:      'rajesh-nair',
    type:    'student',
    language: 'german',
    quote:   "From A1 to successfully appearing for my B2 exam in 14 months. The small batch sizes make a real difference — your teacher actually knows your name.",
    name:    'Rajesh Nair',
    role:    'Registered Nurse',
    outcome: 'Germany Healthcare Placement',
    level:   'Goethe B2',
    initials: 'RN',
  },
];

// Featured testimonial (homepage hero section)
export const featuredTestimonial = testimonials[0];
