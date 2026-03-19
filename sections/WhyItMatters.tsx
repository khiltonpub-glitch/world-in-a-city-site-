'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, TrendingUp, Heart } from 'lucide-react'

export default function WhyItMatters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      icon: Heart,
      title: 'Culture',
      description: 'Football transcends borders. It brings together diverse communities, celebrates heritage, and creates shared moments of joy that define generations.'
    },
    {
      icon: TrendingUp,
      title: 'Business',
      description: 'The World Cup drives billions in economic impact, transforming infrastructure, tourism, and local economies while creating opportunities for global brands.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'From street celebrations to neighborhood watch parties, the tournament strengthens social bonds and builds lasting connections across cultural divides.'
    }
  ]

  return (
    <section
      id="why-it-matters"
      ref={ref}
      className="relative py-32 lg:py-40 bg-ink-black"
    >
      {/* Decorative Element */}
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
            THE IMPACT
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide text-chalk-white mb-6">
            MORE THAN A GAME
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            The World Cup creates ripple effects that transform cities, economies, and communities long after the final whistle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-10 bg-gradient-to-br from-pitch-black to-grass-green/20 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 mb-8 flex items-center justify-center bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-500"
                  >
                    <Icon className="text-gold" size={32} strokeWidth={1.5} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-montserrat font-black tracking-wide text-chalk-white mb-6 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed font-inter">
                    {pillar.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-inter font-light italic text-chalk-white/90 leading-relaxed mb-6">
              "The World Cup doesn't just happen <span className="text-gold">in</span> a city—<br className="hidden md:block" />
              it becomes <span className="text-gold">part</span> of the city."
            </p>
            <cite className="text-warm-gray text-sm font-montserrat tracking-wide not-italic">
              — GLOBAL FOOTBALL CULTURE
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
