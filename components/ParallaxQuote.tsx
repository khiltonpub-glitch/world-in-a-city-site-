'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxQuote() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} className="relative py-40 lg:py-56 bg-gradient-to-b from-pitch-black via-grass-green/20 to-pitch-black overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center opacity-10"
      >
        <div className="text-[20rem] font-montserrat font-black text-gold/10">2026</div>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div style={{ opacity, scale }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm font-montserrat tracking-cinematic mb-8"
          >
            THE VISION
          </motion.p>
          
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-inter font-light italic text-chalk-white leading-relaxed mb-8"
          >
            "Every city has a story.<br />
            Every tournament writes a new chapter.<br />
            We're here to tell both."
          </motion.blockquote>

          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block text-warm-gray text-base font-montserrat tracking-wide not-italic"
          >
            — THE WORLD IN A CITY
          </motion.cite>
        </motion.div>
      </div>
    </section>
  )
}
