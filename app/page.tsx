import Image from "next/image"
import Link from "next/link"
import { supabase } from '@/lib/supabase'

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container mx-auto px-8 h-24 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-tight">
            PER FINNE <span className="font-extralight">DESIGN</span>
          </Link>
          <nav className="flex gap-8">
            <Link href="/about" className="hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <Link href="/news" className="hover:text-gray-600 transition-colors">
              News
            </Link>
            <Link href="/shop" className="hover:text-gray-600 transition-colors">
              Shop
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                className="block aspect-square"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.grid_image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}