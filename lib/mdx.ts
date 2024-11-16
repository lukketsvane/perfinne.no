import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';

export async function getProjectData(slug: string) {
  const { rows } = await sql`
    SELECT p.*, 
           json_agg(DISTINCT jsonb_build_object('image_url', pi.image_url, 'image_type', pi.image_type)) AS images,
           json_agg(DISTINCT jsonb_build_object('award_name', a.award_name, 'year', a.year)) AS awards
    FROM projects p
    LEFT JOIN project_images pi ON p.id = pi.project_id
    LEFT JOIN awards a ON p.id = a.project_id
    WHERE p.slug = ${slug}
    GROUP BY p.id
  `;

  if (rows.length === 0) {
    notFound();
  }

  const project = rows[0];

  // Transform the data to match the expected structure
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    shortDescription: project.short_description,
    longDescription: project.long_description,
    gridImage: project.grid_image,
    mainImage: project.main_image,
    detailImage1: project.detail_image1,
    detailImage2: project.detail_image2,
    price: project.price,
    date: project.date,
    features: project.features,
    images: project.images.filter(img => img.image_url !== null),
    awards: project.awards.filter(award => award.award_name !== null)
  };
}

export async function getAllProjectSlugs() {
  const { rows } = await sql`SELECT slug FROM projects`;
  return rows.map(row => row.slug);
}