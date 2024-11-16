import Image from "next/image"
import Link from "next/link"
import { Menu } from 'lucide-react'

interface NewsPost {
  id: string
  title: string
  date: string
  excerpt: string
  image: string
  slug: string
}

const newsPosts: NewsPost[] = [
  {
    id: "1",
    title: "The knife is nominated to the German Design Awards 2016",
    date: "2015-06-09",
    excerpt: "The knife have received yet another award. This time the Award for Design Excellence from the Norwegian Design Council. Very proud!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rtwUkPZePLZ7RsUmYOAT97sjgXTROl.png",
    slug: "the-knife-is-nominated-to-the-german-design-awards-2016"
  },
  {
    id: "2",
    title: "NEW GRINDER COLORS",
    date: "2015-02-06",
    excerpt: "New grinder colors will be coming up soon – to spice up your kitchen!",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wpRjOzL2jknG0kwXd3IpMt5plnviHm.jpeg",
    slug: "new-grinder-colors"
  }
]

const archiveMonths = [
  { label: "April 2016", value: "2016-04" },
  { label: "October 2015", value: "2015-10" },
  { label: "June 2015", value: "2015-06" },
  { label: "February 2015", value: "2015-02" },
  { label: "October 2014", value: "2014-10" }
]

export default function News() {
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
              className="text-[15px] font-[300] tracking-wide text-black"
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
        <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-12 py-16">
          <div className="space-y-16">
            {newsPosts.map((post) => (
              <article key={post.id} className="space-y-6">
                <h2 className="text-[22px] font-[400] tracking-normal">
                  <Link href={`/news/${post.slug}`} className="hover:text-gray-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <div className="text-[15px] font-[300] text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <Link href={`/news/${post.slug}`} className="block aspect-[16/9] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </Link>
                <p className="text-[15px] leading-[1.8] font-[300]">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          <aside className="space-y-12">
            <section>
              <h3 className="text-[15px] font-[400] mb-4">Latest posts</h3>
              <div className="space-y-2">
                {newsPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="block text-[15px] font-[300] hover:text-gray-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[15px] font-[400] mb-4">Archive</h3>
              <div className="space-y-2">
                {archiveMonths.map((month) => (
                  <Link
                    key={month.value}
                    href={`/news/archive/${month.value}`}
                    className="block text-[15px] font-[300] hover:text-gray-600 transition-colors"
                  >
                    {month.label}
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[15px] font-[400] mb-4">Search</h3>
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search here..."
                  className="w-full px-4 py-2 text-[15px] font-[300] border border-[#f0f0f0] focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </section>
          </aside>
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