'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Trophy } from 'lucide-react'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const timelineEvents = [
    {
      year: '1994',
      title: 'A Historic Beginning',
      description: 'The United States hosts its first FIFA World Cup, transforming American soccer culture forever.',
      icon: Trophy,
      cities: '9 US cities'
    },
    {
      year: '2026',
      title: 'A Continental Celebration',
      description: 'The first-ever tri-nation World Cup across USA, Canada, and Mexico marks a new era for the sport.',
      icon: MapPin,
      cities: '16 North American cities'
    },
    {
      year: 'NOW',
      title: 'The Stories Between',
      description: 'We trace the evolution, capture the transformation, and celebrate the communities that made it happen.',
      icon: Calendar,
      cities: 'Infinite narratives'
    }
  ]

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-b from-ink-black to-pitch-black">
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
            THE JOURNEY
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide gradient-text mb-6">
            32 YEARS<br />OF HISTORY
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className={`relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-16 h-16 bg-pitch-black border-4 border-gold flex items-center justify-center z-10">
                    <Icon className="text-gold" size={28} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ml-24 lg:ml-0 ${isLeft ? 'lg:pr-24' : 'lg:pl-24'}`}>
                    <div className="p-8 bg-pitch-black border border-warm-gray/20 hover:border-gold/30 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl font-montserrat font-black text-gold">
                          {event.year}
                        </div>
                        <div className="flex-1 h-px bg-gold/30" />
                      </div>
                      <h3 className="text-2xl font-montserrat font-bold text-chalk-white mb-4 uppercase tracking-wide">
                        {event.title}
                      </h3>
                      <p className="text-warm-gray leading-relaxed font-inter mb-4">
                        {event.description}
                      </p>
                      <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20">
                        <span className="text-gold text-xs font-montserrat tracking-wide uppercase">
                          {event.cities}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
