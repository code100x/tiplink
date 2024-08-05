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
    <>
      <Hero />
      <HeroImage />
      <LogoTicker />
      <Feature />
      <DocsShowcase />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default Home
