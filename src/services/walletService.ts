"use server"
import { Keypair, Transaction } from "@solana/web3.js";
import prisma from "@/db";
import { User } from "@prisma/client";


export async function createWallet(user: User ) {
    const existingWallet = await prisma.user.findUnique({
        where: {
          id: user.id
        },
        select: {
          publicKey: true
        }
    })
    if (!existingWallet?.publicKey) {
        try { 
            const keypair = Keypair.generate();
            const publicKey = keypair.publicKey.toString()
            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    publicKey: publicKey
                }
            })
            return publicKey
        } catch(error) {
            throw new Error(`Failed to create wallet: ${error}`);
        }
    }
}

// reconstrucitng keypair from secret key as 1:1 mapping is maintained between secret key and keypair
export async function getKeypairFromSecretKey(secretKey: Uint8Array) {
    const keypair = Keypair.fromSecretKey(secretKey);
    return {
        publicKey: keypair.publicKey,
        secretKey: keypair.secretKey
    };
}

export async function signTransaction(transaction: Transaction, secretKey: Uint8Array) {
    // we need to reconstruct the keypair from the secret key to sign the transaction only public key won't work
    const keypair = Keypair.fromSecretKey(secretKey); 
    transaction.sign(keypair);
    return transaction;
}

