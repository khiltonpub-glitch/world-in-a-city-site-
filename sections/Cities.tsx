'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

export default function Cities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cities = [
    {
      name: 'Miami',
      state: 'Florida',
      description: 'Where Latin America meets North America. A cultural crossroads defined by passion, rhythm, and the beautiful game.',
      image: '/images/cities/miami.jpg', // Placeholder path
      year: '1994 & 2026',
      color: 'from-orange-500/20 to-pink-500/20'
    },
    {
      name: 'Dallas',
      state: 'Texas',
      description: 'Everything is bigger in Texas. A modern metroplex where football culture runs deep and hospitality runs deeper.',
      image: '/images/cities/dallas.jpg',
      year: '1994 & 2026',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      name: 'New York',
      state: 'New York/New Jersey',
      description: 'The world's stage. Where every nation gathers, every story converges, and football becomes a universal language.',
      image: '/images/cities/newyork.jpg',
      year: '1994 & 2026',
      color: 'from-blue-400/20 to-indigo-500/20'
    },
    {
      name: 'Los Angeles',
      state: 'California',
      description: 'Entertainment capital meets football fever. Where Hollywood glamour collides with global sporting passion.',
      image: '/images/cities/losangeles.jpg',
      year: '1994 & 2026',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Atlanta',
      state: 'Georgia',
      description: 'The new South. A city rebuilt on progress, diversity, and a football culture that's redefining American soccer.',
      image: '/images/cities/atlanta.jpg',
      year: '2026',
      color: 'from-red-500/20 to-orange-500/20'
    }
  ]

  return (
    <section
      id="cities"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gradient-to-b from-ink-black via-grass-green/10 to-pitch-black"
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
            FEATURED DESTINATIONS
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide gradient-text mb-6">
            THE CITIES
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Each city tells a unique story. From 1994 to 2026, these urban landscapes become stages for global connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group relative overflow-hidden bg-pitch-black border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
            >
              {/* Image Placeholder with Gradient Overlay */}
              <div className="relative h-64 bg-gradient-to-br from-grass-green to-pitch-black overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${city.color} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-pitch-black/50 to-transparent" />
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-gold/90 backdrop-blur-sm">
                  <span className="text-xs font-montserrat font-bold text-pitch-black tracking-wide">
                    {city.year}
                  </span>
                </div>

                {/* Location Icon */}
                <div className="absolute top-4 left-4">
                  <MapPin className="text-gold" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-3xl font-montserrat font-black text-chalk-white mb-2 tracking-wide uppercase">
                  {city.name}
                </h3>
                <p className="text-sm text-gold font-montserrat tracking-wide mb-4 uppercase">
                  {city.state}
                </p>
                <p className="text-warm-gray leading-relaxed font-inter mb-6">
                  {city.description}
                </p>

                {/* Hover CTA */}
                <motion.div
                  className="flex items-center text-gold font-montserrat text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>EXPLORE STORY</span>
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#all-cities"
            className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-gold text-gold font-montserrat font-bold text-base tracking-wide hover:bg-gold hover:text-pitch-black transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL 16 CITIES
            <ArrowRight size={20} className="ml-3" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
