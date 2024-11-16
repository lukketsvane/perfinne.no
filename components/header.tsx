'use client'

import Link from "next/link"
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f8f8] border-b border-[#f0f0f0]">
      <div className="px-8 h-[90px] flex items-center justify-between max-w-[1800px] mx-auto">
        <Link href="/" className="text-[22px] tracking-normal font-[400]">
          PER FINNE <span className="font-[300]">DESIGN</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link 
            href="/about" 
            className={`text-[15px] font-[300] tracking-wide transition-colors ${
              pathname === '/about' ? 'text-black' : 'hover:text-black'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-[15px] font-[300] tracking-wide transition-colors ${
              pathname === '/contact' ? 'text-black' : 'hover:text-black'
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/news" 
            className={`text-[15px] font-[300] tracking-wide transition-colors ${
              pathname === '/news' ? 'text-black' : 'hover:text-black'
            }`}
          >
            News
          </Link>
          <Link 
            href="/shop" 
            className={`text-[15px] font-[300] tracking-wide transition-colors ${
              pathname === '/shop' ? 'text-black' : 'hover:text-black'
            }`}
          >
            Shop
          </Link>
        </nav>
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}