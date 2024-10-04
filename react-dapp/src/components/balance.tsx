import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js"
import { useEffect, useState } from "react";

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

async function getWalletBalance(publicKey: any) {
  const balance = await connection.getBalance(publicKey);
  return balance / LAMPORTS_PER_SOL;
}

export default function Balance() {

  const [balance, setBalance] = useState<any>(null);
  const { publicKey } = useWallet()

  useEffect(() => {
    const fetchBalance = async () => {
      if (publicKey) {
        const b = await getWalletBalance(publicKey);
        console.log(publicKey.toString())
        setBalance(b);
      }
    };

    fetchBalance();
  }, [publicKey]);

  return (
    <h1> Balance = {balance} </h1>
  )
}
