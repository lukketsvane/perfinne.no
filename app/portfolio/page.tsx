import { supabase } from '@/lib/supabase'
import PortfolioGrid from '@/components/PortfolioGrid'

interface PortfolioItem {
  slug: string
  title: string
  date: string | null
  images: string[]
  category: string
}

async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('slug, title, date, images, category')
    .neq('category', 'Shop')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching portfolio items:', error)
    return []
  }

  return data || []
}

export const metadata = {
  title: 'Portfolio | Per Finne Design',
  description: 'Explore the diverse portfolio of Per Finne Design, showcasing innovative and elegant design solutions.',
}

export default async function PortfolioPage() {
  const portfolioItems = await getPortfolioItems()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-tight">
            PER FINNE <span className="font-light">DESIGN</span>
          </Link>
          <nav className="flex gap-8">
            <Link href="/about" className="text-sm hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <Link href="/news" className="text-sm hover:text-gray-600 transition-colors">
              News
            </Link>
            <Link href="/shop" className="text-sm hover:text-gray-600 transition-colors">
              Shop
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-medium mb-8">Portfolio</h1>
        </div>
        <PortfolioGrid portfolioItems={portfolioItems} />
      </main>

      <footer className="mt-auto py-8 border-t">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center gap-8 text-sm text-gray-600">
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/news" className="hover:text-gray-900">News</Link>
            <Link href="/portfolio" className="hover:text-gray-900">Portfolio</Link>
            <a href="https://facebook.com/perfinnedesign" className="hover:text-gray-900">Facebook Page</a>
          </nav>
          <p className="text-center text-sm text-gray-500 mt-4">© Per Finne</p>
        </div>
      </footer>
    </div>
  )
}