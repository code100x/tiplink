'use server'

import { Transaction, Keypair } from '@solana/web3.js';
import { isVersionedTransaction } from '@solana/wallet-adapter-base';
import { pvtKeyDecryptionManager } from './pvtKeyDecryptMgmt';
import bs58 from 'bs58';

export async function signTransaction(transactionBase64: string) {
  try {
    // Deserialize the transaction from base64
    const transactionBuffer = Buffer.from(transactionBase64, 'base64');
    const transaction = Transaction.from(transactionBuffer);

    // Getting the private key and generating keypair to sign the transaction
    const PRIVATE_KEY = await pvtKeyDecryptionManager();
    const privateKeyUint8Array = bs58.decode(PRIVATE_KEY);
    const keypair = Keypair.fromSecretKey(privateKeyUint8Array);

    // Sign the transaction with the private key
    if (isVersionedTransaction(transaction)) {
      transaction.sign([keypair]);
    } else {
      transaction.partialSign(keypair);
    }

    // Serialize signed transaction and return as base64
    const signedTransactionBase64 = transaction.serialize().toString('base64');

    return { signedTransactionBase64 };
  } catch (error) {
    console.error('Signing error:', error);
    throw new Error('Failed to sign the transaction');
  }
}
