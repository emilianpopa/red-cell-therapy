export default function TeamStorySection() {
  const teamMembers = [
    {
      name: "Jack Harland",
      role: "Founder",
    },
    {
      name: "Team Member 2",
      role: "Role",
    },
    {
      name: "Team Member 3",
      role: "Role",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          Team & Story
        </h2>

        <p className="text-2xl font-semibold text-gray-800 text-center mb-12">
          Built by people who use it - daily
        </p>

        {/* Story Content */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Red Cell Therapy exists because we needed a system we could trust in real clinical practice.
          </p>

          <blockquote className="border-l-4 border-red-600 pl-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              "This brand didn't start as a product idea.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              It started inside Expand Health - where red light therapy is used by our clients every day for recovery, performance, skin, and cellular health.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We tested different setups, wavelengths, distances, and protocols over years of real use. What worked stayed. What didn't, disappeared.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Red Cell Therapy is the result of that process - simplified, standardised, and built to be used properly."
            </p>
            <footer className="mt-4 text-gray-600 font-medium">— Jack Harland, Founder</footer>
          </blockquote>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              {/* Photo Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm text-gray-600 mt-2">Team photo</p>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
