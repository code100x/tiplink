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
      <Hero />
      <HeroImage />
      <LogoTicker />
      <Feature />
      <DocsShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home
