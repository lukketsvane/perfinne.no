import Image from "next/image"
import Link from "next/link"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

interface PortfolioItem {
  id: string
  slug: string
  title: string
  grid_image: string
}

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error:', error)
    return []
  }

  return data || []
}

export default async function Home() {
  const portfolioItems = await getPortfolioItems()

  return (
    <main className="pt-[90px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="relative block aspect-square"
          >
            <Image
              src={item.grid_image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
              className="object-cover"
              priority={parseInt(item.id) <= 4}
            />
            <div 
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-10"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}