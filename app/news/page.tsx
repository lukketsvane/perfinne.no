import Image from 'next/image'
import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    title: 'Award for Design Excellence',
    date: '2016-04-29',
    excerpt: 'The knife has received yet another award. This time the Award for Design Excellence from the Norwegian Design Council. Very proud!',
    image: '/umami/IMG_8194.jpg'
  },
  {
    id: 2,
    title: 'The Umami Santoku wins the German Design Award 2016',
    date: '2015-10-23',
    excerpt: 'Jury statement: Barbara Friedrich / Prof. Karin Schmidt-Ruhland / Frank A. Reinhardt: In the Umami Santoku, Per Finne has developed an incredibly versatile Japanese-style knife...',
    image: '/umami/IMG_8187.jpg'
  },
  {
    id: 3,
    title: 'The knife is nominated to the German Design Awards 2016',
    date: '2015-04-29',
    excerpt: 'The Umami Santoku knife has been nominated for the German Design Awards 2016.',
    image: '/umami/IMG_9320.jpg'
  },
  {
    id: 4,
    title: 'NEW GRINDER COLORS',
    date: '2015-02-06',
    excerpt: 'New grinder colors will be coming to soon – to spice up your kitchen!',
    image: '/hardanger/Salt-og-pepperkvern1.jpg'
  }
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">News</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {newsItems.map((item) => (
            <article key={item.id} className="border-b pb-8">
              <div className="relative aspect-video mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/news/${item.id}`}>{item.title}</Link>
              </h2>
              <p className="text-gray-500 mb-2">{new Date(item.date).toLocaleDateString()}</p>
              <p>{item.excerpt}</p>
              <Link href={`/news/${item.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                Read more
              </Link>
            </article>
          ))}
        </div>
        <aside>
          <h3 className="text-xl font-bold mb-4">Latest posts</h3>
          <ul className="space-y-2">
            {newsItems.map((item) => (
              <li key={item.id}>
                <Link href={`/news/${item.id}`} className="hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}