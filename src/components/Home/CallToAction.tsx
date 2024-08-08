import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

const CallToAction = () => {
  return (
    <section className="my-28">
      <div className="px-5 md:px-0 md:max-w-[900px] lg:max-w-[1300px] container mx-auto">
        <div className="max-w-[540px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center mt-5">
          Sign up to get started.
          </h2>
          <p className="text-lg tracking-tighter text-black/70 text-center mt-5">
          Ready to Secure Your Crypto Assets? Sign Up Now to Get Started with Our Easy-to-Use Wallet Generator.
          </p>
        </div>
        <div className="flex ga-2 mt-10 justify-center">
          <Button variant="ghost">Get for free</Button>
          <Button>
            <span>Learn more</span> <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
