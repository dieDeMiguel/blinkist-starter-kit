import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import { Inter } from 'next/font/google'

// Define Inter (Google Font) with appropriate settings
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Blinkist",
  description: "Big ideas in small packages",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
