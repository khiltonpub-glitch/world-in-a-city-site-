'use client'

import { Instagram, Twitter, Youtube, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    About: [
      { name: 'The Project', href: '#about' },
      { name: 'The Team', href: '#team' },
      { name: 'Press Kit', href: '#press' },
    ],
    Partner: [
      { name: 'For Sponsors', href: '#sponsors' },
      { name: 'For Cities', href: '#cities-partner' },
      { name: 'For Creators', href: '#creators' },
    ],
    Connect: [
      { name: 'Contact', href: '#contact' },
      { name: 'Newsletter', href: '#newsletter' },
      { name: 'Careers', href: '#careers' },
    ],
  }

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-pitch-black border-t border-warm-gray/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-warm-gray/20">
          <div className="max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-montserrat mb-4 gradient-text">
              STAY CONNECTED
            </h3>
            <p className="text-warm-gray mb-8 text-lg">
              Join our global community. Get updates on cities, stories, and premiere dates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-ink-black border border-warm-gray/30 text-chalk-white placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="btn-primary px-8 py-4 bg-gold text-pitch-black font-montserrat font-bold tracking-wide hover:bg-chalk-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SUBSCRIBE
              </motion.button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-montserrat font-bold tracking-cinematic text-gold mb-4">
              THE WORLD<br />IN A CITY
            </h2>
            <p className="text-warm-gray text-sm leading-relaxed">
              A global documentary exploring culture, identity, and belonging through the lens of the FIFA World Cup.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-montserrat font-bold tracking-wide text-chalk-white mb-6">
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-warm-gray hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-warm-gray/20">
          <p className="text-warm-gray text-sm mb-6 md:mb-0">
            © {currentYear} Hilton Sports Group. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-warm-gray hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={22} />
              </motion.a>
            ))}
            <motion.a
              href="mailto:hello@worldinacity.com"
              className="text-warm-gray hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
