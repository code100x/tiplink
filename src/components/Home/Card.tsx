"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "../ui/card-stack";
import firstImg from "../../../public/wallet-adaptor.png";
import secondImg from "../../../public/wallet-graphic.png";
import thirdImg from "../../../public/pro.png";
import { DnaIcon, GripIcon, Wallet, Star } from "lucide-react";

export function Card() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
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
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 -px-2 py-1",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    title: "SolLink Wallet",
    description: <Wallet/>,
    img:firstImg
  },
  {
    id: 1,
    title: "SolLink Pro",
    description: <Star/>,
    img:secondImg
  },
  {
    id: 2,
    title: "SolLink Wallet Adaptor",
    description:<DnaIcon/>,
    img:thirdImg
  },
];
