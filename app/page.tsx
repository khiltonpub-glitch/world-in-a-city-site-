'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Stats from '@/components/Stats'
import Timeline from '@/components/Timeline'
import ParallaxQuote from '@/components/ParallaxQuote'
import FAQ from '@/components/FAQ'
import Hero from '@/sections/Hero'
import WhatThisIs from '@/sections/WhatThisIs'
import WhyItMatters from '@/sections/WhyItMatters'
import Cities from '@/sections/Cities'
import Sponsors from '@/sections/Sponsors'
import CitiesCTA from '@/sections/CitiesCTA'
import Creators from '@/sections/Creators'
import Distribution from '@/sections/Distribution'
import AWS from '@/sections/AWS'
import FinalCTA from '@/sections/FinalCTA'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-black">
      <Navigation />
      
      <Hero />
      <Stats />
      <WhatThisIs />
      <Timeline />
      <WhyItMatters />
      <ParallaxQuote />
      <Cities />
      <Sponsors />
      <CitiesCTA />
      <Creators />
      <Distribution />
      <AWS />
      <FAQ />
      <FinalCTA />
      
      <Footer />
      <BackToTop />
    </main>
  )
}
