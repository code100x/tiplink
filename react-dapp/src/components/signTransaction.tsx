import { Connection, clusterApiUrl, Transaction, PublicKey, TransactionInstruction, } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import bs58 from 'bs58';
import { Buffer } from "buffer";

export default function Sign() {
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const { publicKey, signTransaction } = useWallet();
  const [error, setError] = useState<any>();
  const [verify, setVerify] = useState<any>();
  const [sign, setSign] = useState<any>();

  const onClick = useCallback(async () => {
    try {
      if (!publicKey) throw new Error('Wallet not connected!');
      if (!signTransaction) throw new Error('Wallet does not support transaction signing!');

      const { blockhash } = await connection.getLatestBlockhash();

      let transaction = new Transaction({
        feePayer: publicKey,
        recentBlockhash: blockhash,
      }).add(
        new TransactionInstruction({
          data: Buffer.from('Hello, from the Solana Wallet Adapter example app!'),
          keys: [],
          programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
        })
      );

      transaction = await signTransaction(transaction);
      if (!transaction.signature) throw new Error('Transaction not signed!');
      const signature = bs58.encode(transaction.signature);
      setSign(signature);
      if (!transaction.verifySignatures()) {
        setVerify(false);
        throw new Error(`Transaction signature invalid! ${signature}`);
      }
      else {
        setVerify(true)
      }
    } catch (error: any) {
      setError(error?.message);
    }
  }, [publicKey, signTransaction, connection]);

  return (
    <>
      <h1>Sign the transaction</h1>
      <button color="secondary" onClick={onClick} disabled={!publicKey || !signTransaction}>
        Sign Transaction
      </button>
      {error && <p> {error} </p>}
      {sign && (
        <>
          <p>Transaction signed here is the signature: {sign}</p>
          <p>{!verify ? 'Verfication failed' : 'Verfication success'}</p>
        </>
      )}
    </>
  );
}
