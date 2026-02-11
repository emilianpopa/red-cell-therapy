export default function HeroSection() {
  return (
    <section className="relative bg-[#EFEEEA] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl text-[#484F5D] mb-4">
            Red Cell Therapy
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl text-[#484F5D] mb-4">
          Professional-grade red light therapy, built on science
        </h2>

        {/* Subline */}
        <p className="text-lg md:text-xl text-[#484F5D]/80 mb-12 max-w-4xl mx-auto">
          Designed and validated in partnerships with Expand Health, Africa's leading Longevity Clinic
        </p>

        {/* Trust Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#484F5D]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#484F5D] text-center">
              Used at Expand Health (3+ years)
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#484F5D]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#484F5D] text-center">
              Independently tested irradiance
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#484F5D]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#484F5D] text-center">
              Clinically relevant wavelengths
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[#484F5D]/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-[#484F5D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#484F5D] text-center">
              Trusted by a Scientific Advisory Board
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#484F5D] text-white font-semibold rounded-lg hover:bg-[#3A404A] transition-colors shadow-lg">
            Explore the Science
          </button>
          <button className="px-8 py-4 bg-white text-[#484F5D] font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#484F5D]">
            See the Panels
          </button>
        </div>
      </div>
    </section>
  );
}
