'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/lib/definitions';

let interval: any;

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative m-5 flex h-60 w-full justify-center md:m-0 md:h-96 md:w-full">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute flex h-60 w-full flex-col justify-between rounded-3xl border bg-white p-4 shadow-xl shadow-black/[0.1] md:h-[30rem] md:w-1/2 dark:shadow-white/[0.05]"
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
                            <p className="rounded-xl bg-[#006399] p-2 text-white">
                                {card.iconImag}
                            </p>
                            <p className="text-xl font-bold text-neutral-500">
                                {card.title}
                            </p>
                        </div>
                        <div className="relative flex h-40 items-center justify-center md:h-96">
                            <Image
                                src={card.img}
                                alt="/"
                                className="h-full w-auto max-w-full object-cover"
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
