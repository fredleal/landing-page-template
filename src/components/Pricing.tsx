export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for solo creators and small teams',
      popular: false,
      features: [
        'Up to 5 landing pages',
        '10K monthly visitors',
        'Basic analytics',
        'Email integrations',
        'Community support',
        '99.9% uptime SLA',
      ],
    },
    {
      name: 'Professional',
      price: '79',
      description: 'For growing businesses and agencies',
      popular: true,
      features: [
        'Unlimited landing pages',
        'Unlimited visitors',
        'Advanced analytics',
        '500+ integrations',
        'Priority support',
        '99.9% uptime SLA',
        'A/B testing',
        'Custom domain',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      popular: false,
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'White-label solution',
        'SLA guarantee',
        'Advanced security',
        'Training & onboarding',
      ],
    },
  ]

  return (
    <section id="pricing" className="section-lg bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-heading-xl font-bold text-neutral-900">
            Simple, transparent
            <span className="text-gradient"> pricing</span>
          </h2>
          <p className="text-body-lg text-neutral-600">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative animate-fade-in-up ${plan.popular ? 'md:scale-105' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="badge-primary">Most Popular</span>
                </div>
              )}

              {/* Card */}
              <div className={`card h-full flex flex-col ${plan.popular ? 'card-elevated ring-2 ring-primary-500' : ''}`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-heading-sm font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-body-sm text-neutral-600 mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-display-md font-bold text-neutral-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-neutral-600">/month</span>}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="text-success-500 font-bold flex-shrink-0">✓</span>
                      <span className="text-body-sm text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={plan.popular ? 'btn-primary w-full' : 'btn-outline w-full'}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h3 className="text-heading-md font-bold text-neutral-900 text-center mb-8">
            Frequently asked questions
          </h3>

          <div className="space-y-4">
            {[
              { q: 'Can I cancel my subscription anytime?', a: 'Yes! You can cancel your subscription at any time, no questions asked.' },
              { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee if you are not satisfied.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
            ].map((item) => (
              <details key={item.q} className="group border border-neutral-200 rounded-lg p-4 cursor-pointer hover:bg-neutral-50 transition-colors">
                <summary className="font-semibold text-neutral-900 flex items-center justify-between">
                  {item.q}
                  <span className="text-primary-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-neutral-600 text-body-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
