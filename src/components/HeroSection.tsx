import type { HeroSection as HeroSectionType, TrustIcon } from '../types/sanity'
import { buildImageUrl } from '../hooks/useSanityImage'
import { getIconComponent } from '../utils/iconMapper'

interface HeroSectionProps {
  data: HeroSectionType
  trustIcons: TrustIcon[]
}

export default function HeroSection({ data, trustIcons }: HeroSectionProps) {
  const bgImage = buildImageUrl(data.backgroundImage, 1920, 1080)

  return (
    <section className="relative bg-[#EFEEEA] py-20 px-4 md:px-8">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl text-[#484F5D] mb-4">
            {data.brandName}
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl text-[#484F5D] mb-4">
          {data.headline}
        </h2>

        {/* Subline */}
        <p className="text-lg md:text-xl text-[#484F5D]/80 mb-12 max-w-4xl mx-auto">
          {data.subheadline}
        </p>

        {/* Trust Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          {trustIcons.map((icon) => (
            <div key={icon._id} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#484F5D]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {getIconComponent(icon.iconType)}
                </svg>
              </div>
              <p className="text-sm font-medium text-[#484F5D] text-center">
                {icon.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#484F5D] text-white font-semibold rounded-lg hover:bg-[#3A404A] transition-colors shadow-lg">
            {data.ctaPrimary || 'Explore the Science'}
          </button>
          <button className="px-8 py-4 bg-white text-[#484F5D] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#484F5D]">
            {data.ctaSecondary || 'See the Panels'}
          </button>
        </div>
      </div>
    </section>
  );
}
