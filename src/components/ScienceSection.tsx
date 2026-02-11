import type { ScienceComparison } from '../types/sanity'
import { buildImageUrl } from '../hooks/useSanityImage'

interface ScienceSectionProps {
  data: ScienceComparison
}

export default function ScienceSection({ data }: ScienceSectionProps) {
  const visualImage = buildImageUrl(data.visualImage, 1200, 675)

  return (
    <section className="py-20 px-4 md:px-8 bg-[#EFEEEA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-[#484F5D] text-center mb-16">
          {data.sectionTitle || 'Red Light works when the science is applied correctly'}
        </h2>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - What Most Brands Miss */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#484F5D] mb-6">
              {data.brandsMissTitle || 'What most brands miss:'}
            </h3>
            <ul className="space-y-4">
              {data.brandsMissPoints?.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-[#484F5D]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Our Approach */}
          <div className="bg-white p-8 rounded-xl shadow-md border-2 border-[#484F5D]/20">
            <h3 className="text-2xl font-semibold text-[#484F5D] mb-6">
              {data.ourApproachTitle || 'Our Approach:'}
            </h3>
            <ul className="space-y-4">
              {data.ourApproachPoints?.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#484F5D] font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual Image or Placeholder */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-6">
          {visualImage ? (
            <img
              src={visualImage}
              alt="Wavelength and irradiance visualization"
              className="w-full rounded-lg"
              loading="lazy"
            />
          ) : (
            <div className="aspect-video bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto mb-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-600 font-medium">Wavelength & Irradiance Visual</p>
                <p className="text-sm text-gray-500 mt-2">(Stock image placeholder)</p>
              </div>
            </div>
          )}
        </div>

        {/* Copy below visual */}
        {data.bottomCopy && (
          <p className="text-center text-lg text-[#484F5D] font-medium">
            {data.bottomCopy}
          </p>
        )}
      </div>
    </section>
  );
}
