// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export async function getProjectData(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content)

  return {
    slug,
    mdxSource,
    ...data,
  }
}

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''))
}

export async function getAllProjects() {
  const slugs = getAllProjectSlugs()
  const projects = await Promise.all(slugs.map(async (slug) => {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      ...data,
    }
  }))
  return projects.sort((a, b) => (a.date > b.date ? -1 : 1))
}