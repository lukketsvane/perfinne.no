import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-tight">
            PER FINNE <span className="font-light">DESIGN</span>
          </Link>
          <nav className="flex gap-8">
            <Link href="/about" className="text-sm text-red-500">
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

      <main className="container mx-auto px-4 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/5] bg-gray-100">
            <Image
              src="/placeholder.svg?height=800&width=640"
              alt="Portrait of Per Finne"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-8">
            <div className="prose max-w-none">
              <p className="text-lg">
                Since 2002 Per Finne has run his own design studio in the village of Voss in the Western part of Norway. 
                Before that he worked as associate professor in product design at the Norwegian University of Science and Technology.
              </p>
              <p className="text-lg">
                Per Finne works with a wide range of projects, but with main focus on sports equipment and domestic products. 
                Living in the midst of the dramatic landscape of Western Norway, his work is highly influenced by nature. 
                He is concerned with designing products with a simple and clean expression, and with a good balance between form and function.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="German Design Award 2016"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <Image
                      key={index}
                      src="/placeholder.svg?height=60&width=60"
                      alt={`Norwegian Design Excellence Award ${index}`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}