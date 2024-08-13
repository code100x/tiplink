import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { Providers } from './providers'
import NextTopLoader from 'nextjs-toploader'
import AppWalletProvider from '@/components/AppWalletProvider'
import Appbar from '@/components/Appbar/Appbar'
export const metadata: Metadata = {
  title: 'TipLink',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <NextTopLoader color="#333" />
          <AppWalletProvider>
            <Appbar />
            {children}
          </AppWalletProvider>
        </body>
      </Providers>
    </html>
  )
}
