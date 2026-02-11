import FramerNavigation from './components/FramerNavigation'
import HeroSection from './components/HeroSection'
import WhyItWorksSection from './components/WhyItWorksSection'
import ScienceSection from './components/ScienceSection'
import OurJourneySection from './components/OurJourneySection'
import TestimonialsSection from './components/TestimonialsSection'
import ProductSection from './components/ProductSection'
import TeamStorySection from './components/TeamStorySection'
import FinalCTASection from './components/FinalCTASection'
import { useSanityData } from './hooks/useSanityData'
import {
  FALLBACK_HERO,
  FALLBACK_TRUST_ICONS,
  FALLBACK_WHY_SECTION,
  FALLBACK_WHY_CARDS,
  FALLBACK_SCIENCE,
  FALLBACK_PRODUCT,
  FALLBACK_TESTIMONIALS,
  FALLBACK_TEAM,
  FALLBACK_TEAM_STORY,
  FALLBACK_JOURNEY,
  FALLBACK_FINAL_CTA,
} from './constants/fallbacks'

function App() {
  const { data } = useSanityData()

  // Merge Sanity data with fallbacks
  const heroData = data?.heroSection || FALLBACK_HERO
  const trustIcons = data?.trustIcons?.length ? data.trustIcons : FALLBACK_TRUST_ICONS
  const whyItWorksSection = data?.whyItWorksSection || FALLBACK_WHY_SECTION
  const whyItWorksCards = data?.whyItWorksCards?.length ? data.whyItWorksCards : FALLBACK_WHY_CARDS
  const scienceData = data?.scienceComparison || FALLBACK_SCIENCE
  const productData = data?.product || FALLBACK_PRODUCT
  const testimonials = data?.testimonials?.length ? data.testimonials : FALLBACK_TESTIMONIALS
  const teamMembers = data?.teamMembers?.length ? data.teamMembers : FALLBACK_TEAM
  const journeyData = data?.journeySection || FALLBACK_JOURNEY
  const finalCTAData = data?.finalCTA || FALLBACK_FINAL_CTA

  return (
    <div className="min-h-screen">
      <FramerNavigation />
      <HeroSection data={heroData} trustIcons={trustIcons} />
      <WhyItWorksSection sectionData={whyItWorksSection} cards={whyItWorksCards} />
      <ScienceSection data={scienceData} />
      <OurJourneySection data={journeyData} />
      <TestimonialsSection testimonials={testimonials} />
      <ProductSection data={productData} />
      <TeamStorySection teamMembers={teamMembers} storyData={FALLBACK_TEAM_STORY} />
      <FinalCTASection data={finalCTAData} />
      <div id="framer-footer-placeholder" data-source="framer" />
    </div>
  )
}

export default App
