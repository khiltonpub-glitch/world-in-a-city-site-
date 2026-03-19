'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-40 lg:py-56 bg-gradient-to-b from-grass-green/10 via-pitch-black to-ink-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-grass-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold text-sm font-montserrat tracking-cinematic mb-8"
          >
            JOIN THE JOURNEY
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-8xl font-montserrat font-black tracking-wide mb-8"
          >
            <span className="gradient-text cinematic-shadow">
              THIS IS JUST
            </span>
            <br />
            <span className="text-chalk-white cinematic-shadow">
              THE BEGINNING
            </span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl lg:text-2xl text-warm-gray max-w-3xl mx-auto mb-16 leading-relaxed font-inter"
          >
            The 2026 World Cup is coming. The stories are waiting to be told. 
            <span className="text-chalk-white"> Let's build something historic together.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.a
              href="mailto:hello@worldinacity.com"
              className="group btn-primary px-12 py-6 bg-gold text-pitch-black font-montserrat font-bold text-lg tracking-wide hover:bg-chalk-white transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              PARTNER WITH US
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
            </motion.a>
            <motion.a
              href="mailto:hello@worldinacity.com"
              className="btn-primary px-12 py-6 bg-transparent border-2 border-gold text-gold font-montserrat font-bold text-lg tracking-wide hover:bg-gold hover:text-pitch-black transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              REQUEST MEDIA KIT
            </motion.a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            <a
              href="mailto:hello@worldinacity.com"
              className="group p-8 bg-pitch-black/50 border border-warm-gray/20 hover:border-gold/50 transition-all duration-500"
            >
              <Mail className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg font-montserrat font-bold text-chalk-white mb-2 tracking-wide">
                EMAIL US
              </h3>
              <p className="text-warm-gray font-inter text-sm">
                hello@worldinacity.com
              </p>
            </a>

            <a
              href="tel:+1234567890"
              className="group p-8 bg-pitch-black/50 border border-warm-gray/20 hover:border-gold/50 transition-all duration-500"
            >
              <Phone className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg font-montserrat font-bold text-chalk-white mb-2 tracking-wide">
                CALL US
              </h3>
              <p className="text-warm-gray font-inter text-sm">
                +1 (XXX) XXX-XXXX
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  )
}
