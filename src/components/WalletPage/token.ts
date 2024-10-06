import solanaIcon from "../icons/solana.png";
import usdcIcon from "../icons/usdc.png";

export const tokens = [
    { symbol: "SOL", name: "Solana", icon: solanaIcon,
      mint: "So11111111111111111111111111111111111111112",
      native: true,
      price: "180",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Solana_cryptocurrency_two.jpg",
      decimals: 9
     },
    { symbol: "USDC", name: "USDC", icon: usdcIcon,
    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    native: false,
    price: "1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vAKYEl0YffTpWSxrqEi_gmUsl-0BuXSKMQ&s",
    decimals: 6
    },
  ]

  export type TokensType = typeof tokens[number]['symbol'];