'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      })
  }

  return (
    <Button
      aria-label='scroll to the top button'
      size='sm'
      className={`text-xs fixed bottom-4 right-4 rounded-full p-2 outline-none scrollToTheTop transition-opacity duration-200 ${
        isVisible ? 'showBtn' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp />
    </Button>
  )
}
