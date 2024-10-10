'use client'
import { SessionProvider } from 'next-auth/react'
import AppWalletProvider from '@/components/AppWalletProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AppWalletProvider>{children}</AppWalletProvider>
    </SessionProvider>
  )
}
