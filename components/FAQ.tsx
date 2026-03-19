'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is The World In A City?',
    answer:
      'The World In A City is a premium documentary project exploring how the FIFA World Cup transforms host cities through football, food, business, culture, and identity.',
  },
  {
    question: 'Who is this project for?',
    answer:
      'The project is designed for sponsors, cities, creators, investors, distributors, and global football audiences who want a deeper, more human story around the World Cup.',
  },
  {
    question: 'What makes this different from other sports documentaries?',
    answer:
      "This is not a sports broadcast—it's cinematic journalism. We're less interested in match highlights and more focused on how the World Cup reshapes urban culture, drives economic transformation, and creates lasting community legacies. Think Netflix documentary quality meets global football culture.",
  },
  {
    question: 'How can my brand get involved?',
    answer:
      'Brands can participate through sponsorship, city partnerships, cultural campaigns, on-the-ground activations, and branded storytelling integrations.',
  },
  {
    question: 'When will the series be released?',
    answer:
      "We're currently in production with premiere targeted for 2025, ahead of the 2026 FIFA World Cup. This timing positions the series to capitalize on building World Cup momentum while providing context for the upcoming tournament.",
  },
  {
    question: 'What distribution platforms are you targeting?',
    answer:
      'We are building the project with premium global distribution in mind, including streaming platforms, sports media networks, and digital-first international channels.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="bg-pitch py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-chalk md:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-ink/70"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-chalk md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-warm-gray leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
