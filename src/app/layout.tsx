import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'ATLAS | Venture Builder',
  description: 'Adaptive Technology for Launch, Analysis & Strategy - AI-powered venture building platform',
  keywords: ['venture building', 'business planning', 'AI', 'startup', 'entrepreneurship'],
  authors: [{ name: 'ATLAS' }],
  openGraph: {
    title: 'ATLAS | Venture Builder',
    description: 'AI-powered venture building platform',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-mono antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
