'use client'

import Image from "next/image"
import Link from "next/link"

interface PortfolioItem {
  id: string
  slug: string
  title: string
  grid_image: string
}

const fallbackImageUrl = '/placeholder.svg?height=320&width=320'

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/portfolio/${item.slug}`}
          className="block aspect-square group relative overflow-hidden"
        >
          <Image
            src={item.grid_image || fallbackImageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackImageUrl;
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm font-light">{item.title}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}