'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="border-b border-warm-gray/20 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group"
      >
        <h3 className="text-lg lg:text-xl font-montserrat font-bold text-chalk-white group-hover:text-gold transition-colors duration-300 uppercase tracking-wide">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-300"
        >
          {isOpen ? (
            <Minus className="text-gold" size={20} />
          ) : (
            <Plus className="text-gold" size={20} />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-warm-gray leading-relaxed font-inter">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const faqs = [
    {
      question: 'What is The World in a City?',
      answer: 'A premium documentary series exploring how the FIFA World Cup transforms cities across North America. We follow 16 host cities from the historic 1994 tournament through the upcoming 2026 World Cup, examining the intersection of sport, culture, business, and community.'
    },
    {
      question: 'How many episodes will there be?',
      answer: 'The series consists of 4 cinematic episodes, each approximately 45-60 minutes. Each episode explores multiple cities through thematic lenses: cultural identity, economic transformation, community impact, and global connection.'
    },
    {
      question: 'Which cities are featured?',
      answer: '16 North American host cities including Miami, Dallas, New York, Los Angeles, Atlanta, and others that have hosted or will host World Cup matches. Each city receives dedicated coverage exploring its unique cultural narrative and World Cup legacy.'
    },
    {
      question: 'What makes this different from other sports documentaries?',
      answer: 'This is not a sports broadcast—it is cinematic journalism. We are less interested in match highlights and more focused on how the World Cup reshapes urban culture, drives economic transformation, and creates lasting community legacies. Think Netflix documentary quality meets global football culture.'
    },
    {
      question: 'How can my brand get involved?',
      answer: 'We offer multiple partnership tiers: Presenting Sponsors (maximum visibility across all content), City Partners (market-specific integration), and Category Sponsors (thematic alignment). Contact us for a detailed partnership deck outlining activation opportunities, audience reach, and brand integration.'
    },
    {
      question: 'When will the series be released?',
      answer: 'We're currently in production with premiere targeted for 2025, ahead of the 2026 FIFA World Cup. This timing positions the series to capitalize on building World Cup momentum while providing context for the upcoming tournament.'
    },
    {
      question: 'What distribution platforms are you targeting?',
      answer: 'We're positioning for premium streaming platforms (Netflix, Amazon Prime Video, Apple TV+), sports networks (ESPN+, DAZN), and digital-first distribution. Our goal is global reach with particular focus on North American, Latin American, and European markets.'
    },
    {
      question: 'How can cities participate?',
      answer: 'Host cities can partner with us for dedicated storytelling, economic impact exposure, and community engagement. Partnerships include premium production, social content library, local screenings, and PR/marketing support. Limited partnerships available for 2026 World Cup host cities.'
    }
  ]

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-ink-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold text-sm font-montserrat tracking-cinematic mb-6"
          >
            FREQUENTLY ASKED
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black tracking-wide gradient-text mb-6">
            QUESTIONS
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center p-8 bg-pitch-black border border-warm-gray/20"
        >
          <p className="text-warm-gray font-inter mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:hello@worldinacity.com"
            className="inline-block px-8 py-4 bg-gold text-pitch-black font-montserrat font-bold text-sm tracking-wide hover:bg-chalk-white transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>
    </section>
  )
}
