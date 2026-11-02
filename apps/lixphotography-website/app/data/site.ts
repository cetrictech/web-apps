export type NavigationItem = {
  label: string;
  id: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  ctaLabel: string;
};

export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  image: string;
};

export type PortfolioCategory =
  | 'Portraits'
  | 'Graduation'
  | 'Family'
  | 'Couples'
  | 'Events'
  | 'Corporate'
  | 'Studio';

export type PortfolioLayout = 'portrait' | 'square' | 'landscape';

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  description: string;
  location: string;
  notes: string;
  assetFile: string;
  layout: PortfolioLayout;
  background: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  service: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteInfo = {
  name: 'Lix Photography',
  tagline: 'Premium Photography in Kisumu',
  heroHeadline: 'Timeless Photography, Beautifully Crafted',
  heroSubheadline:
    'A premium photography studio in Kisumu creating elegant family portraits, graduation sessions, executive headshots, and cinematic studio edits from Mega City Mall, Ground Floor.',
  description:
    'Lix Photography is a premium photography studio in Kisumu delivering elegant family portraits, graduation sessions, professional headshots, studio portraits, and refined retouching for clients who want a polished final presentation.',
  location: 'Mega City Mall, Ground Floor, Kisumu',
  mapHref:
    'https://www.google.com/maps/place/0%C2%B006%2724.5%22S+34%C2%B046%2715.5%22E/@-0.1068103,34.7684059,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.1068103!4d34.7709808?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D',
  mapCoordinates: `0°06'24.5"S 34°46'15.5"E`,
  bookingEmail: 'hello@lixphotography.com',
  bookingPhone: '+254 795 296329',
  bookingPhoneHref: 'tel:+254795296329',
  whatsappHref: 'https://wa.me/254795296329',
  hours: 'Mon - Sun | 9:00 AM - 6:00 PM',
  hoursNote:
    'The official studio contacts are +254 795 296329 and hello@lixphotography.com. The studio is open daily from 9:00 AM to 6:00 PM.',
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

export const heroSignals = [
  'Family, graduation, and portrait sessions shaped with clean studio direction',
  'Executive headshots and personal branding with modern, polished finishing',
  'Warm retouching that keeps skin tones natural, luminous, and premium',
];

export const statItems: StatItem[] = [
  {
    label: 'Happy Clients',
    value: '480+',
    detail: 'Portrait, family, and event clients served with a premium studio experience.',
  },
  {
    label: 'Studio Sessions',
    value: '1,250+',
    detail: 'A growing archive of studio-led shoots crafted with consistent visual direction.',
  },
  {
    label: 'Events Covered',
    value: '180+',
    detail: 'Trusted coverage for graduations, private celebrations, and brand activations.',
  },
  {
    label: 'Edited Photos Delivered',
    value: '18k+',
    detail: 'Carefully retouched final images delivered with speed and quality in mind.',
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Creative direction with polish',
    description:
      'Every session is shaped with an editorial eye so your images feel intentional, elevated, and timeless.',
  },
  {
    title: 'Warm, professional service',
    description:
      'Clients are guided clearly from inquiry to delivery, with a calm experience that keeps every shoot comfortable.',
  },
  {
    title: 'Quality delivery that respects time',
    description:
      'Retouching, selection, and final presentation are handled with discipline so your gallery arrives refined and ready to share.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Esther Moraa',
    role: 'Client Experience & Bookings',
    summary:
      'Esther guides inquiries, booking flow, and session planning so every client feels clear, welcomed, and well prepared before shoot day.',
    image: '/images/team/esther.jpeg',
  },
  {
    name: 'June Jemutai',
    role: 'Studio Coordination & Client Care',
    summary:
      'June supports smooth studio execution, client comfort, and polished session flow, helping each shoot feel calm, organized, and premium.',
    image: '/images/team/june.jpeg',
  },
];

export const services: ServiceItem[] = [
  {
    title: 'Studio Photography',
    description:
      'Signature studio sessions with refined lighting, clean art direction, and premium finishing.',
    ctaLabel: 'Book Studio Session',
  },
  {
    title: 'Portrait Photography',
    description:
      'Personal and professional portraits shaped to feel elegant, modern, and confident.',
    ctaLabel: 'Book Portraits',
  },
  {
    title: 'Graduation Shoots',
    description:
      'Graduation portraits with celebratory styling, family coordination, and polished delivery.',
    ctaLabel: 'Plan Graduation Shoot',
  },
  {
    title: 'Family Photography',
    description:
      'Warm family sessions that balance natural connection with a clean, premium visual finish.',
    ctaLabel: 'Book Family Session',
  },
  {
    title: 'Couple Shoots',
    description:
      'Beautifully directed couple sessions built around intimacy, mood, and timeless storytelling.',
    ctaLabel: 'Book Couple Shoot',
  },
  {
    title: 'Baby / Kids Photography',
    description:
      'Gentle, playful photography for children and young families with comfort-first pacing.',
    ctaLabel: 'Book Kids Session',
  },
  {
    title: 'Corporate Headshots',
    description:
      'Executive portraits and team headshots that feel sharp, credible, and ready for business use.',
    ctaLabel: 'Request Headshots',
  },
  {
    title: 'Event Photography',
    description:
      'Reliable event coverage for private functions, launches, ceremonies, and milestone gatherings.',
    ctaLabel: 'Book Event Coverage',
  },
  {
    title: 'Product / Brand Photography',
    description:
      'Brand visuals and product images crafted for campaigns, launches, and social storytelling.',
    ctaLabel: 'Request Brand Shoot',
  },
  {
    title: 'Photo Editing / Retouching',
    description:
      'Premium retouching, color work, and delivery refinement for a polished final gallery.',
    ctaLabel: 'Request Retouching',
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  'Family',
  'Graduation',
  'Portraits',
  'Corporate',
  'Studio',
];

// Live portfolio images are served from /public/images/portfolio.
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Family Studio Collection',
    category: 'Family',
    description:
      'A polished studio family portrait with coordinated styling, black-backdrop depth, and clean retouching that keeps the moment warm and elegant.',
    location: 'Studio Family Session',
    notes:
      'A recent family studio session anchored by coordinated wardrobe, direct connection, and strong black-backdrop separation.',
    assetFile: 'DSC_4965.jpg.jpeg',
    layout: 'landscape',
    background:
      'linear-gradient(180deg, rgba(7, 7, 7, 0.08), rgba(7, 7, 7, 0.72)), radial-gradient(circle at 22% 18%, rgba(248, 245, 240, 0.22), transparent 24%), radial-gradient(circle at 62% 84%, rgba(53, 98, 192, 0.36), transparent 28%), linear-gradient(140deg, #1a1a1d 0%, #0f0f12 52%, #040404 100%)',
  },
  {
    title: 'Graduation Family Frame',
    category: 'Graduation',
    description:
      'Celebratory graduation portraiture styled with family presence, formal wardrobe, and a soft lilac set that feels proud and polished.',
    location: 'Graduation Studio Session',
    notes:
      'A graduation family portrait with formal styling, proud expressions, and a clean studio balance.',
    assetFile: 'DSC_7347.jpg.jpeg',
    layout: 'landscape',
    background:
      'linear-gradient(180deg, rgba(18, 12, 26, 0.08), rgba(18, 12, 26, 0.28)), radial-gradient(circle at 68% 20%, rgba(255, 255, 255, 0.18), transparent 22%), radial-gradient(circle at 46% 74%, rgba(55, 80, 161, 0.28), transparent 26%), linear-gradient(135deg, #d3cae0 0%, #c8bdd8 54%, #b6a9ca 100%)',
  },
  {
    title: 'Executive Signature Headshot',
    category: 'Corporate',
    description:
      'Clean white-backdrop executive portraiture designed for leadership profiles, speaking pages, and personal credibility.',
    location: 'Corporate Headshots',
    notes:
      'A professional studio headshot crafted for leadership presence, profile pages, and business credibility.',
    assetFile: 'DSC_9346.jpg.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04)), radial-gradient(circle at 52% 34%, rgba(255, 87, 66, 0.2), transparent 16%), linear-gradient(160deg, #f8f6f1 0%, #f0ebe3 62%, #ded6cb 100%)',
  },
  {
    title: 'Creative Studio Trio',
    category: 'Studio',
    description:
      'Black-set studio imagery with relaxed composition, styling contrast, and premium lighting for personal brands or friend groups.',
    location: 'Studio Portrait Set',
    notes:
      'A group portrait built around casual confidence, layered styling, and strong studio light control.',
    assetFile: 'LIX_4390.jpg.jpeg',
    layout: 'landscape',
    background:
      'linear-gradient(180deg, rgba(10, 10, 10, 0.06), rgba(10, 10, 10, 0.82)), radial-gradient(circle at 34% 18%, rgba(248, 245, 240, 0.1), transparent 20%), linear-gradient(145deg, #121214 0%, #0a0a0c 58%, #040404 100%)',
  },
  {
    title: 'Mother & Child Portrait',
    category: 'Family',
    description:
      'Soft, affectionate portrait work built around connection, premium wardrobe texture, and bright editorial finishing.',
    location: 'Family Studio Portrait',
    notes:
      'A warm parent-and-child portrait centered on closeness, softness, and an elevated studio finish.',
    assetFile: 'LIX_8557.jpg.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(250, 245, 246, 0.08), rgba(250, 245, 246, 0.18)), radial-gradient(circle at 28% 20%, rgba(255, 220, 231, 0.42), transparent 24%), linear-gradient(155deg, #fff7fb 0%, #ffe8f1 48%, #f6d2e1 100%)',
  },
  {
    title: 'Editorial Red Dress Portrait',
    category: 'Portraits',
    description:
      'A confident studio fashion portrait with minimal set design, full-body framing, and strong color-led styling.',
    location: 'Portrait Collection',
    notes:
      'A fashion-led portrait with confident posture, clean framing, and wardrobe-driven visual energy.',
    assetFile: 'IMG_8792.JPG.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(241, 228, 237, 0.1), rgba(241, 228, 237, 0.18)), radial-gradient(circle at 48% 62%, rgba(240, 64, 89, 0.2), transparent 24%), linear-gradient(180deg, #d4c9d5 0%, #cdc1cf 55%, #c0b3c5 100%)',
  },
  {
    title: 'Academic Blue Portrait',
    category: 'Studio',
    description:
      'Formal academic portraiture with a cool modern palette, direct posture, and crisp studio finishing.',
    location: 'Formal Studio Portrait',
    notes:
      'A formal portrait with a crisp academic look, direct eye line, and clean studio polish.',
    assetFile: 'IMG_8793.JPG.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(240, 238, 248, 0.08), rgba(240, 238, 248, 0.12)), radial-gradient(circle at 50% 78%, rgba(40, 123, 255, 0.28), transparent 26%), linear-gradient(180deg, #c8c0d1 0%, #bdb3c6 54%, #b2a7be 100%)',
  },
  {
    title: 'Medical Graduation Portrait',
    category: 'Graduation',
    description:
      'A celebratory professional milestone portrait combining cap-and-gown energy, career symbolism, and dramatic studio focus.',
    location: 'Graduation Portrait Series',
    notes:
      'A graduation portrait styled around achievement, profession, and a strong celebratory studio mood.',
    assetFile: 'IMG_8794.JPG.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(8, 8, 8, 0.08), rgba(8, 8, 8, 0.8)), radial-gradient(circle at 76% 18%, rgba(230, 191, 78, 0.9), transparent 18%), radial-gradient(circle at 44% 56%, rgba(255, 71, 130, 0.28), transparent 24%), linear-gradient(150deg, #171111 0%, #09090b 58%, #040404 100%)',
  },
  {
    title: 'Beauty Close-Up Study',
    category: 'Portraits',
    description:
      'Beauty-led close-up portraiture with clean skin retouching, vibrant background color, and strong facial focus.',
    location: 'Beauty Portrait Session',
    notes:
      'A tight beauty portrait focused on expression, clean skin finishing, and strong studio presence.',
    assetFile: 'IMG_8206.JPG.jpeg',
    layout: 'square',
    background:
      'linear-gradient(180deg, rgba(255, 92, 106, 0.16), rgba(255, 92, 106, 0.12)), radial-gradient(circle at 50% 24%, rgba(255, 255, 255, 0.12), transparent 20%), linear-gradient(180deg, #f53e5c 0%, #ef2d54 58%, #df2248 100%)',
  },
  {
    title: 'Warm Family Portrait',
    category: 'Family',
    description:
      'A simple, welcoming family portrait against a warm-toned backdrop, styled for connection and natural confidence.',
    location: 'Family Portrait Collection',
    notes:
      'A lighter family portrait setup with warm tones, open expressions, and a welcoming studio feel.',
    assetFile: 'IMG_8791.JPG.jpeg',
    layout: 'landscape',
    background:
      'linear-gradient(180deg, rgba(197, 122, 100, 0.12), rgba(197, 122, 100, 0.16)), radial-gradient(circle at 30% 18%, rgba(255, 255, 255, 0.14), transparent 20%), linear-gradient(135deg, #b96f5c 0%, #be7a68 52%, #a85f4f 100%)',
  },
  {
    title: 'Corporate Editorial Portrait',
    category: 'Corporate',
    description:
      'A polished professional portrait with tailored styling, confident posture, and a warm neutral set for modern brand presence.',
    location: 'Professional Branding',
    notes:
      'A personal-brand portrait designed for professionals who want warmth, clarity, and polish.',
    assetFile: 'IMG_8798.JPG.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(186, 118, 100, 0.1), rgba(186, 118, 100, 0.16)), radial-gradient(circle at 50% 26%, rgba(255, 255, 255, 0.12), transparent 16%), linear-gradient(145deg, #b86f5e 0%, #b16a59 56%, #9a5a4c 100%)',
  },
  {
    title: 'Editorial Mirror Portrait',
    category: 'Portraits',
    description:
      'A more expressive portrait treatment with reflective composition, elegance, and a soft editorial feel.',
    location: 'Creative Portrait Series',
    notes:
      'A stylized portrait with fashion-led direction, ideal for personal branding or editorial storytelling.',
    assetFile: 'IMG_8800.JPG.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(244, 130, 92, 0.1), rgba(244, 130, 92, 0.16)), radial-gradient(circle at 44% 24%, rgba(255, 255, 255, 0.12), transparent 16%), linear-gradient(145deg, #d87458 0%, #c86a50 56%, #b85e48 100%)',
  },
  {
    title: 'Signature Professional Portrait',
    category: 'Corporate',
    description:
      'A strong, tailored portrait for executives, founders, and professionals who need a premium public-facing image.',
    location: 'Executive Portrait Series',
    notes:
      'A refined professional portrait designed for profile pages, campaigns, and speaker introductions.',
    assetFile: 'IMG_8801.JPG.jpeg',
    layout: 'portrait',
    background:
      'linear-gradient(180deg, rgba(186, 118, 100, 0.1), rgba(186, 118, 100, 0.16)), radial-gradient(circle at 50% 26%, rgba(255, 255, 255, 0.12), transparent 16%), linear-gradient(145deg, #b86f5e 0%, #b16a59 56%, #9a5a4c 100%)',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: 'Esther O.',
    role: 'Family Portrait Client',
    quote:
      'The team helped us pose naturally and the final family portraits looked clean, bright, and beautifully finished. It felt premium from start to delivery.',
    service: 'Family Studio Session',
  },
  {
    name: 'Kevin M.',
    role: 'Graduation Client',
    quote:
      'Our graduation session was well directed and the images captured both the celebration and the family pride. The edits were sharp and timely.',
    service: 'Graduation Portraits',
  },
  {
    name: 'Doreen A.',
    role: 'Corporate Client',
    quote:
      'We needed professional portraits that felt confident and modern. Lix Photography delivered clean headshots with exactly the level of polish we wanted.',
    service: 'Corporate Headshots',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Where are you located?',
    answer:
      'Lix Photography is located at Mega City Mall, Ground Floor, Kisumu, making it easy to visit the studio for portraits, consultations, and bookings.',
  },
  {
    question: 'How do I book a session?',
    answer:
      'Use the booking form on this page, send a WhatsApp message, or call +254 795 296329 to reserve your preferred date and service.',
  },
  {
    question: 'Do you do outdoor shoots?',
    answer:
      'Yes. Outdoor and on-location shoots can be arranged for portraits, couples, family sessions, graduations, and brand work.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Delivery timing depends on the service, but premium editing and timely turnaround are part of the Lix Photography experience. Final timing can be confirmed during booking.',
  },
  {
    question: 'Do you cover events?',
    answer:
      'Yes. Lix Photography covers events in Kisumu and nearby areas, including graduations, celebrations, launches, and private functions.',
  },
  {
    question: 'Can I book through WhatsApp?',
    answer:
      'Yes. A WhatsApp booking CTA is included so inquiries can move quickly from first contact to confirmed session details.',
  },
];

export const footerQuickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const socialPlaceholders = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
];
