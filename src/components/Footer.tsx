export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-max section-lg border-b border-neutral-800">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">LP</span>
              </div>
              <span className="font-bold text-lg">LandingPro</span>
            </div>
            <p className="text-neutral-400 text-body-sm">
              The landing page builder for modern teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Security', 'Roadmap', 'Updates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-body-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-body-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'Community', 'Help Center', 'API Docs', 'Templates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-body-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'Cookies', 'Status', 'License'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-body-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors duration-200"
                aria-label={social}
              >
                <span className="text-sm font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
          <p className="text-neutral-400 text-body-sm">
            © {currentYear} LandingPro. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-max section flex items-center justify-between flex-col sm:flex-row gap-4 text-neutral-400 text-body-sm">
        <p>Made with ❤️ by the LandingPro team</p>
        <p>Status: 99.9% uptime | Support: 24/7</p>
      </div>
    </footer>
  )
}
