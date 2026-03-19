'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Target, Sparkles, Users, TrendingUp, Film } from 'lucide-react'

export default function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with audiences across continents through authentic cultural storytelling.'
    },
    {
      icon: Target,
      title: 'Brand Integration',
      description: 'Seamlessly weave your brand into compelling narratives that resonate.'
    },
    {
      icon: Sparkles,
      title: 'Premium Content',
      description: 'Associate with cinematic, award-caliber documentary production.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Support stories that matter to diverse communities worldwide.'
    },
    {
      icon: TrendingUp,
      title: 'Market Access',
      description: 'Gain entry to 16 major North American markets and their passionate fan bases.'
    },
    {
      icon: Film,
      title: 'Multi-Platform',
      description: 'Reach audiences through streaming, digital, and experiential channels.'
    }
  ]

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative py-32 lg:py-40 bg-pitch-black"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
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
            PARTNERSHIP OPPORTUNITIES
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide text-chalk-white mb-8">
            PARTNER WITH A<br />GLOBAL MOMENT
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Join us in telling the world's most powerful cultural stories. Connect your brand with the passion, diversity, and excitement of the World Cup.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group p-8 bg-ink-black border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
              >
                <Icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-montserrat font-bold text-chalk-white mb-4 tracking-wide uppercase">
                  {benefit.title}
                </h3>
                <p className="text-warm-gray leading-relaxed font-inter text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Presenting Sponsor */}
          <div className="relative p-10 bg-gradient-to-br from-gold/10 to-transparent border-2 border-gold hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500">
            <div className="absolute top-0 left-0 px-4 py-1 bg-gold">
              <span className="text-xs font-montserrat font-bold text-pitch-black tracking-wide">
                PREMIER
              </span>
            </div>
            <h3 className="text-3xl font-montserrat font-black text-gold mt-8 mb-4 tracking-wide uppercase">
              Presenting Sponsor
            </h3>
            <p className="text-warm-gray mb-6 font-inter">
              Maximum visibility across all episodes, cities, and platforms. Your brand at the heart of the story.
            </p>
            <ul className="space-y-3 mb-8 text-chalk-white/80 font-inter text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Title integration across all content</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Exclusive activation rights</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Premium placement in distribution</span>
              </li>
            </ul>
          </div>

          {/* City Sponsor */}
          <div className="relative p-10 bg-ink-black border border-warm-gray/20 hover:border-gold/30 transition-all duration-500">
            <h3 className="text-2xl font-montserrat font-black text-chalk-white mb-4 tracking-wide uppercase">
              City Partner
            </h3>
            <p className="text-warm-gray mb-6 font-inter">
              Own a specific city's narrative. Deep integration within targeted markets and communities.
            </p>
            <ul className="space-y-3 text-chalk-white/80 font-inter text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>City-specific storytelling</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Local market activation</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Community engagement</span>
              </li>
            </ul>
          </div>

          {/* Supporting Sponsor */}
          <div className="relative p-10 bg-ink-black border border-warm-gray/20 hover:border-gold/30 transition-all duration-500">
            <h3 className="text-2xl font-montserrat font-black text-chalk-white mb-4 tracking-wide uppercase">
              Category Sponsor
            </h3>
            <p className="text-warm-gray mb-6 font-inter">
              Align with thematic content pillars: Culture, Business, or Community.
            </p>
            <ul className="space-y-3 text-chalk-white/80 font-inter text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Thematic integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Multi-episode presence</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">→</span>
                <span>Digital amplification</span>
              </li>
            </ul>
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
            BECOME A SPONSOR
          </motion.a>
          <p className="mt-6 text-warm-gray text-sm font-inter">
            Limited partnership opportunities available. Connect with us today.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
