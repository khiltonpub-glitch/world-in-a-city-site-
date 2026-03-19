'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cloud, Zap, Shield, Network } from 'lucide-react'

export default function AWS() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable media storage and processing across global regions, ensuring seamless content delivery.'
    },
    {
      icon: Zap,
      title: 'AI & ML Tools',
      description: 'Advanced metadata tagging, automated transcription, and intelligent content categorization.'
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description: 'Enterprise-grade protection for premium content assets and mission-critical workflows.'
    },
    {
      icon: Network,
      title: 'Global Distribution',
      description: 'High-performance content delivery networks reaching audiences across continents.'
    }
  ]

  return (
    <section
      id="aws"
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
            TECHNOLOGY PARTNERSHIP
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide text-chalk-white mb-8">
            POWERED FOR<br />GLOBAL SCALE
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Built on world-class cloud infrastructure. AWS powers our storytelling engine and global distribution backbone.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group flex gap-6 p-8 bg-ink-black border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-500">
                    <Icon className="text-gold" size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-chalk-white mb-3 tracking-wide uppercase">
                    {capability.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed font-inter">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Technology Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative p-12 lg:p-16 bg-gradient-to-br from-grass-green/20 to-pitch-black border-2 border-gold/30"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-montserrat font-black text-gold mb-6 tracking-wide uppercase">
              Why AWS?
            </h3>
            <div className="space-y-6 text-chalk-white/90 font-inter leading-relaxed">
              <p className="text-lg">
                <span className="text-gold font-semibold">THE WORLD IN A CITY</span> requires infrastructure that matches our ambition—global, scalable, and built for the future.
              </p>
              <p className="text-lg">
                AWS provides the foundation to manage 4K footage across 16 cities, process thousands of hours of content, and deliver cinematic experiences to audiences worldwide. From production workflows to final distribution, every frame is powered by cloud-first technology.
              </p>
              <p className="text-lg">
                This partnership isn't just about storage—it's about <span className="text-gold">innovation</span>. Using AWS machine learning tools, we can analyze patterns in fan culture, automate metadata tagging across languages, and surface stories that might otherwise go untold.
              </p>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-pitch-black/50 border border-warm-gray/10 text-center">
              <div className="text-3xl font-montserrat font-black text-gold mb-2">99.99%</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Uptime Reliability
              </p>
            </div>
            <div className="p-6 bg-pitch-black/50 border border-warm-gray/10 text-center">
              <div className="text-3xl font-montserrat font-black text-gold mb-2">Global</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                CDN Coverage
              </p>
            </div>
            <div className="p-6 bg-pitch-black/50 border border-warm-gray/10 text-center">
              <div className="text-3xl font-montserrat font-black text-gold mb-2">Petabyte</div>
              <p className="text-warm-gray text-sm font-inter uppercase tracking-wide">
                Storage Capacity
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="max-w-4xl mx-auto text-2xl md:text-3xl font-inter font-light italic text-chalk-white/90 leading-relaxed">
            "Great storytelling demands great technology. AWS gives us the power to tell these stories at scale."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
