'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="px-8 h-[90px] flex items-center justify-between">
        <Link 
          href="/" 
          className="text-[22px] tracking-normal font-[400]"
          onClick={() => setIsOpen(false)}
        >
          PER FINNE <span className="font-[300]">DESIGN</span>
        </Link>
        <button onClick={() => setIsOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="px-8 py-12 flex flex-col gap-8">
        <Link 
          href="/about" 
          className="text-[15px] font-[300] tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-[15px] font-[300] tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link 
          href="/news" 
          className="text-[15px] font-[300] tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          News
        </Link>
        <Link 
          href="/shop" 
          className="text-[15px] font-[300] tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          Shop
        </Link>
      </nav>
    </div>
  )
}