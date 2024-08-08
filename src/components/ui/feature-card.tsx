/* eslint-disable @next/next/no-img-element */
//this disables img tag linting warning on next js

import React from 'react'
import { Button } from './button'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const FeatureCard = ({ title, description, image }: FeatureProps) => {
  return (
    <div>
      <div className="border rounded-lg shadow-inner hover:shadow-2xl transition-all">
        <div className="md:p-20">
          <img
            src={image}
            alt="Feature Image"
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="w-full p-4">
          <div className="py-4">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text ">
              {title}
            </h1>
          </div>
          <div className="w-full py-4">
            <p className="text-lg tracking-tighter text-black/70">
              {description}
            </p>
          </div>
          <div className="w-full py-2">
            <Button className="w-full text-lg py-7">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
