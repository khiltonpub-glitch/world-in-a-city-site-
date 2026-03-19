'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-black via-pitch-black to-grass-green opacity-90" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold text-sm lg:text-base font-montserrat tracking-cinematic mb-8"
          >
            A HILTON SPORTS GROUP PRODUCTION
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-montserrat font-black tracking-wide mb-8 leading-none"
          >
            <span className="gradient-text cinematic-shadow">
              THE WORLD
            </span>
            <br />
            <span className="text-chalk-white cinematic-shadow">
              IN A CITY
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-warm-gray font-inter font-light max-w-4xl mx-auto mb-6 leading-relaxed"
          >
            One tournament. Many cultures. Infinite stories.
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-base md:text-lg lg:text-xl text-warm-gray/80 font-inter max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A global documentary exploring how the FIFA World Cup transforms cities through football, food, business, and identity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#cities"
              className="btn-primary px-10 py-5 bg-gold text-pitch-black font-montserrat font-bold text-base tracking-wide hover:bg-chalk-white transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE THE CITIES
            </motion.a>
            <motion.a
              href="#sponsors"
              className="btn-primary px-10 py-5 bg-transparent border-2 border-gold text-gold font-montserrat font-bold text-base tracking-wide hover:bg-gold hover:text-pitch-black transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              BECOME A PARTNER
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#what-this-is"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-warm-gray hover:text-gold transition-colors duration-300"
          >
            <span className="text-xs font-montserrat tracking-wide mb-2">SCROLL</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
