import Appbar from '@/components/Appbar/Appbar'
import { Footer } from '@/components/Appbar/Footer'
import LogoTicker from '@/components/Home/Logoticker'
import Testimonials from '@/components/Home/Testimonials'
import { Button } from '@/components/ui/button'
import TopBar from '@/components/WalletPage/TopBar'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Code,
  DollarSign,
  Star,
} from 'lucide-react'

const page = () => {
  return (
    <div className="w-screen ">

      <TopBar/>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <span className="inline-block bg-blue-100 text-gray-600 py-1 px-3 rounded-full text-sm font-semibold mb-4">
                TipLink Wallet Adapter
              </span>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Making Solana apps{' '}
                <span className="text-black/70">consumer ready</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Let your users login with just a Google account and start
                signing transactions.
              </p>
            </div>
            <div className="space-x-4">
              <Button>
                Integrate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-200">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Easy Integration',
                description:
                  'Seamlessly integrate with your existing Solana dApp in minutes.',
              },
              {
                icon: Shield,
                title: 'Secure Transactions',
                description:
                  'Built-in security features to protect user funds and data.',
              },
              {
                icon: Users,
                title: 'Multi-Wallet Support',
                description:
                  'Support for multiple wallet providers, giving users more options.',
              },
              {
                icon: Code,
                title: 'Developer Friendly',
                description:
                  'Comprehensive documentation and examples to get you started quickly.',
              },
              {
                icon: DollarSign,
                title: 'Low Fees',
                description:
                  'Minimize transaction costs for your users with optimized fee structures.',
              },
              {
                icon: Star,
                title: 'Customizable UI',
                description:
                  'Fully customizable UI to match your brand and user experience.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col bg-white items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl duration-300 hover:scale-110 transition-transform animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Solana Developer',
                quote:
                  "TipLink Wallet Adapter has significantly reduced our user onboarding time. It's a game-changer!",
              },
              {
                name: 'Sarah Lee',
                role: 'Product Manager',
                quote:
                  'The customizable UI allowed us to seamlessly integrate TipLink into our existing app design.',
              },
              {
                name: 'Mike Brown',
                role: 'Startup Founder',
                quote:
                  "With TipLink, we've seen a 30% increase in user retention. It's incredibly user-friendly.",
              },
              {
                name: 'Emily Chen',
                role: 'UX Designer',
                quote:
                  "The smooth user experience provided by TipLink has greatly improved our app's usability scores.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="mb-4 italic">{testimonial.quote}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoTicker />

      <Footer />
    </div>
  )
}

export default page
