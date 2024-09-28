'use client'
import React from 'react'
import Hero from './Hero'
import HeroImage from './HeroImage'
import LogoTicker from './Logoticker'
import Feature from './Feature'
import DocsShowcase from './DocsShowcase'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'

const Home = () => {
  return (
    <div className="bg-[#000000] pt-10">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-2/4">
          <Hero />
          <LogoTicker />
        </div>
        <div className="w-full lg:w-2/4s pt-10 lg:pt-0">
          <HeroImage />
        </div>
      </div>

      <Feature />
      <DocsShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home
