'use client'
import { useState } from 'react'
import Card from '../components/Card'
import DeckScroll from '../components/DeckScroll'
import FilterSidebar from '../components/FilterSidebar'
import data, { CardItem } from '../data/cards-data'

export default function Page() {
  const [path, setPath] = useState<CardItem[]>([])
  const [filters, setFilters] = useState<Set<string>>(new Set())

  const level = path.length + 1
  const parentId = path[path.length - 1]?.id ?? null

  let items = data.filter((d) => d.level === level && d.parentId === parentId)
  if (level === 4 && filters.size > 0) {
    items = items.filter((i) => filters.has(i.kategori))
  }

  const select = (item: CardItem) => {
    if (item.level === 4) {
      setPath([...path.slice(0, 3), item])
    } else {
      setPath([...path.slice(0, item.level - 1), item])
    }
  }

  const back = () => setPath(path.slice(0, -1))

  const active = path[path.length - 1]
  const showDetail = active?.level === 4

  return (
    <div className="flex">
      <FilterSidebar data={data} onChange={setFilters} />
      <div className="flex-1">
        {path.length > 0 && (
          <button className="mb-2 underline" onClick={back}>
            ← Kembali
          </button>
        )}

        {showDetail && active && (
          <div className="p-4 border border-gold mb-4">
            <h2 className="text-gold font-bold">{active.name}</h2>
            <p>{active.deskripsi}</p>
          </div>
        )}

        <DeckScroll>
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              onClick={() => select(item)}
              selected={showDetail && active?.id === item.id}
            />
          ))}
        </DeckScroll>
      </div>
    </div>
  )
}
