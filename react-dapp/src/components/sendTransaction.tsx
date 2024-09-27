import { Connection, clusterApiUrl, PublicKey, Transaction, TransactionSignature, TransactionInstruction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import { Buffer } from "buffer";

export default function SendTransaction() {
  const { publicKey, sendTransaction } = useWallet()
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  const [success, setSuccess] = useState<any>();
  const [error, setError] = useState<any>();
  const [signn, setSignn] = useState<any>();

  const onClick = useCallback(async () => {
    let signature: TransactionSignature | undefined = undefined;
    try {
      if (!publicKey) throw new Error('Wallet not connected!');

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext();

      const transaction = new Transaction({
        feePayer: publicKey,
        recentBlockhash: blockhash,
      }).add(
        new TransactionInstruction({
          data: Buffer.from('Hello, from the Solana Wallet Adapter example app!'),
          keys: [],
          programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
        })
      );

      signature = await sendTransaction(transaction, connection, { minContextSlot });
      setSignn(signature);

      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
      setSuccess(true)
    } catch (error: any) {
      setError(error?.message);
    }
  }, [publicKey, connection, sendTransaction]);
  return (
    <>
      <h1>Send Transaction</h1>
      <button onClick={onClick} >Send</button>
      {error && <p>{error}</p>}
      {signn && <p>{signn}</p>}
      {success && <p>Transaction successfull</p>}
    </>
  )
}

