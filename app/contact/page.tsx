import Image from "next/image"

export default function Contact() {
  return (
    <main className="pt-[90px] px-8 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-12 py-16">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Z2sU5Wfx5P3U2i07mAqFJZmbYian17.jpeg"
            alt="Per Finne Design Studio Entrance"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-8">
          <h1 className="text-[22px] font-[400] tracking-normal">GET IN TOUCH</h1>
          <div className="space-y-1 text-[15px] leading-[1.8] font-[300]">
            <p>Stallgata 15</p>
            <p>N-5700 VOSS</p>
            <p>NORWAY</p>
          </div>
          <div className="space-y-1 text-[15px] leading-[1.8] font-[300]">
            <a 
              href="mailto:per@perfinne.no" 
              className="block hover:text-black transition-colors"
            >
              per@perfinne.no
            </a>
            <a 
              href="tel:+4791144120" 
              className="block hover:text-black transition-colors"
            >
              +47 911 44 120
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}