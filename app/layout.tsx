import localFont from 'next/font/local'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const futura = localFont({
  src: [
    {
      path: '../public/fonts/FuturaCyrillicLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/FuturaCyrillicBook.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FuturaCyrillicMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/FuturaCyrillicDemi.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/FuturaCyrillicBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-futura',
})

export const metadata = {
  title: 'Per Finne Design',
  description: 'Portfolio of Per Finne, Product Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${futura.variable}`}>
      <body className="bg-white antialiased font-sans min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}