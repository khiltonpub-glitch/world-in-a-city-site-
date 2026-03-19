'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Building, Users } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    title: 'Local Storytelling',
    description:
      "Showcase your city's unique culture, heritage, and World Cup legacy to a global audience.",
  },
  {
    icon: Building,
    title: 'Economic Visibility',
    description:
      'Position local businesses, partners, and institutions inside a premium international storytelling platform.',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description:
      'Create a deeper connection between the tournament, the people, and the neighborhoods that make the city real.',
  },
]

export default function CitiesCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="city-partner" ref={ref} className="bg-grass py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            For Cities
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-chalk md:text-6xl">
            Become a Host City Partner
          </h2>
          <p className="mt-6 text-lg text-warm-gray md:text-xl">
            Build a city-level platform for culture, community, and global visibility.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-ink/50 p-8"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gold/10 p-4 text-gold">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold uppercase text-chalk">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-gold-light"
          >
            Apply as a City Partner
          </a>
        </div>
      </div>
    </section>
  )
}
