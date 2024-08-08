import Appbar from '@/components/Appbar/Appbar'
import { Footer } from '@/components/Appbar/Footer'
import Home from '@/components/Home/Home'
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button'

export default function Page() {
  return (
    <>
      <Appbar />
      <Home />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
