import clsx from 'clsx'
import type { CardItem } from '../data/cards-data'

type Props = { item: CardItem; onClick: () => void; selected: boolean }

export default function Card({ item, onClick, selected }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full h-full rounded-lg p-4 flex flex-col justify-between transition border bg-black/10 m-2 snap-start shrink-0',
        selected ? 'border-white scale-105' : 'border-gold hover:scale-105'
      )}
    >
      <h3 className="text-gold font-bold">{item.name}</h3>
      <p className="text-gray-300 text-sm">{item.deskripsi}</p>
    </button>
  )
}
