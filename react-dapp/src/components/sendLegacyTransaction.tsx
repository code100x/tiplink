import { Connection, clusterApiUrl, TransactionSignature, TransactionMessage, PublicKey, VersionedTransaction, } from "@solana/web3.js"
import { useWallet } from "@solana/wallet-adapter-react"
import { useCallback, useState } from "react";
import { Buffer } from "buffer";

export default function SendLegacy() {
  const { publicKey, sendTransaction, wallet } = useWallet()
  const supportedTransactionVersions = wallet?.adapter.supportedTransactionVersions;

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  const [success, setSuccess] = useState<any>();
  const [error, setError] = useState<any>();
  const [signn, setSignn] = useState<any>();

  const onClick = useCallback(async () => {
    let signature: TransactionSignature | undefined = undefined;
    try {
      if (!publicKey) throw new Error('Wallet not connected!');
      if (!supportedTransactionVersions) throw new Error("Wallet doesn't support versioned transactions!");
      if (!supportedTransactionVersions.has('legacy'))
        throw new Error("Wallet doesn't support legacy transactions!");

      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext();

      const message = new TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: blockhash,
        instructions: [
          {
            data: Buffer.from('Hello, from the Solana Wallet Adapter example app!'),
            keys: [],
            programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
          },
        ],
      });
      const transaction = new VersionedTransaction(message.compileToLegacyMessage());

      signature = await sendTransaction(transaction, connection, { minContextSlot });
      setSignn(signature);

      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
      setSuccess(true)
    } catch (error: any) {
      setSuccess(false)
      setError(error?.message)
    }
  }, [publicKey, supportedTransactionVersions, connection, sendTransaction]);

  return (
    <>
      <h1>Send Legacy Transaction</h1>
      <button onClick={onClick}>Send Legacy</button>
      {error && <p>{error}</p>}
      {signn && <p>Here is the signature: {signn}</p>}
      {success && <p>Transaction successful</p>}
    </>
  )
}
