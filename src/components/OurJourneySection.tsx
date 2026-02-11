import type { JourneySection } from '../types/sanity'
import { buildImageUrl } from '../hooks/useSanityImage'

interface OurJourneySectionProps {
  data: JourneySection
}

export default function OurJourneySection({ data }: OurJourneySectionProps) {
  const journeyImage = buildImageUrl(data.image, 800, 600)
  const partnerLogo = buildImageUrl(data.partnerLogo, 300, 150)

  return (
    <section className="py-20 px-4 md:px-8 bg-[#EFEEEA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-[#484F5D] text-center mb-16">
          {data.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          {journeyImage ? (
            <img
              src={journeyImage}
              alt={data.imageCaption || 'Our Journey'}
              className="rounded-xl overflow-hidden shadow-lg w-full"
              loading="lazy"
            />
          ) : (
            <div className="bg-gradient-to-br from-[#484F5D]/10 to-[#484F5D]/5 rounded-xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-32 h-32 mx-auto mb-4 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-[#484F5D] font-medium">{data.imageCaption || 'Panels in use at Expand Health'}</p>
                <p className="text-sm text-[#484F5D]/60 mt-2">(Stock image placeholder)</p>
              </div>
            </div>
          )}

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Partner Logo */}
            {partnerLogo ? (
              <div className="mb-6">
                <img
                  src={partnerLogo}
                  alt="Partner Logo"
                  className="max-w-xs"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="mb-6">
                <div className="inline-flex items-center justify-center px-8 py-4 bg-[#484F5D] text-white font-bold text-2xl rounded-lg shadow-md">
                  EXPAND
                </div>
              </div>
            )}

            <p className="text-xl font-semibold text-[#484F5D]">
              {data.partnerName}
            </p>

            <p className="text-lg text-[#484F5D]/80 leading-relaxed">
              {data.description}
            </p>

            {/* CTA Button */}
            {data.ctaText && (
              <div className="pt-4">
                <button className="px-8 py-4 bg-[#484F5D] text-white font-semibold rounded-lg hover:bg-[#3A404A] transition-colors shadow-lg">
                  {data.ctaText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
