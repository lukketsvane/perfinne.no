'use client'

import Image from "next/image"
import Link from "next/link"
import { sql } from '@vercel/postgres'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

interface Project {
  id: string
  title: string
  slug: string
  category: string
  gridImage: string
}

async function getProjects() {
  const { rows } = await sql`
    SELECT id, title, slug, category, grid_image as "gridImage"
    FROM projects 
    ORDER BY date DESC
  `
  return rows as Project[]
}

export async function BlockPage() {
  const projects = await getProjects()

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white">
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

        <main className="min-h-screen pt-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  className="group block aspect-square overflow-hidden bg-gray-100"
                >
                  <Image
                    src={project.gridImage}
                    alt={project.title}
                    width={640}
                    height={640}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-lg font-medium">{project.title}</h2>
                      <p className="text-sm opacity-80">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <footer className="bg-gray-100 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-600">© 2023 Per Finne Design. All rights reserved.</p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Facebook</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}