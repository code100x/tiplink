"use client"
import React from 'react'
import { Hero } from './Hero'
import { Card } from './Card'
import CustomSections from '../ui/home-custom-sections'
import { CustomSectionItems } from './CustomSectionItems'


const Home = () => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF] mt-10 md:mt-0">
            <Hero />
            <Card />
            {
                CustomSectionItems.map((item, index)=>(
                    <CustomSections 
                        title={item.title}
                        description={item.description}
                        image={item.image} 
                        bgBlue={item.bgBlue} 
                        iconSvg={item.iconSvg} 
                        iconTitle={item.iconTitle} 
                        imgDirLeft={item.imgDirLeft} 
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default Home