import { Footer } from '@/components/Appbar/Footer'
import Home from '@/components/Home/Home'
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button'
import WaveBackground from '@/components/WaveBackground'

export default function Page() {
  return (
    <>
      <div className="w-full bg-[#000000]">
        <Home />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  )
}
