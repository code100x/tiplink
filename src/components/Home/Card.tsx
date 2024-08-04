'use client';
import { cn } from '@/lib/utils';
import { CardStack } from '../ui/card-stack';
import firstImg from '../../../public/wallet-adaptor.png';
import secondImg from '../../../public/wallet-graphic.png';
import thirdImg from '../../../public/pro.png';
import { DnaIcon, GripIcon, Wallet, Star } from 'lucide-react';

export function Card() {
    return (
        <div className="flex h-[40rem] w-full items-center justify-center">
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                '-px-2 bg-emerald-100 py-1 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500',
                className,
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        title: 'SolLink Wallet',
        iconImag: <Wallet />,
        img: firstImg,
    },
    {
        id: 1,
        title: 'SolLink Pro',
        iconImag: <Star />,
        img: secondImg,
    },
    {
        id: 2,
        title: 'SolLink Wallet Adaptor',
        iconImag: <DnaIcon />,
        img: thirdImg,
    },
];
