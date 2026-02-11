import type { TeamMember } from '../types/sanity'
import { buildImageUrl } from '../hooks/useSanityImage'

interface TeamStorySectionProps {
  teamMembers: TeamMember[]
  storyData: {
    sectionTitle: string
    subtitle: string
    storyQuote: string
    attribution: string
  }
}

export default function TeamStorySection({ teamMembers, storyData }: TeamStorySectionProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
          {storyData.sectionTitle}
        </h2>

        <p className="text-2xl font-semibold text-gray-800 text-center mb-12">
          {storyData.subtitle}
        </p>

        {/* Story Content */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-md mb-16 max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-red-600 pl-6 mb-6">
            {storyData.storyQuote.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <footer className="mt-4 text-gray-600 font-medium">— {storyData.attribution}</footer>
          </blockquote>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const photoUrl = buildImageUrl(member.photo, 400, 400)

            return (
              <div key={member._id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* Photo */}
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={member.name}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <svg className="w-24 h-24 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-sm text-gray-600 mt-2">Team photo</p>
                    </div>
                  </div>
                )}

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  {member.bio && (
                    <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
