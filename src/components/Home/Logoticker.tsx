'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const LogoTicker = () => {
  return (
    <div className="my-20 max-w-[1000px] mx-auto px-4">
      <div className="bg-black">
        <div className="px-5 md:px-10 md:flex items-center justify-center">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: '-50%',
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {/* Apply the 'invert' filter to make images white */}
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236915/logo-acme_chpmz7.png"
                alt="Acme Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/logo-quantum_hvfwas.png"
                alt="Quantum Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/logo-echo_i5hnpv.png"
                alt="Echo Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236915/logo-celestial_dv5uka.png"
                alt="Celestial Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/logo-pulse_woeaxa.png"
                alt="Pulse Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              {/* Repeat for other images */}
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236915/logo-acme_chpmz7.png"
                alt="Acme Logo"
                className="logo-ticker-img filter invert"
                width={100}
                height={100}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/logo-quantum_hvfwas.png"
                alt="Quantum Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/logo-echo_i5hnpv.png"
                alt="Echo Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236915/logo-celestial_dv5uka.png"
                alt="Celestial Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
              <Image
                src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/logo-pulse_woeaxa.png"
                alt="Pulse Logo"
                className="logo-ticker-img filter invert"
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker
