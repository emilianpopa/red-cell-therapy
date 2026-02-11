export default function ProductSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-[#484F5D] text-center mb-6">
          One Product - Done Properly
        </h2>

        {/* Subheading */}
        <p className="text-xl text-[#484F5D]/80 text-center mb-16 max-w-3xl mx-auto">
          We chose to focus on one product - because quality comes from focus not variety
        </p>

        {/* Product Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Manual Stand */}
          <div className="bg-[#EFEEEA] rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#484F5D]/10 to-[#484F5D]/5 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-32 h-32 mx-auto mb-4 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[#484F5D] font-medium">Manual Stand</p>
                <p className="text-sm text-[#484F5D]/60 mt-2">(Product image placeholder)</p>
              </div>
            </div>
          </div>

          {/* Motorized Stand */}
          <div className="bg-[#EFEEEA] rounded-xl overflow-hidden shadow-md">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#484F5D]/10 to-[#484F5D]/5 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-32 h-32 mx-auto mb-4 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[#484F5D] font-medium">Motorized Stand</p>
                <p className="text-sm text-[#484F5D]/60 mt-2">(Product image placeholder)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="bg-[#EFEEEA] rounded-xl p-8 shadow-md mb-8">
          <h3 className="text-2xl text-[#484F5D] mb-6">Specifications</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#484F5D]/20">
              <div className="font-semibold text-[#484F5D]">Wavelengths:</div>
              <div className="md:col-span-2 text-[#484F5D]/80">630 / 660 / 810 / 830 / 850 nm</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#484F5D]/20">
              <div className="font-semibold text-[#484F5D]">Verified irradiance:</div>
              <div className="md:col-span-2 text-[#484F5D]/80">at real treatment distances (6–12")</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#484F5D]/20">
              <div className="font-semibold text-[#484F5D]">Session guidance:</div>
              <div className="md:col-span-2 text-[#484F5D]/80">10–20 minutes, protocol dependent</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-[#484F5D]/20">
              <div className="font-semibold text-[#484F5D]">Controls:</div>
              <div className="md:col-span-2 text-[#484F5D]/80">simple wavelength + intensity control</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-semibold text-[#484F5D]">Certifications:</div>
              <div className="md:col-span-2 text-[#484F5D]/80">CE / electrical safety compliant (EU-friendly wording)</div>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-[#484F5D] font-semibold hover:text-[#3A404A] transition-colors"
          >
            View full specs + reports (PDF)
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
