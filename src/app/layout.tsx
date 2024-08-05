import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "./providers";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";

export const metadata: Metadata = {
  title: 'Create Next App',
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
            {children}
            <ScrollToTopButton />
        </body>
        
      </Providers>
    </html>
  )
}
