import Image from "next/image"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface PortfolioItem {
  id: string
  slug: string
  title: string
  category: string
  main_image: string
  detail_image1: string
  detail_image2: string
  date: string
  client: string
  description: string
  skills: string[]
}

async function getPortfolioItem(slug: string): Promise<PortfolioItem | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching portfolio item:', error)
    return null
  }

  return data
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = await getPortfolioItem(params.slug)
  if (!item) return { title: 'Not Found' }

  return {
    title: `${item.title} | Per Finne Design`,
    description: item.description
  }
}

export default async function PortfolioItemPage({ params }: { params: { slug: string } }) {
  const item = await getPortfolioItem(params.slug)

  if (!item) {
    notFound()
  }

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

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8">
          <div className="mb-8">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">
              ← Back to Portfolio
            </Link>
          </div>

          <h1 className="text-3xl font-medium mb-4">{item.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-600 mb-2">Client: {item.client}</p>
              <p className="text-gray-600 mb-2">Date: {new Date(item.date).getFullYear()}</p>
              <p className="text-gray-600 mb-4">Category: {item.category}</p>
              <p className="mb-4">{item.description}</p>
              {item.skills && item.skills.length > 0 && (
                <div>
                  <h2 className="text-xl font-medium mb-2">Skills</h2>
                  <ul className="list-disc list-inside">
                    {item.skills.map((skill, index) => (
                      <li key={index} className="text-gray-600">{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative aspect-square">
              <Image
                src={item.main_image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item.detail_image1 && (
              <div className="relative aspect-square">
                <Image
                  src={item.detail_image1}
                  alt={`${item.title} detail 1`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
            {item.detail_image2 && (
              <div className="relative aspect-square">
                <Image
                  src={item.detail_image2}
                  alt={`${item.title} detail 2`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}