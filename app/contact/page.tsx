import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'

export default function Contact() {
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
              className="text-[15px] font-[300] tracking-wide text-black"
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
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-[90px] px-8 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-12 py-16">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z2sU5Wfx5P3U2i07mAqFJZmbYian17.jpeg"
              alt="Per Finne Design Studio Entrance"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-8">
            <h1 className="text-[22px] font-[400] tracking-normal">GET IN TOUCH</h1>
            <div className="space-y-1 text-[15px] leading-[1.8] font-[300]">
              <p>Stallgata 15</p>
              <p>N-5700 VOSS</p>
              <p>NORWAY</p>
            </div>
            <div className="space-y-1 text-[15px] leading-[1.8] font-[300]">
              <a 
                href="mailto:per@perfinne.no" 
                className="block hover:text-black transition-colors"
              >
                per@perfinne.no
              </a>
              <a 
                href="tel:+4791144120" 
                className="block hover:text-black transition-colors"
              >
                +47 911 44 120
              </a>
            </div>
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