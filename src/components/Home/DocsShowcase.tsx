import Image from 'next/image'
import { Button } from '../ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'

const DocsShowcase = () => {
  return (
    <section className="items-center my-28 md:px-4">
      <div className="lg:max-w-[1200px] md:max-w-[900px]   md:rounded-2xl mx-auto pl-8 pt-8 bg-black text-white">
        <div className="text-sm inline-flex border border-[#fff]/20 px-2 pt-2 pb-1 rounded-lg tracking-tight shadow-inner shadow-white text-white/70">
          <span></span> Tiplink API
        </div>
        <div className="flex mt-5 justify-between">
          <div className="max-w-[400px]">
            <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text ">
              Ready for developers
            </h1>
            <div className="md:max-w-[300px] lg:max-w-[400px] ">
              <p className="md:text-lg text-sm  tracking-tighter text-white/70 mt-5 mr-4">
                TipLink wallets can be programmatically generated br to hold
                tokens and NFTs at scale with our API.
              </p>
            </div>
            <Button className="bg-white text-black hover:bg-white/90 mt-5 flex gap-3 mb-10">
              Read Docs
              <span>
                <FaArrowRightLong />
              </span>
            </Button>
          </div>
          <div className="hidden md:flex items-end justify-end pl-3 pt-3 pb-3 md:pb-0 rounded-lg rounded-r-none md:rounded-b-none bg-zinc-950 backdrop:blur-sm shadow-inner shadow-white/60 h-fit">
            <Image
              src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236913/api_uab9ko.png"
              alt="api image"
              width={450}
              height={300}
              className="overflow-hidden items-end "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DocsShowcase
