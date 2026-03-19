'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Palette, BookOpen } from 'lucide-react'

export default function Creators() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const creatorTypes = [
    {
      icon: Camera,
      title: 'Filmmakers',
      description: 'Cinematographers, directors, and video producers capturing the visual poetry of football culture.',
      opportunities: [
        'Episode collaborations',
        'City-specific content',
        'Behind-the-scenes access'
      ]
    },
    {
      icon: Palette,
      title: 'Photographers',
      description: 'Visual artists documenting street culture, fan passion, and the human stories behind the game.',
      opportunities: [
        'Editorial features',
        'Social content creation',
        'Exhibition partnerships'
      ]
    },
    {
      icon: BookOpen,
      title: 'Writers & Journalists',
      description: 'Storytellers exploring the cultural, economic, and social dimensions of the World Cup.',
      opportunities: [
        'Long-form essays',
        'City guides',
        'Cultural commentary'
      ]
    }
  ]

  return (
    <section
      id="creators"
      ref={ref}
      className="relative py-32 lg:py-40 bg-pitch-black"
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

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
            FOR STORYTELLERS
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide text-chalk-white mb-8">
            TELL THE STORY<br />OF YOUR CITY
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Join a global network of creative voices. Help us capture the soul of cities transformed by football.
          </p>
        </motion.div>

        {/* Creator Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {creatorTypes.map((creator, index) => {
            const Icon = creator.icon
            return (
              <motion.div
                key={creator.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group relative bg-ink-black border border-warm-gray/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 mb-8 flex items-center justify-center bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-500"
                  >
                    <Icon className="text-gold" size={40} strokeWidth={1.5} />
                  </motion.div>

                  <h3 className="text-2xl font-montserrat font-black text-chalk-white mb-4 tracking-wide uppercase">
                    {creator.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed font-inter mb-6">
                    {creator.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-montserrat tracking-wide text-gold uppercase mb-3">
                      Opportunities
                    </p>
                    {creator.opportunities.map((opp) => (
                      <div key={opp} className="flex items-start text-sm text-chalk-white/80 font-inter">
                        <span className="text-gold mr-3 mt-1">•</span>
                        <span>{opp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700" />
              </motion.div>
            )
          })}
        </div>

        {/* Join the Network */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative p-12 lg:p-16 bg-gradient-to-br from-grass-green/20 to-pitch-black border border-gold/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-montserrat font-black text-chalk-white mb-6 tracking-wide uppercase">
              Join the Creator Network
            </h3>
            <p className="text-lg text-warm-gray mb-8 leading-relaxed font-inter">
              We're building a global collective of visual storytellers, cultural journalists, and creative documentarians. Whether you're based in a host city or covering football culture from afar, we want to work with you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-pitch-black/50 border border-warm-gray/10">
                <div className="text-3xl font-montserrat font-black text-gold mb-2">Fair</div>
                <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                  Compensation
                </p>
              </div>
              <div className="p-6 bg-pitch-black/50 border border-warm-gray/10">
                <div className="text-3xl font-montserrat font-black text-gold mb-2">Full</div>
                <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                  Attribution
                </p>
              </div>
              <div className="p-6 bg-pitch-black/50 border border-warm-gray/10">
                <div className="text-3xl font-montserrat font-black text-gold mb-2">Global</div>
                <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                  Platform
                </p>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block px-12 py-6 bg-gold text-pitch-black font-montserrat font-bold text-lg tracking-wide hover:bg-chalk-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN THE NETWORK
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
