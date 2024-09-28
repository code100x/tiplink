import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import ShimmerButton from '../ui/shimmer-button'

const CallToAction = () => {
  return (
    <section className="my-28 text-white">
      <div className="px-5 md:px-0 md:max-w-[900px] lg:max-w-[1300px] container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-slate-400 to-slate-200 text-transparent bg-clip-text text-center mt-5">
            Sign up to get started.
          </h2>
          <p className="text-lg tracking-tighter text-[#676767] text-center mt-5">
            Ready to Secure Your Crypto Assets? Sign Up Now to Get Started with
            Our Easy-to-Use Wallet Generator.
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <ShimmerButton
            shimmerColor="#FFFFFF" // Optional: Customize the shimmer color
            shimmerDuration="2s" // Optional: Adjust duration
            background="#000000" // Set background color to black
            className="text-slate-300 bg-black"
          >
            Get for free
          </ShimmerButton>
          <ShimmerButton
            shimmerColor="#FFFFFF" // Optional: Customize the shimmer color for better contrast
            shimmerDuration="2s" // Optional: Adjust duration
            background="#000000" // Set background color to black
            className="text-white bg-black flex items-center gap-2" // Keep text white, add flex for alignment
          >
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </ShimmerButton>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
