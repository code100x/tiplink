import './App.css'

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import Balance from './components/balance';
import { useWallet } from '@solana/wallet-adapter-react';
import Sign from './components/signTransaction';
import SendLegacy from './components/sendLegacyTransaction';
import SendV0Transaction from './components/sendVersionedTransaction';
import SendTransaction from './components/sendTransaction';

function App() {
  const { publicKey } = useWallet();

  return (
    <>
      <WalletModalProvider>
        <WalletMultiButton />
        <WalletDisconnectButton />
      </WalletModalProvider>
      {publicKey && <Balance />}
      <Sign />
      <br />
      <SendLegacy />
      <br />
      <SendV0Transaction />
      <br />
      <SendTransaction />
    </>
  )
}

export default App

