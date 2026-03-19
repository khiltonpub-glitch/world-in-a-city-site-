'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Building, Users, Briefcase } from 'lucide-react'

export default function CitiesCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    {
      icon: MapPin,
      title: 'Local Storytelling',
      description: 'Showcase your city's unique culture, heritage, and World Cup legacy to a global audience.'
    },
    {
      icon: Building,
      title: 'Economic Impact',
      description: 'Leverage documentary exposure to drive tourism, investment, and long-term economic growth.'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Unite residents through shared narratives and celebrate the diverse voices that define your city.'
    },
    {
      icon: Briefcase,
      title: 'Global Visibility',
      description: 'Position your city on the world stage through premium, cinematic storytelling.'
    }
  ]

  return (
    <section
      id="cities-partner"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-ink-black to-grass-green/10"
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
            FOR CITIES
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide gradient-text mb-8">
            BECOME A<br />HOST CITY
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Your city's World Cup story deserves to be told. Partner with us to amplify your cultural impact and economic legacy.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="flex gap-6 p-8 bg-pitch-black/50 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-gold/10 border border-gold/20">
                    <Icon className="text-gold" size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-chalk-white mb-3 tracking-wide uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed font-inter">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-12 bg-gradient-to-br from-pitch-black to-grass-green/20 border border-gold/20 mb-16"
        >
          <h3 className="text-3xl font-montserrat font-black text-gold mb-8 tracking-wide uppercase text-center">
            What Your City Receives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-montserrat font-black text-gold mb-2">5–10min</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Dedicated Episode Segment
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-montserrat font-black text-gold mb-2">Global</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Streaming Distribution
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-montserrat font-black text-gold mb-2">Premium</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Cinematic Production
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-montserrat font-black text-gold mb-2">Social</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Digital Content Library
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-montserrat font-black text-gold mb-2">Local</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Community Screenings
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-montserrat font-black text-gold mb-2">PR</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Marketing Support
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            className="inline-block px-12 py-6 bg-gold text-pitch-black font-montserrat font-bold text-lg tracking-wide hover:bg-chalk-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            APPLY AS A CITY PARTNER
          </motion.a>
          <p className="mt-6 text-warm-gray text-sm font-inter">
            Limited partnerships available for 2026 World Cup host cities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
