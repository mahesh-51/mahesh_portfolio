import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahesh Joshi',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}
