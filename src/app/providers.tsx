'use client'
import { SessionProvider } from 'next-auth/react'
import AppWalletProvider from '@/components/AppWalletProvider'
import { ThemeProvider } from '@/components/ui/theme-provider'
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AppWalletProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AppWalletProvider>
    </SessionProvider>
  )
}
