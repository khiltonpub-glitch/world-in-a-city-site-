'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Tv, Globe2, Play, Smartphone } from 'lucide-react'

export default function Distribution() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const platforms = [
    {
      icon: Tv,
      title: 'Premium Streaming',
      description: 'Positioning for distribution on Netflix, Amazon Prime Video, Apple TV+, and other leading platforms.'
    },
    {
      icon: Play,
      title: 'Sports Networks',
      description: 'Alignment with ESPN+, DAZN, and football-focused digital networks reaching passionate fan bases.'
    },
    {
      icon: Globe2,
      title: 'International Markets',
      description: 'Global reach across North America, Latin America, Europe, and Asia through regional partners.'
    },
    {
      icon: Smartphone,
      title: 'Digital First',
      description: 'Social platforms, YouTube, and digital-native distribution for younger, mobile-first audiences.'
    }
  ]

  return (
    <section
      id="distribution"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-ink-black via-pitch-black to-grass-green/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            GLOBAL REACH
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide gradient-text mb-8">
            BUILT FOR GLOBAL<br />DISTRIBUTION
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Premium documentary content designed for the world's leading streaming platforms and digital networks.
          </p>
        </motion.div>

        {/* Distribution Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {platforms.map((platform, index) => {
            const Icon = platform.icon
            return (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group p-8 bg-pitch-black border border-warm-gray/10 hover:border-gold/30 transition-all duration-500 text-center"
              >
                <Icon className="text-gold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" size={48} strokeWidth={1.5} />
                <h3 className="text-lg font-montserrat font-bold text-chalk-white mb-4 tracking-wide uppercase">
                  {platform.title}
                </h3>
                <p className="text-warm-gray leading-relaxed font-inter text-sm">
                  {platform.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Distribution Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative p-12 lg:p-16 bg-gradient-to-br from-gold/10 via-transparent to-grass-green/20 border border-gold/30"
        >
          <h3 className="text-3xl lg:text-4xl font-montserrat font-black text-chalk-white mb-12 tracking-wide uppercase text-center">
            Distribution Targets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-montserrat font-black gradient-text mb-4">200M+</div>
              <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
                Potential Global Audience
              </p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-montserrat font-black gradient-text mb-4">16</div>
              <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
                Major North American Markets
              </p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-montserrat font-black gradient-text mb-4">4K</div>
              <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
                Premium Production Quality
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-inter font-light italic text-chalk-white/90 leading-relaxed">
            "Great stories deserve great platforms. We're building for the streaming era—where cinematic documentaries meet global football passion."
          </blockquote>
          <cite className="block mt-6 text-gold text-sm font-montserrat tracking-wide not-italic">
            — HILTON SPORTS GROUP
          </cite>
        </motion.div>
      </div>
    </section>
  )
}
