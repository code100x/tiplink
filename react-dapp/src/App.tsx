import './App.css'

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

function App() {

  return (
    <>
      <WalletModalProvider>
        <WalletMultiButton />
        <WalletDisconnectButton />
      </WalletModalProvider>
    </>
  )
}

export default App

