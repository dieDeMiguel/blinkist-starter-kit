import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

// Define Inter (Google Font) with appropriate settings
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Define CeraPRO with all weights and styles
export const ceraPro = localFont({
  src: [
    {
      path: '../app/fonts/CeraPRO-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/CeraPRO-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../app/fonts/CeraPRO-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/CeraPRO-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
}) 