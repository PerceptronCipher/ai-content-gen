'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Modular Components
import Navbar from '@/app/components/landing/Navbar'
import Hero from '@/app/components/landing/Hero'
import FeatureGrid from '@/app/components/landing/FeatureGrid'
import GeneratorPreview from '@/app/components/landing/GeneratorPreview'
import Steps from '@/app/components/landing/Steps'
import CTA from '@/app/components/landing/CTA'
import FAQ from '@/app/components/landing/FAQ'
import Footer from '@/app/components/landing/Footer'
import StudioEngine from '@/app/components/landing/StudioEngine'
import StudioHeader from '@/app/components/landing/StudioHeader'

export default function UnifiedLandingPage() {
  const [view, setView] = useState<'landing' | 'studio'>('landing')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  return (
    <main className='bg-white min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900'>
      <AnimatePresence mode='wait'>
        {view === 'landing' ? (
          <motion.div
            key='landing'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar onLaunch={() => setView('studio')} />
            <Hero onLaunch={() => setView('studio')} />
            <FeatureGrid />

            <div id='features'>
              <GeneratorPreview />
            </div>
            <div id='how-it-works'>
              <Steps />
            </div>

            <CTA />

            <div id='faq'>
              <FAQ />
            </div>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key='studio'
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            className='min-h-screen bg-slate-50'
          >
            <StudioHeader onExit={() => setView('landing')} />
            <div className='max-w-6xl mx-auto py-8 px-6'>
              <StudioEngine />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}