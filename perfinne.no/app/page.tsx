// app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { getAllProjects } from '@/lib/mdx'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="group block aspect-square overflow-hidden bg-gray-100"
          >
            <Image
              src={project.coverImage}
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
  )
}