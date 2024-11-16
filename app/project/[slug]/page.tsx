import { getProjectData, getAllProjectSlugs } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

export async function generateStaticParams() {
  const paths = await getAllProjectSlugs()
  return paths
}

export default function Project({ params }: { params: { slug: string } }) {
  return <ProjectContent slug={params.slug} />
}

async function ProjectContent({ slug }: { slug: string }) {
  const projectData = await getProjectData(slug)

  if (!projectData) {
    return <div>Project not found</div>
  }

  const { frontmatter, mdxSource } = projectData

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-600 mb-4">{frontmatter.category}</p>
      {frontmatter.image && (
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={800}
          height={600}
          className="w-full h-auto mb-8"
        />
      )}
      <div className="prose max-w-none">
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  )
}