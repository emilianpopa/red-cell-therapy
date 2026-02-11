import type {
  HeroSection,
  TrustIcon,
  WhyItWorksSection,
  WhyItWorksCard,
  ScienceComparison,
  Product,
  Testimonial,
  TeamMember,
  JourneySection,
  FinalCTA,
} from '../types/sanity';

// Hero Section
export const FALLBACK_HERO: HeroSection = {
  brandName: 'Red Cell Therapy',
  headline: 'Professional-grade red light therapy, built on science',
  subheadline:
    "Designed and validated in partnerships with Expand Health, Africa's leading Longevity Clinic",
  ctaPrimary: 'Explore the Science',
  ctaSecondary: 'See the Panels',
};

// Trust Icons
export const FALLBACK_TRUST_ICONS: TrustIcon[] = [
  {
    _id: '1',
    title: 'Used at Expand Health (3+ years)',
    iconType: 'checkmark',
    order: 1,
  },
  {
    _id: '2',
    title: 'Independently tested irradiance',
    iconType: 'document',
    order: 2,
  },
  {
    _id: '3',
    title: 'Clinically relevant wavelengths',
    iconType: 'lightning',
    order: 3,
  },
  {
    _id: '4',
    title: 'Trusted by a Scientific Advisory Board',
    iconType: 'people',
    order: 4,
  },
];

// Why It Works Section
export const FALLBACK_WHY_SECTION: WhyItWorksSection = {
  sectionTitle: 'Why Red Light Actually Works',
  description:
    "That's why Red Light Therapy has been studied in hundreds of peer-reviewed trials across recovery, skin health, pain, inflammation, and performance",
  ctaText: 'Go deeper into the science',
};

// Why It Works Cards
export const FALLBACK_WHY_CARDS: WhyItWorksCard[] = [
  {
    _id: '1',
    title: 'Targeted Light → Cellular Energy',
    description:
      'Specific wavelengths of light activate enzymes inside your mitochondria, helping cells produce more ATP',
    order: 1,
  },
  {
    _id: '2',
    title: 'More Energy → Better Cell Function',
    description: 'Cells with more available energy function better',
    order: 2,
  },
  {
    _id: '3',
    title: 'Healthier Cells → Whole Body Benefits',
    description: 'When cellular health improves, everything in the body benefits',
    order: 3,
  },
];

// Science Comparison
export const FALLBACK_SCIENCE: ScienceComparison = {
  sectionTitle: 'Red Light works when the science is applied correctly',
  brandsMissTitle: 'What most brands miss:',
  brandsMissPoints: [
    'Irradiance without distance',
    'No protocol understanding',
    'Unvalidated wavelengths',
    'Built for marketing',
  ],
  ourApproachTitle: 'Our Approach:',
  ourApproachPoints: [
    'Clinically studied wavelengths',
    'Measured at 6-12 inches',
    'Outcome based protocols',
    'Used daily at Expand Health',
  ],
  bottomCopy: 'Wavelength, distance, time, and frequency all change the biological effect',
};

// Product
export const FALLBACK_PRODUCT: Product = {
  sectionTitle: 'One Product - Done Properly',
  subheading: 'We chose to focus on one product - because quality comes from focus not variety',
  specifications: [
    {
      _key: '1',
      label: 'Wavelengths:',
      value: '630 / 660 / 810 / 830 / 850 nm',
    },
    {
      _key: '2',
      label: 'Verified irradiance:',
      value: 'at real treatment distances (6–12")',
    },
    {
      _key: '3',
      label: 'Session guidance:',
      value: '10–20 minutes, protocol dependent',
    },
    {
      _key: '4',
      label: 'Controls:',
      value: 'simple wavelength + intensity control',
    },
    {
      _key: '5',
      label: 'Certifications:',
      value: 'CE / electrical safety compliant (EU-friendly wording)',
    },
  ],
  specsDocumentUrl: '#',
};

// Testimonials
export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: '1',
    firstName: 'Mackie',
    role: 'Financial Advisor',
    testimonial:
      'The red light therapy has been a game-changer for my recovery routine. I feel more energized and focused.',
  },
  {
    _id: '2',
    firstName: 'Isaac',
    role: 'Radiologist',
    testimonial:
      'As a medical professional, I appreciate the science-backed approach. The results speak for themselves.',
  },
  {
    _id: '3',
    firstName: 'Sarah',
    role: 'Athlete',
    testimonial:
      'Recovery times have improved significantly. I can train harder and bounce back faster.',
  },
];

// Team Members
export const FALLBACK_TEAM: TeamMember[] = [
  {
    _id: '1',
    name: 'Jack Harland',
    role: 'Founder',
    order: 1,
  },
  {
    _id: '2',
    name: 'Team Member 2',
    role: 'Role',
    order: 2,
  },
  {
    _id: '3',
    name: 'Team Member 3',
    role: 'Role',
    order: 3,
  },
];

// Team Story Quote
export const FALLBACK_TEAM_STORY = {
  sectionTitle: 'Team & Story',
  subtitle: 'Built by people who use it - daily',
  storyQuote: `"This brand didn't start as a product idea.

It started inside Expand Health - where red light therapy is used by our clients every day for recovery, performance, skin, and cellular health.

We tested different setups, wavelengths, distances, and protocols over years of real use. What worked stayed. What didn't, disappeared.

Red Cell Therapy is the result of that process - simplified, standardised, and built to be used properly."`,
  attribution: 'Jack Harland, Founder',
};

// Journey Section
export const FALLBACK_JOURNEY: JourneySection = {
  sectionTitle: 'Our Journey',
  partnerName: "Powered by Expand Health - Africa's Leading Longevity Clinic",
  description:
    'Red Cell Therapy was built from real clinical use. Every specification comes from what we use, test, and trust in practise',
  imageCaption: 'Panels in use at Expand Health',
  ctaText: 'Our Advisory Board',
};

// Final CTA
export const FALLBACK_FINAL_CTA: FinalCTA = {
  label: 'Red Light Therapy',
  heading: 'What to expect from your session?',
  description: [
    'Red Light Therapy involves relaxing inside a comfortable treatment space while specific wavelengths penetrate your skin, promoting deep cellular repair and rejuvenation.',
    'This is your time to unwind—relax, meditate, or simply let the therapy work as the light recharges both body and mind.',
    'For an extra boost, combine with other modalities like HBOT or infrared sauna to further promote the effects of cellular optimization.',
  ],
  ctaText: 'SECURE YOUR EXPERIENCE',
  ctaUrl: 'https://wa.me/27664480238',
};
