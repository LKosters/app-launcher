import Link from "next/link"
import Image from "next/image"

const apps = [
  {
    name: "card-vault",
    icon: "https://oyk76e8cxg.ufs.sh/f/zBgqJ6knLHTh1Ll2rsQ74sAmNGWdnPbUOilTZS1j28w9xBtE",
    url: "https://card-vault.laurenskosters.nl",
    iconPosition: "0 0",
  },
  {
    name: "dev-snip",
    icon: "https://oyk76e8cxg.ufs.sh/f/zBgqJ6knLHThBOTkGDgeORiTw4avSIs0lDXErbHYq6NVWM3G",
    url: "https://devsnip.laurenskosters.nl",
    iconPosition: "100% 0",
  },
]

export default function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800">
      <main className="flex-grow flex flex-col items-center justify-center p-4 gap-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-400">
          My Applications
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.url}
              target="_blank"
              className="group relative bg-zinc-900/50 rounded-lg p-6 hover:bg-zinc-800/50 transition-all duration-200 flex flex-col items-center gap-3 border border-zinc-800 hover:border-zinc-700"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                <Image
                  src={app.icon || "/placeholder.svg"}
                  alt={app.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: app.iconPosition }}
                />
              </div>
              <div className="text-center">
                <h2 className="text-zinc-100 text-lg font-medium mb-1">{app.name}</h2>
                <p className="text-zinc-400 text-sm">{app.name}.laurenskosters.nl</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="py-3 px-4 text-center text-zinc-500 text-sm">
        © {currentYear} Laurens Kosters. All rights reserved.
      </footer>
    </div>
  )
}

