'use server'
import { Keypair, LAMPORTS_PER_SOL, Transaction } from '@solana/web3.js'
import prisma from '@/db'
import { User } from '@prisma/client'
import axios from 'axios'

const customRpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC || ''

export async function createWallet(user: User) {
  const existingWallet = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      publicKey: true,
    },
  })
  if (!existingWallet?.publicKey) {
    try {
      const keypair = Keypair.generate()
      const publicKey = keypair.publicKey.toString()
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          publicKey: publicKey,
        },
      })
      return publicKey
    } catch (error) {
      throw new Error(`Failed to create wallet: ${error}`)
    }
  }
}

// reconstrucitng keypair from secret key as 1:1 mapping is maintained between secret key and keypair
export async function getKeypairFromSecretKey(secretKey: Uint8Array) {
  const keypair = Keypair.fromSecretKey(secretKey)
  return {
    publicKey: keypair.publicKey,
    secretKey: keypair.secretKey,
  }
}

export async function signTransaction(
  transaction: Transaction,
  secretKey: Uint8Array,
) {
  // we need to reconstruct the keypair from the secret key to sign the transaction only public key won't work
  const keypair = Keypair.fromSecretKey(secretKey)
  transaction.sign(keypair)
  return transaction
}

export async function fetchUserBalance(publicKey?: string) {
  if (!customRpcUrl) {
    console.error('RPC URL is not defined.')
    return
  }

  try {
    const res = await axios.post(customRpcUrl, {
      jsonrpc: '2.0',
      id: 1,
      method: 'getBalance',
      params: [`${publicKey}`],
    })
    const balance = res?.data?.result?.value
    const solBalance = balance / LAMPORTS_PER_SOL
    return solBalance
  } catch (error) {
    console.error('Failed to fetch balance:', error)
  }
}
