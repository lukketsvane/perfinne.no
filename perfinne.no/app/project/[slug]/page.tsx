// app/project/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getProjectData, getAllProjectSlugs } from '@/lib/mdx'
import Image from 'next/image'

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug)

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.coverImage}
        alt={project.title}
        width={1200}
        height={600}
        className="w-full h-auto mb-8"
      />
      <div className="prose max-w-none">
        <MDXRemote {...project.mdxSource} />
      </div>
    </article>
  )
}
