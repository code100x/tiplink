import React from 'react'
import FeatureCard from '../ui/feature-card'

const features = [
    {
        title: 'TipLink Wallet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: 'https://example.com/image1.jpg'
    },
    {
        title: 'TipLink Pro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: 'https://example.com/image2.jpg'
    },
    {
        title: 'TipLink Wallet Adapter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: 'https://example.com/image3.jpg'
    },
    {
        title: 'TipLink Swip Token',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis at mauris consectetur dignissim.',
        image: 'https://example.com/image3.jpg'
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
            <div className='my-10 max-w-[1200px] mx-auto'>
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