import type { ReactNode } from 'react'
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="p-4 border-b border-gold flex justify-between">
          <h1 className="text-gold font-bold">Jejak Indonesia</h1>
          <nav className="space-x-4">
            <Link href="/">Eksplor</Link>
            <Link href="/kontribusi">Kontribusi</Link>
            <Link href="/tentang">Tentang</Link>
          </nav>
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 border-t border-gold text-center text-sm">Jejak Indonesia</footer>
      </body>
    </html>
  )
}
