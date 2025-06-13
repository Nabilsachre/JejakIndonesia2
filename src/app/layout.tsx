import type { ReactNode } from 'react'
import './globals.css'
import Link from 'next/link'
import Head from 'next/head'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="bg-black text-gold">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jejak Indonesia</title>
      </Head>
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-gold/30 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto flex flex-wrap gap-6 p-4 items-center">
            <Link href="/" className="font-bold text-xl whitespace-nowrap">
              Jejak<span className="text-white">Indonesia</span>
            </Link>
            <div className="flex gap-4 text-sm">
              <Link className="hover:text-white" href="/">Jelajahi</Link>
              <Link className="hover:text-white" href="/kontribusi">Kontribusi</Link>
              <Link className="hover:text-white" href="/tentang">Tentang</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 border-t border-gold text-center text-sm">Jejak Indonesia</footer>
      </body>
    </html>
  )
}
