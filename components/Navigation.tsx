'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'THE CITIES', href: '#cities' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'CREATORS', href: '#creators' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-pitch-black/95 backdrop-blur-lg shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="text-base lg:text-xl font-montserrat font-bold tracking-cinematic text-chalk-white hover:text-gold transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">THE WORLD IN A CITY</span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-xs font-montserrat tracking-wide text-warm-gray hover:text-gold transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn-primary px-6 py-3 bg-gold text-pitch-black font-montserrat text-xs font-bold tracking-wide hover:bg-chalk-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                PARTNER WITH US
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-chalk-white hover:text-gold transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="lg:hidden fixed inset-0 bg-pitch-black/98 backdrop-blur-lg z-40 pt-24"
            >
              <div className="px-6 py-12 h-full overflow-y-auto">
                <div className="space-y-6 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="block text-3xl font-montserrat tracking-wide text-warm-gray hover:text-gold transition-colors duration-300 py-3 border-b border-warm-gray/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="block w-full px-8 py-5 bg-gold text-pitch-black font-montserrat text-base font-bold tracking-wide text-center hover:bg-chalk-white transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PARTNER WITH US
                </motion.a>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-16 pt-8 border-t border-warm-gray/20"
                >
                  <p className="text-warm-gray text-sm font-inter mb-4">Connect with us</p>
                  <a href="mailto:hello@worldinacity.com" className="text-gold hover:text-chalk-white transition-colors text-sm font-inter">
                    hello@worldinacity.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
