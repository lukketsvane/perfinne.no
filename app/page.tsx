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
    .select('id, slug, title, grid_image')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching portfolio items:', error)
    return []
  }

  return data || []
}

export default async function Home() {
  const portfolioItems = await getPortfolioItems()

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] border-b border-[#f0f0f0]">
        <div className="px-8 h-[90px] flex items-center justify-between max-w-[1800px] mx-auto">
          <Link 
            href="/" 
            className="text-[22px] tracking-normal font-[400]"
          >
            PER FINNE <span className="font-[300]">DESIGN</span>
          </Link>
          <nav className="flex gap-8">
            <Link 
              href="/about" 
              className="text-[15px] font-[300] tracking-wide hover:text-black transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-[15px] font-[300] tracking-wide hover:text-black transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/news" 
              className="text-[15px] font-[300] tracking-wide hover:text-black transition-colors"
            >
              News
            </Link>
            <Link 
              href="/shop" 
              className="text-[15px] font-[300] tracking-wide hover:text-black transition-colors"
            >
              Shop
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-[90px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group relative block aspect-square"
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10 z-10" />
              <Image
                src={item.grid_image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
                priority
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}