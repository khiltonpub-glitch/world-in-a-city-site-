'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue = Math.floor(latest)
        ref.current.textContent = `${prefix}${displayValue.toLocaleString()}${suffix}`
      }
    })
  }, [springValue, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

interface StatsCardProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  delay?: number
}

export function StatsCard({ value, label, suffix = '', prefix = '', delay = 0 }: StatsCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group p-8 bg-pitch-black/50 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500 text-center"
    >
      <div className="text-5xl lg:text-6xl font-montserrat font-black gradient-text mb-4">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-warm-gray font-inter uppercase tracking-wide text-sm">
        {label}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-ink-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard value={16} label="Host Cities" delay={0} />
          <StatsCard value={4} label="Episodes" delay={0.1} />
          <StatsCard value={200} label="Million+ Potential Reach" suffix="M+" delay={0.2} />
          <StatsCard value={32} label="Years of World Cup History" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
