'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cities = [
  {
    name: 'Miami',
    state: 'Florida',
    description:
      'A gateway city where football, Caribbean influence, nightlife, and global energy collide.',
    image: '/images/cities/miami.jpg',
    year: '2026',
    color: 'from-cyan-400/20 to-blue-500/20',
  },
  {
    name: 'Dallas',
    state: 'Texas',
    description:
      'Big scale, bold identity, and a sports culture built for spectacle.',
    image: '/images/cities/dallas.jpg',
    year: '1994 & 2026',
    color: 'from-gold/20 to-orange-500/20',
  },
  {
    name: 'New York',
    state: 'New York / New Jersey',
    description:
      "The world's stage. Where every nation gathers, every story converges, and football becomes a universal language.",
    image: '/images/cities/newyork.jpg',
    year: '1994 & 2026',
    color: 'from-blue-400/20 to-indigo-500/20',
  },
  {
    name: 'Los Angeles',
    state: 'California',
    description:
      'A city of image, motion, creativity, and global ambition.',
    image: '/images/cities/los-angeles.jpg',
    year: '1994 & 2026',
    color: 'from-pink-400/20 to-red-500/20',
  },
  {
    name: 'Atlanta',
    state: 'Georgia',
    description:
      "The new South. A city rebuilt on progress, diversity, and a football culture that's redefining American soccer.",
    image: '/images/cities/atlanta.jpg',
    year: '2026',
    color: 'from-red-500/20 to-orange-500/20',
  },
]

export default function Cities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cities" ref={ref} className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Featured Cities
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-chalk md:text-6xl">
            The Cities
          </h2>
          <p className="mt-6 text-lg text-warm-gray md:text-xl">
            Every city tells a different story.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-pitch"
            >
              <div
                className={`relative h-72 bg-gradient-to-br ${city.color} overflow-hidden`}
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-ink/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
                  {city.year}
                </div>
              </div>

              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {city.state}
                </p>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-chalk">
                  {city.name}
                </h3>
                <p className="leading-relaxed text-warm-gray">
                  {city.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
