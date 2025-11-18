export function FinalCTA() {
  return (
    <section className="section-lg bg-gradient-to-r from-primary-900 via-secondary-900 to-primary-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in delay-200"></div>
      </div>

      {/* Content */}
      <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-display-lg font-bold text-white mb-6">
          Ready to launch your
          <span className="text-gradient-alt"> landing pages?</span>
        </h2>

        <p className="text-body-lg text-white/80 mb-8">
          Join 10,000+ teams already building amazing landing pages with LandingPro.
          Start your free trial today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-neutral-100 transition-all duration-200 shadow-lg">
            Get Started Free
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200">
            Schedule Demo
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-body-sm">
          <div>✓ 14-day free trial</div>
          <div>✓ No credit card required</div>
          <div>✓ Cancel anytime</div>
        </div>
      </div>
    </section>
  )
}
