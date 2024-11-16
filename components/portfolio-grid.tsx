'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

function formatDate(dateString: string | null): string {
  if (!dateString) return 'No date'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

interface PortfolioItem {
  id: string
  slug: string
  title: string
  date: string | null
  grid_image: string
  category: string
}

export default function PortfolioGrid({ portfolioItems }: { portfolioItems: PortfolioItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item, index) => (
          <Link href={`/portfolio/${item.slug}`} key={item.id}>
            <motion.div 
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Image
                src={item.grid_image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-sm opacity-80">{item.category}</p>
                  <p className="text-sm mt-1">{formatDate(item.date)}</p>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}