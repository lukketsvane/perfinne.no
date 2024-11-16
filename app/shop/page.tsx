import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  title: string
  price: number
  image: string
  slug: string
}

const products: Product[] = [
  {
    id: "1",
    title: "Umami Santoku",
    price: 2000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4ILk4kDRFtgvjrZ5ZzSborrt5lCg8o.jpeg",
    slug: "umami-santoku"
  }
]

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] border-b border-[#f0f0f0]">
        <div className="px-8 h-[90px] flex items-center justify-between max-w-[1800px] mx-auto">
          <Link href="/" className="text-[22px] tracking-normal font-[400]">
            PER FINNE <span className="font-[300]">DESIGN</span>
          </Link>
          <nav className="hidden md:flex gap-8">
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
              className="text-[15px] font-[300] tracking-wide text-black"
            >
              Shop
            </Link>
          </nav>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-[90px] px-8 max-w-[1800px] mx-auto">
        <div className="py-16">
          <div className="flex justify-between items-center mb-8">
            <p className="text-[15px] font-[300]">Showing the single result</p>
            <Select defaultValue="default">
              <SelectTrigger className="w-[180px] text-[15px] font-[300]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default sorting</SelectItem>
                <SelectItem value="popularity">Sort by popularity</SelectItem>
                <SelectItem value="latest">Sort by latest</SelectItem>
                <SelectItem value="price-asc">Sort by price: low to high</SelectItem>
                <SelectItem value="price-desc">Sort by price: high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/shop/${product.slug}`} className="block">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-[15px] font-[400] mb-2">{product.title}</h2>
                  <p className="text-[15px] font-[300] text-gray-600 mb-4">kr {product.price.toLocaleString()}</p>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full text-[15px] font-[300] h-10"
                >
                  Add to cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-[#f0f0f0] mt-auto">
        <div className="max-w-[1800px] mx-auto px-8 py-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-[15px] font-[300]">
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            <Link href="/news" className="hover:text-black transition-colors">News</Link>
            <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
            <a 
              href="https://www.facebook.com/pages/Per-Finne-Design/564544167012300" 
              className="hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              FaceBook Page
            </a>
          </nav>
          <p className="text-center text-[15px] font-[300] mt-4">© Per Finne</p>
        </div>
      </footer>
    </div>
  )
}