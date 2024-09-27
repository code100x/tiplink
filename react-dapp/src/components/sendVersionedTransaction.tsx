import { Connection, clusterApiUrl, PublicKey, TransactionSignature, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useState } from "react";
import { Buffer } from 'buffer';

export default function SendV0Transaction() {
  const { publicKey, sendTransaction, wallet } = useWallet();
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
      if (!supportedTransactionVersions.has(0)) throw new Error("Wallet doesn't support v0 transactions!");

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
            keys: [
              {
                pubkey: publicKey,
                isWritable: true,
                isSigner: true,
              },
            ],
            programId: new PublicKey('Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'),
          },
        ],
      });
      const transaction = new VersionedTransaction(message.compileToV0Message());

      signature = await sendTransaction(transaction, connection, { minContextSlot });
      setSignn(signature);

      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
      setSuccess(true);
    } catch (error: any) {
      console.log(error);
      setError(error?.message);
    }
  }, [publicKey, supportedTransactionVersions, connection, sendTransaction]);

  return (
    <>
      <h1>Send V0 Transaction</h1>
      <button onClick={onClick}>Send V0 txn</button>
      {error && <p>{error}</p>}
      {signn && <p>{signn}</p>}
      {success && <p>Transaction successful</p>}
    </>
  );
}

