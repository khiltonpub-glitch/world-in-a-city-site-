'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhatThisIs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="what-this-is"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-pitch-black to-ink-black"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold text-sm font-montserrat tracking-cinematic mb-6"
          >
            THE CONCEPT
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide gradient-text mb-8">
            A GLOBAL STORY,<br />TOLD THROUGH CITIES
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="relative pl-8 border-l-2 border-gold/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold rounded-full transform -translate-x-[5px]" />
            <p className="text-lg lg:text-xl text-chalk-white/90 leading-relaxed font-inter">
              The FIFA World Cup is more than a tournament—it's a{' '}
              <span className="text-gold font-semibold">cultural phenomenon</span>{' '}
              that reshapes cities, communities, and entire nations.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-gold/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold rounded-full transform -translate-x-[5px]" />
            <p className="text-lg lg:text-xl text-chalk-white/90 leading-relaxed font-inter">
              <span className="text-gold font-semibold">THE WORLD IN A CITY</span> follows sixteen host cities across North America—from the historic 1994 tournament to the upcoming 2026 World Cup—exploring how these global events transform urban landscapes and local identities.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-gold/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold rounded-full transform -translate-x-[5px]" />
            <p className="text-lg lg:text-xl text-chalk-white/90 leading-relaxed font-inter">
              Through cinematic storytelling, we examine the intersection of{' '}
              <span className="text-gold font-semibold">sport, culture, and community</span>—how football unites diverse populations, drives economic transformation, and creates lasting legacies in the cities that host the beautiful game.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-8 bg-pitch-black/50 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500">
            <h3 className="text-5xl lg:text-6xl font-montserrat font-black text-gold mb-4">16</h3>
            <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
              Host Cities
            </p>
          </div>
          <div className="p-8 bg-pitch-black/50 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500">
            <h3 className="text-5xl lg:text-6xl font-montserrat font-black text-gold mb-4">4</h3>
            <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
              Cinematic Episodes
            </p>
          </div>
          <div className="p-8 bg-pitch-black/50 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500">
            <h3 className="text-5xl lg:text-6xl font-montserrat font-black text-gold mb-4">∞</h3>
            <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
              Stories to Tell
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
