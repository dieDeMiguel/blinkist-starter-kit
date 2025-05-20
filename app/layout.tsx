import type React from "react"
import type { Metadata } from "next"
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
    <html lang="en">
      <body className="font-sans" style={{ fontFamily: "CeraPRO, sans-serif" }}>{children}</body>
    </html>
  )
}
