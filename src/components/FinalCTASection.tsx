import type { FinalCTA } from '../types/sanity'

interface FinalCTASectionProps {
  data: FinalCTA
}

export default function FinalCTASection({ data }: FinalCTASectionProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#484F5D]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-[#E4DDD5]/80 mb-2 uppercase tracking-wider">
          {data.label}
        </p>

        <h2 className="text-3xl md:text-4xl text-[#E4DDD5] mb-6">
          {data.heading}
        </h2>

        <div className="space-y-4 mb-10 text-[#E4DDD5]/90 max-w-2xl mx-auto">
          {data.description?.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <a
          href={data.ctaUrl}
          className="inline-block px-8 py-3 bg-[#25D366] text-white font-medium rounded hover:bg-[#20BA5A] transition-colors"
        >
          {data.ctaText}
        </a>
      </div>
    </section>
  );
}
