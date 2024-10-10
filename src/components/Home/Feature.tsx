'use client'
import React from 'react'
import FeatureCard from '../ui/feature-card'
import { useTheme } from 'next-themes'

const features = [
  {
    title: 'TipLink Wallet',
    description:
      'Create or login to your secured TipLink wallet with just 2 clicks.',
    image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236917/wallet_krzexr.png",
  },
  {
    title: 'TipLink Pro',
    description:
      'TipLink makes distributing digital assets as simple as clicking a link.',
    image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236917/pro_odeyp5.png"
  },
  {
    title: 'TipLink Wallet Adapter',
    description:
      'Let your users login with just a Google account and start signing transactions.',
    image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236913/addapter_zq3why.png"
  },
  {
    title: 'TipLink Swap Token',
    description:
      'Experience Effortless Token Swaps with TipLink, Simplifying Crypto Transactions for All Users',
    image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/token_t1atps.png"
  },
]

const Feature = () => {
  const { theme } = useTheme();

  return (
    <section className={`${theme === 'dark' ? '' : 'bg-white'}`}>
      <div className="md:mt-20 mt-10 max-w-[1000px] mx-auto">
        <div className="flex justify-center">
          <div className={`text-sm inline-flex border px-3 py-1 rounded-lg tracking-tight shadow-inner 
            ${theme === 'dark' ? 'border-gray-700 text-gray-300' : 'border-[#222]/10 text-black'}`}>
            Features
          </div>
        </div>
        <div className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-center mt-5 
          bg-gradient-to-b text-transparent bg-clip-text 
          ${theme === 'dark' ? 'from-white to-white/70' : 'from-black to-black/70'}`}>
          Key features
        </div>
        <div className={`text-lg tracking-tighter text-center mt-5 
          ${theme === 'dark' ? 'text-gray-300' : 'text-black/70'}`}>
          Explore the Core Features of Our Tool!
        </div>
      </div>
      <div className="my-10 max-w-[1200px] mx-auto">
        <div className="px-4 grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
