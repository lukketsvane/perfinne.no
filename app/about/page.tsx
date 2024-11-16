import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'

export default function About() {
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
              className="text-[15px] font-[300] tracking-wide text-black"
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
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-[90px] px-8 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,320px] gap-12 py-16">
          <div className="aspect-square relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6havm6jTmRYxmfuXSPkr5otQ69Ufux.jpeg"
              alt="Per Finne portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-[15px] leading-[1.8] font-[300] space-y-6 max-w-[600px]">
            <p>
              Since 2002 Per Finne has run his own design studio in the village of Voss in the Western part of Norway.
            </p>
            <p>
              Before that he worked as associate professor in product design at the Norwegian University of Science and Technology. Per Finne works with a wide range of projects, but with main focus on sports equipment and domestic products. Living in the midst of the dramatic landscape of Western Norway, his work is highly influenced by nature. He is concerned with designing products with a simple and clean expression, and with a good balance between form and function.
            </p>
          </div>
          <div className="space-y-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cwENDB2rGPGFmFFxAjtjk3ym9GlaOF.png"
              alt="German Design Award Winner 2016"
              width={200}
              height={200}
              className="ml-auto"
            />
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bqMPcHJuy7sbYCadHlnOrWk9NqbnW0.png"
                alt="Award for Design Excellence Norwegian Design Council"
                width={200}
                height={50}
                className="ml-auto"
              />
            ))}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cS8wOU77ZX6Me9Vk0qe4nopBwaisal.png"
              alt="The Design for All Award"
              width={200}
              height={50}
              className="ml-auto"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-obP7G5Ba3rj9SNRw9AAvQj8rmDKzX6.png"
              alt="Brit Insurance Designs of the Year"
              width={200}
              height={50}
              className="ml-auto"
            />
          </div>
        </div>
      </main>
    </div>
  )
}