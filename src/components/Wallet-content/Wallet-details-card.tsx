"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { CardItems } from '../items'
import { ContentButton } from '../sidebar-button'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useEffect, useState } from 'react'

export const DetailsCard = () => {
  const [balance, setBalance] = useState(0)
  const { connection } = useConnection()
  const { publicKey } = useWallet()

  useEffect(() => {
    if (!connection || !publicKey) {
        return;
    }
    connection.onAccountChange(
            publicKey,
            updatedAccountInfo => {
                setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL);
            },
            "confirmed",
        );

    connection.getAccountInfo(publicKey).then(info => {
        if (info) {
            setBalance(info.lamports);
        }
    });
    }, [connection, publicKey]);

  return (
    <Card className="w-[450px] rounded-xl">
      <CardHeader className="ml-5">
      <CardTitle>
        <span className="text-sm text-zinc-400">Public Key</span>
        </CardTitle>
        <CardDescription>
          <span>
            {publicKey ? publicKey.toString() : ""}
          </span>
        </CardDescription>
        <CardTitle>
          <span className="text-sm text-zinc-400">Total Balance</span>
        </CardTitle>
        <CardDescription>
          {' '}
          <span className="text-2xl font-semibold">{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL} SOL` : ""}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-evenly">
          {CardItems.map((items) => (
            <ContentButton
              key={items.label}
              label={items.label}
              href={items.href}
              LucidIcon={items.LucidIcon}
              target={items.target}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
