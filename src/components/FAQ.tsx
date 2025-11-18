import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is LandingPro?',
      answer: 'LandingPro is a no-code landing page builder that lets you create beautiful, conversion-optimized pages in minutes without any technical knowledge.',
    },
    {
      question: 'Do I need coding skills?',
      answer: 'No! LandingPro is designed for everyone. Our drag-and-drop editor makes it easy to create professional pages without writing any code.',
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Yes! We offer 500+ integrations with popular tools like Zapier, Stripe, HubSpot, Mailchimp, and many more.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.',
    },
    {
      question: 'Can I export my pages?',
      answer: 'On our Professional and Enterprise plans, you can export your pages or keep them hosted on our platform. We give you full control.',
    },
    {
      question: 'What about customer support?',
      answer: 'We offer 24/7 customer support via email and live chat. Professional and Enterprise plans get priority support.',
    },
  ]

  return (
    <section id="faq" className="section-lg bg-white">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-heading-xl font-bold text-neutral-900">
            Frequently asked
            <span className="text-gradient"> questions</span>
          </h2>
          <p className="text-body-lg text-neutral-600">
            Can't find the answer you're looking for? Check out our detailed documentation or contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-neutral-200 rounded-lg overflow-hidden transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-neutral-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-neutral-900 text-left text-heading-sm">
                  {faq.question}
                </h3>
                <span
                  className="flex-shrink-0 text-primary-500 transition-transform duration-300"
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-neutral-600 text-body-base border-t border-neutral-200 animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl text-center">
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <h3 className="text-heading-sm font-bold text-neutral-900 mb-4">
            Get in touch with our support team
          </h3>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
