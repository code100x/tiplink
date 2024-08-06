import Image from 'next/image'
import avatar1 from '@/assets/avatar-1.png'
import avatar2 from '@/assets/avatar-2.png'
import avatar3 from '@/assets/avatar-3.png'
import avatar4 from '@/assets/avatar-4.png'
import avatar5 from '@/assets/avatar-5.png'
import avatar6 from '@/assets/avatar-6.png'
import { motion } from 'framer-motion'
import React from 'react'

const testimonials = [
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut fuga magni!',
    imageSrc: avatar1,
    name: 'Alex Rose',
    username: '@alexrose06',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut fuga magni!',
    imageSrc: avatar2,
    name: 'Alex Rose',
    username: '@alexrose06',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut fuga magni!',
    imageSrc: avatar3,
    name: 'Alex Rose',
    username: '@alexrose06',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut fuga magni!',
    imageSrc: avatar4,
    name: 'Alex Rose',
    username: '@alexrose06',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut fuga magni!',
    imageSrc: avatar5,
    name: 'Alex Rose',
    username: '@alexrose06',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut fuga magni!',
    imageSrc: avatar6,
    name: 'Alex Rose',
    username: '@alexrose06',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(0, 3)

const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: '-50% ',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username },i) => (
              <div className="card" key={i}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

// interface Options {
//     text: string;
//     imageSrc: string;
//     name: string;
//     username: string;
// }

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="px-5 md:px-0 md:max-w-[900px] lg:max-w-[1300px] container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight shadow-inner">
              Testimonials
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center mt-5">
            What our users say
          </h2>
          <p className="text-lg tracking-tighter text-black/70 text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            molestias ipsum commodi!
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_70%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
