import type { WhyItWorksSection as WhyItWorksSectionType, WhyItWorksCard } from '../types/sanity'

interface WhyItWorksSectionProps {
  sectionData: WhyItWorksSectionType
  cards: WhyItWorksCard[]
}

export default function WhyItWorksSection({ sectionData, cards }: WhyItWorksSectionProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-[#484F5D] text-center mb-16">
          {sectionData.sectionTitle}
        </h2>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card) => (
            <div key={card._id} className="bg-[#EFEEEA] p-8 rounded-xl shadow-md border border-[#484F5D]/10">
              <h3 className="text-2xl font-semibold text-[#484F5D] mb-4">
                {card.title}
              </h3>
              <p className="text-[#484F5D]/80 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Copy under cards */}
        {sectionData.description && (
          <div className="text-center mb-8">
            <p className="text-lg text-[#484F5D] max-w-4xl mx-auto mb-8">
              {sectionData.description}
            </p>

            {/* CTA Button */}
            {sectionData.ctaText && (
              <button className="px-8 py-4 bg-[#484F5D] text-white font-semibold rounded-lg hover:bg-[#3A404A] transition-colors shadow-lg">
                {sectionData.ctaText}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
