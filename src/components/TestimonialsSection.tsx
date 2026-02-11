import type { Testimonial } from '../types/sanity'
import { buildImageUrl } from '../hooks/useSanityImage'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Testimonials
        </h2>

        {/* Carousel Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-min">
            {testimonials.map((testimonial) => {
              const image = buildImageUrl(testimonial.image, 640, 360)

              return (
                <div
                  key={testimonial._id}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  {image ? (
                    <img
                      src={image}
                      alt={testimonial.firstName}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <svg className="w-20 h-20 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <p className="text-sm text-gray-600 mt-2">Installation photo</p>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {testimonial.firstName}
                        </h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <p className="text-center text-sm text-gray-500 mt-6">
          ← Scroll to see more testimonials →
        </p>
      </div>
    </section>
  );
}
