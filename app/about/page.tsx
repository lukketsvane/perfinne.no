import Image from "next/image"

export default function About() {
  return (
    <main className="pt-[90px] px-8 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,320px] gap-12 py-16">
        <div className="aspect-square relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6havm6jTmRYxmfuXSPkr5otQ69Ufux.jpeg"
            alt="Per Finne portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-[15px] leading-[1.8] font-[300] space-y-6 max-w-[600px]">
          <p>
            Since 2002 Per Finne has run his own design studio in the village of Voss in the Western part of Norway.
          </p>
          <p>
            Before that he worked as associate professor in product design at the Norwegian University of Science and Technology. Per Finne works with a wide range of projects, but with main focus on sports equipment and domestic products. Living in the midst of the dramatic landscape of Western Norway, his work is highly influenced by nature. He is concerned with designing products with a simple and clean expression, and with a good balance between form and function.
          </p>
        </div>
        <div className="space-y-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cwENDB2rGPGFmFFxAjtjk3ym9GlaOF.png"
            alt="German Design Award Winner 2016"
            width={200}
            height={200}
            className="ml-auto"
          />
          {[...Array(4)].map((_, i) => (
            <Image
              key={i}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bqMPcHJuy7sbYCadHlnOrWk9NqbnW0.png"
              alt="Award for Design Excellence Norwegian Design Council"
              width={200}
              height={50}
              className="ml-auto"
            />
          ))}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cS8wOU77ZX6Me9Vk0qe4nopBwaisal.png"
            alt="The Design for All Award"
            width={200}
            height={50}
            className="ml-auto"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-obP7G5Ba3rj9SNRw9AAvQj8rmDKzX6.png"
            alt="Brit Insurance Designs of the Year"
            width={200}
            height={50}
            className="ml-auto"
          />
        </div>
      </div>
    </main>
  )
}