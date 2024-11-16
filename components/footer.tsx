import Link from "next/link"

export function Footer() {
  return (
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
  )
}