import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Wallet } from './components/wallet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*@ts-ignore*/}
    <Wallet>
      <App />
    </Wallet>
  </StrictMode>,
)

