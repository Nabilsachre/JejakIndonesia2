import type { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function DeckScroll({ children }: Props) {
  return (
    <div className="overflow-x-auto flex space-x-2 scroll-smooth snap-x snap-mandatory pl-4 py-2">
      {children}
    </div>
  )
}
