'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/lib/definitions'

let interval: any

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Card[]>(items)

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, 5000)
  }

  return (
    <div className="relative flex justify-center h-60 w-full m-5 md:m-0 md:h-96 md:w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-60 w-full md:h-[30rem] md:w-1/2 rounded-3xl p-4 shadow-xl border shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex items-center gap-2">
              <p className="bg-[#006399] p-2 text-white rounded-xl">
                {card.iconImag}
              </p>
              <p className="text-neutral-500 font-bold text-xl">{card.title}</p>
            </div>
            <div className="relative flex justify-center items-center h-40 md:h-96">
              <Image
                src={card.img}
                alt="/"
                className="h-full w-auto max-w-full object-cover"
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
