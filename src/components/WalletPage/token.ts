import solanaIcon from "../icons/solana.png";
import usdcIcon from "../icons/usdc.png";

export const tokens = [
    { symbol: "SOL", name: "Solana", icon: solanaIcon },
    { symbol: "USDC", name: "USD", icon: usdcIcon },
  ]

  export type TokensType = typeof tokens[number]['symbol'];