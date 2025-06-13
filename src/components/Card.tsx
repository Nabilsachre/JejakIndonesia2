import clsx from 'clsx'
import type { CardItem } from '../data/cards-data'

type Props = { item: CardItem; onClick: () => void; selected: boolean }

export default function Card({ item, onClick, selected }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'border p-4 m-2 snap-start shrink-0 transition hover:scale-105',
        selected ? 'border-white scale-105' : 'border-gold'
      )}
    >
      <h3 className="text-gold font-bold">{item.name}</h3>
      <p className="text-gray-300 text-sm">{item.deskripsi}</p>
    </button>
  )
}
