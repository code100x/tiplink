import Image from 'next/image'

const HeroImage = () => {
  return (
    <section className="relative max-w-[1300px] mx-auto px-20 md:mt-20 lg:my-20 ">
      <div className="p-3 bg-slate-100 rounded-2xl">
        <Image
          src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236913/hero_ezqaef.png"
          width={1000}
          height={800}
          alt="hero-image"
          className="drop-shadow-xl border rounded-lg"
        />
      </div>
    </section>
  )
}

export default HeroImage
