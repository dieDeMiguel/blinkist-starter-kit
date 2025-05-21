import type React from "react"
import type { Metadata } from "next"
import { ceraPro, inter } from "@/styles/fonts"
import "./globals.css"

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
    <html lang="en" className={`${ceraPro.variable} ${inter.variable}`}>
      <body className="--font-cerapro">{children}</body>
    </html>
  )
}
