// Sanity Image type
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
  };
}

// Site Settings
export interface SiteSettings {
  title: string;
  description?: string;
  whatsappNumber?: string;
  email?: string;
}

// Hero Section
export interface HeroSection {
  brandName: string;
  headline: string;
  subheadline: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  backgroundImage?: SanityImage;
}

// Trust Icons
export interface TrustIcon {
  _id: string;
  title: string;
  iconType: 'checkmark' | 'document' | 'lightning' | 'people';
  order: number;
}

// Why It Works Cards
export interface WhyItWorksCard {
  _id: string;
  title: string;
  description: string;
  order: number;
}

// Why It Works Section (singleton)
export interface WhyItWorksSection {
  sectionTitle: string;
  description?: string;
  ctaText?: string;
}

// Science Comparison
export interface ScienceComparison {
  sectionTitle?: string;
  brandsMissTitle?: string;
  brandsMissPoints?: string[];
  ourApproachTitle?: string;
  ourApproachPoints?: string[];
  visualImage?: SanityImage;
  bottomCopy?: string;
}

// Product
export interface ProductSpec {
  label: string;
  value: string;
  _key: string;
}

export interface Product {
  sectionTitle?: string;
  subheading?: string;
  manualStandImage?: SanityImage;
  motorizedStandImage?: SanityImage;
  specifications?: ProductSpec[];
  specsDocumentUrl?: string;
}

// Testimonials
export interface Testimonial {
  _id: string;
  firstName: string;
  role: string;
  testimonial: string;
  image?: SanityImage;
  featured?: boolean;
  order?: number;
}

// Team Members
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: SanityImage;
  isAdvisoryBoard?: boolean;
  order?: number;
}

// Pricing Plan
export interface PricingPlan {
  _id: string;
  title: string;
  duration: string;
  price: string;
  featured?: boolean;
  order: number;
}

// Journey Section
export interface JourneySection {
  sectionTitle: string;
  partnerName: string;
  partnerLogo?: SanityImage;
  description: string;
  image?: SanityImage;
  imageCaption?: string;
  ctaText?: string;
}

// Final CTA
export interface FinalCTA {
  label: string;
  heading: string;
  description?: string[];
  ctaText: string;
  ctaUrl: string;
}

// Aggregated data for App-level fetching
export interface SanitySiteData {
  siteSettings: SiteSettings | null;
  heroSection: HeroSection | null;
  trustIcons: TrustIcon[];
  whyItWorksSection: WhyItWorksSection | null;
  whyItWorksCards: WhyItWorksCard[];
  scienceComparison: ScienceComparison | null;
  product: Product | null;
  testimonials: Testimonial[];
  teamMembers: TeamMember[];
  journeySection: JourneySection | null;
  finalCTA: FinalCTA | null;
}
