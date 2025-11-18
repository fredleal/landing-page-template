export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStartup',
      image: '👩‍💼',
      quote: 'LandingPro helped us increase conversion rates by 340%. The analytics dashboard gave us insights we never had before.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      image: '👨‍💼',
      quote: 'The ease of use is incredible. Our entire team was able to build pages without any training. Saved us thousands in development costs.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder & Designer',
      image: '👩‍🎨',
      quote: 'Beautiful templates, powerful features, and outstanding support. LandingPro is the complete solution for landing pages.',
      rating: 5,
    },
  ]

  return (
    <section className="section-lg bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-heading-xl font-bold text-neutral-900">
            Loved by
            <span className="text-gradient"> thousands of creators</span>
          </h2>
          <p className="text-body-lg text-neutral-600">
            See what our customers say about LandingPro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-warning-500">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-body-base text-neutral-700 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-body-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <p className="text-center text-neutral-600 text-body-sm font-medium mb-8">
            Trusted by leading companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {['TechCorp', 'StartupAI', 'CloudInc', 'DataFlow', 'InnovateLabs'].map((company) => (
              <div key={company} className="text-neutral-400 font-semibold text-sm hover:text-neutral-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
