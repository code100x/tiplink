import React from 'react'
import FeatureCard from '../ui/feature-card'
import wallet from '@/assets/wallet.png'
import pro from '@/assets/pro.png'
import adapter from '@/assets/adapter.png'
import token from '@/assets/token.png'

const features = [
    {
        title: 'TipLink Wallet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: `${wallet.src}`
    },
    {
        title: 'TipLink Pro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: `${pro.src}`
    },
    {
        title: 'TipLink Wallet Adapter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: `${adapter.src}`
    },
    {
        title: 'TipLink Swap Token',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: `${token.src}`
    }

]

const Feature = () => {
    return (
        <section>

            <div className="md:mt-20 mt-10 max-w-[1000px] mx-auto ">
                <div className="flex justify-center">
                    <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight shadow-inner">Features</div>
                </div>
                <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center mt-5">
                    Key features
                </div>
                <div className="text-lg tracking-tighter text-black/70 text-center mt-5">
                Explore the Comprehensive Features of Our Secure Crypto Wallet Generator
                </div>
            </div>
            <div className='my-10 max-w-[1000px] mx-auto'>
            <div className='px-4 grid gap-8 md:grid-cols-2'>
                {
                    features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} image={feature.image} />)
                }
            </div>
            </div>
        </section>
    )
}

export default Feature