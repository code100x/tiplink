import React from 'react'
import FeatureCard from '../ui/feature-card'
import wallet from '@/assets/wallet.png'
import walletaddapter from '@/assets/addapter.png'
import token from '@/assets/token.png'
import pro from '@/assets/pro.png'

const features = [
  {
    title: 'TipLink Wallet',
    description:
      'Create or login to your secured TipLink wallet with just 2 clicks.',
    image: `${wallet.src}`,
  },
  {
    title: 'TipLink Pro',
    description:
      'TipLink makes distributing digital assets as simple as clicking a link.',
    image: `${pro.src}`,
  },
  {
    title: 'TipLink Wallet Adapter',
    description:
      'Let your users login with just a Google account and start signing transactions.',
    image: `${walletaddapter.src}`,
  },
  {
    title: 'TipLink Swap Token',
    description:
      'Experience Effortless Token Swaps with TipLink, Simplifying Crypto Transactions for All Users',
    image: `${token.src}`,
  },
]

const Feature = () => {
  return (
    <section>
      <div className="md:mt-20 mt-10 max-w-[1000px] mx-auto ">
        <div className="flex justify-center">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight shadow-inner">
            Features
          </div>
        </div>
        <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center mt-5">
          Key features
        </div>
        <div className="text-lg tracking-tighter text-black/70 text-center mt-5">
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
