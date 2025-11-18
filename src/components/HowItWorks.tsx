export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Page',
      description: 'Start with a blank canvas or choose from our professionally designed templates.',
      icon: '🎨',
    },
    {
      number: '02',
      title: 'Customize & Design',
      description: 'Use our drag-and-drop editor to personalize every element. No coding knowledge needed.',
      icon: '✨',
    },
    {
      number: '03',
      title: 'Add Integrations',
      description: 'Connect with your CRM, email platform, or payment processor in a few clicks.',
      icon: '🔌',
    },
    {
      number: '04',
      title: 'Publish & Track',
      description: 'Go live instantly and monitor performance with real-time analytics dashboard.',
      icon: '📈',
    },
  ]

  return (
    <section id="how-it-works" className="section-lg bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-heading-xl font-bold text-neutral-900">
            How it works — Simple and fast
          </h2>
          <p className="text-body-lg text-neutral-600">
            Get your landing page live in minutes, not weeks. Just four simple steps to success.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Connector Line */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary-200 to-transparent"></div>
              )}

              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-3xl shadow-md">
                  {step.icon}
                  <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-primary-500 shadow-base">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-heading-sm font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-body-sm text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Demo */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-primary-500/10 to-secondary-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl p-12 border border-neutral-100 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-xl flex items-center justify-center text-neutral-400">
                <div className="text-center">
                  <p className="text-sm font-medium">Interactive Demo</p>
                  <p className="text-xs">Four Steps Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
