import React from 'react'
import { BentoGrid, BentoCard } from '../ui/bento-grid'

const features = [
  {
    name: 'TipLink Wallet',
    description:
      'Create or login to your secured TipLink wallet with just 2 clicks.',

    img: '/grid5.avif',
    imgClassName: 'w-full h-full',
    className: 'col-span-1 lg:col-span-2 shadow-2xl',
    href: '#',
    cta: 'Learn more',
  },
  {
    name: 'TipLink Pro',
    description:
      'TipLink makes distributing digital assets as simple as clicking a link.',
    img: '/grid4.avif',
    imgClassName: 'w-full h-full',
    className: 'col-span-1 shadow-2xl',
    href: '#',
    cta: 'Learn more',
  },
  {
    name: 'TipLink Wallet Adapter',
    description:
      'Let your users login with just a Google account and start signing transactions.',
    img: '/grid3.avif',
    imgClassName: 'w-full h-full',
    className: 'col-span-1 shadow-2xl',
    href: '#',
    cta: 'Learn more',
  },
  {
    name: 'TipLink Swap Token',
    description:
      'Experience Effortless Token Swaps with TipLink, Simplifying Crypto Transactions for All Users.',
    img: '/grid5.avif',
    imgClassName: 'w-full h-full',
    className: 'col-span-1 lg:col-span-2 shadow-2xl',
    href: '#',
    cta: 'Learn more',
  },
]

const Feature = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="md:mt-20 mt-10 max-w-[1000px] mx-auto">
        <div className="flex justify-center">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight shadow-inner">
            Features
          </div>
        </div>
        <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text text-center mt-5">
          Key Features
        </div>
        <div className="text-lg tracking-tighter text-gray-400 text-center mt-5">
          Explore the Core Features of Our Tool!
        </div>
      </div>

      {/* BentoGrid layout */}
      <div className="my-10 max-w-[1200px] mx-auto px-4 text-stone-950">
        <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              name={feature.name}
              description={feature.description}
              href={feature.href}
              cta={feature.cta}
              img={feature.img}
              imgClassName={feature.imgClassName}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default Feature
