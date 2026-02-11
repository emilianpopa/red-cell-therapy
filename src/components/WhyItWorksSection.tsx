export default function WhyItWorksSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-[#484F5D] text-center mb-16">
          Why Red Light Actually Works
        </h2>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-[#EFEEEA] p-8 rounded-xl shadow-md border border-[#484F5D]/10">
            <h3 className="text-2xl font-semibold text-[#484F5D] mb-4">
              Targeted Light → Cellular Energy
            </h3>
            <p className="text-[#484F5D]/80 leading-relaxed">
              Specific wavelengths of light activate enzymes inside your mitochondria, helping cells produce more ATP
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EFEEEA] p-8 rounded-xl shadow-md border border-[#484F5D]/10">
            <h3 className="text-2xl font-semibold text-[#484F5D] mb-4">
              More Energy → Better Cell Function
            </h3>
            <p className="text-[#484F5D]/80 leading-relaxed">
              Cells with more available energy function better
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EFEEEA] p-8 rounded-xl shadow-md border border-[#484F5D]/10">
            <h3 className="text-2xl font-semibold text-[#484F5D] mb-4">
              Healthier Cells → Whole Body Benefits
            </h3>
            <p className="text-[#484F5D]/80 leading-relaxed">
              When cellular health improves, everything in the body benefits
            </p>
          </div>
        </div>

        {/* Copy under cards */}
        <div className="text-center mb-8">
          <p className="text-lg text-[#484F5D] max-w-4xl mx-auto mb-8">
            That's why Red Light Therapy has been studied in hundreds of peer-reviewed trials across recovery, skin health, pain, inflammation, and performance
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-[#484F5D] text-white font-semibold rounded-lg hover:bg-[#3A404A] transition-colors shadow-lg">
            Go deeper into the science
          </button>
        </div>
      </div>
    </section>
  );
}
