'use client';

import { useEffect, useState } from 'react';
import { signTransaction } from '../../actions/signTransaction';
import { Button } from "@/components/ui/button";

export default function SignTransactionPage() {
  const [transactionBase64, setTransactionBase64] = useState<string | null>(null);
  const [transactionDetails, setTransactionDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [msg, setMsg] = useState<any>();

  useEffect(() => {
    // const transactionBase64 = sessionStorage.getItem('transaction');
    // if (transactionBase64) {
    //   setTransactionBase64(transactionBase64);
    //   // TODO: Parse and display details for the user to review
    //   setTransactionDetails('Transaction details go here...');
    // } else {
    //   setError('No transaction found in session storage.');
    // }
    // Listen for the transaction data from the parent window
    const onMessage = (event: MessageEvent) => {
      setMsg(true);
      if (event.data.type === 'TRANSACTION_DATA' && event.data.transaction) {
        setTransactionBase64(event.data.transaction);
        // TODO: Parse and display details for the user to review
        setTransactionDetails('Transaction details go here...');
      } else {
        setError('No transaction data received.');
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, []);

  const handleSign = async () => {
    if (!transactionBase64) return;

    try {
      const { signedTransactionBase64 } = await signTransaction(transactionBase64);

      window.opener.postMessage({
        type: 'SIGNED_TRANSACTION',
        signedTransaction: signedTransactionBase64,
      }, '*');

      window.close();
    } catch (error) {
      console.error('Signing error:', error);
      window.opener.postMessage({ type: 'SIGN_TRANSACTION_FAILED' }, '*');
    }
  };

  const handleReject = () => {
    window.opener.postMessage({ type: 'SIGN_TRANSACTION_FAILED' }, '*');
    window.close();
  };

  if (error) return <p>{error}</p>;

  return (
    <div >
      <h1>Sign Transaction</h1>
      {msg && <p>Message received</p>}
      {transactionBase64 && <p>{transactionBase64}</p>}
      <p>Review the transaction details below and confirm whether you want to sign it.</p>
      <pre>{JSON.stringify(transactionDetails, null, 2)}</pre>
      <div>
        <Button onClick={handleSign} disabled={!!transactionBase64 ? false : true}  >
          Sign
        </Button>
        <Button onClick={handleReject}>Reject</Button>
      </div>
    </div>
  );
}
