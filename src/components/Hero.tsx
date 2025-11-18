export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-purple-50/50 z-0"></div>

      {/* Animated Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in z-0"></div>
      <div className="absolute -bottom-32 right-10 w-72 h-72 bg-secondary-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in delay-200 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in delay-400 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container-max section-lg text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="badge-primary">✨ Launch Your Ideas Into Reality</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display-xl lg:text-[3.5rem] font-bold leading-tight text-neutral-900">
            The
            <span className="text-gradient"> Landing Page </span>
            Builder for
            <br />
            Modern Teams
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Create stunning, conversion-optimized landing pages in minutes. No coding required.
            Beautiful templates, smart analytics, and powerful integrations—all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="btn-primary">
              Start Free Trial
            </button>
            <button className="btn-outline">
              Watch Demo
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-neutral-200">
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">10K+</span> teams building amazing landing pages
            </div>
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">99.9%</span> uptime guaranteed
            </div>
            <div className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-900">24/7</span> customer support
            </div>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-3xl"></div>
          <div className="relative bg-gradient-to-b from-white to-neutral-50 rounded-2xl p-8 md:p-12 shadow-elevation border border-neutral-100">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-neutral-400">
              <span className="text-center">
                <p className="text-sm">Mockup Image Here</p>
                <p className="text-xs">Dashboard Preview</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
