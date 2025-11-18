export function Features() {
  const features = [
    {
      title: 'Drag & Drop Editor',
      description: 'Create beautiful pages without touching a single line of code. Intuitive editor made for everyone.',
      icon: '✏️',
      color: 'primary',
    },
    {
      title: 'Mobile Responsive',
      description: 'Perfect on every device. Your landing pages automatically adapt to phones, tablets, and desktops.',
      icon: '📱',
      color: 'secondary',
    },
    {
      title: 'Built-in Analytics',
      description: 'Track visitor behavior, conversion rates, and ROI with real-time analytics dashboard.',
      icon: '📊',
      color: 'accent',
    },
    {
      title: 'Smart Integrations',
      description: 'Connect with your favorite tools. Zapier, Stripe, HubSpot, and 500+ more integrations.',
      icon: '🔗',
      color: 'primary',
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices help your landing pages rank higher in search results.',
      icon: '🚀',
      color: 'secondary',
    },
    {
      title: 'A/B Testing',
      description: 'Run multiple versions of your pages and automatically serve the best performing one.',
      icon: '🎯',
      color: 'accent',
    },
  ]

  return (
    <section id="features" className="section-lg bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-heading-xl font-bold text-neutral-900">
            Powerful features to
            <span className="text-gradient"> grow your business</span>
          </h2>
          <p className="text-body-lg text-neutral-600">
            Everything you need to create, launch, and optimize your landing pages for maximum conversions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="card animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-heading-sm font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
