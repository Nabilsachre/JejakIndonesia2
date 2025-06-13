'use client'
import { useState, useEffect } from 'react'
import type { CardItem } from '../data/cards-data'

type Props = {
  data: CardItem[]
  onChange: (active: Set<string>) => void
}

export default function FilterSidebar({ data, onChange }: Props) {
  const categories = Array.from(new Set(data.map((d) => d.kategori))).filter(
    (k) => !['Region', 'Provinsi', 'Kota'].includes(k)
  )
  const [active, setActive] = useState<Set<string>>(new Set())

  useEffect(() => {
    onChange(active)
  }, [active, onChange])

  const toggle = (cat: string) => {
    const next = new Set(active)
    next.has(cat) ? next.delete(cat) : next.add(cat)
    setActive(next)
  }

  return (
    <aside className="p-4 border-r border-gold" aria-label="Filter sidebar">
      <h2 className="font-bold mb-2">Kategori</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat} className="mb-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={active.has(cat)}
                onChange={() => toggle(cat)}
              />
              <span>{cat}</span>
            </label>
          </li>
        ))}
      </ul>
      <button className="mt-2 underline" onClick={() => setActive(new Set())}>
        Reset
      </button>
    </aside>
  )
}
