import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/header"
import { Providers } from "./providers"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="zh-tw" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className='bg-color-white'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
