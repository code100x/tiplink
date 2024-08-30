import Image from 'next/image'

const HeroImage = () => {
  return (
    <section className=" max-w-[1300px] mx-auto px-4 md:mt-20 my-10 ">
      <div className="p-3 bg-slate-100 rounded-2xl">
        <Image
          src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236913/hero_ezqaef.png"
          width={1400}
          height={800}
          alt="hero-image"
          className="drop-shadow-xl border rounded-lg"
        />
      </div>
    </section>
  )
}

export default HeroImage
