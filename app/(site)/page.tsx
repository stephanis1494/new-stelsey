import Link from "next/link"
import SunriseSvg from "@/src/svg/sunrise.svg"
import { Button } from "@/src/components/Button"
import { LandscapeBackground } from "@/src/components/LandscapeBackground"

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <LandscapeBackground />
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <h1 className="font-header text-5xl md:text-6xl">Hello, good friend</h1>
        <SunriseSvg className="h-auto max-w-full text-accent" />
        <p className="text-2xl">Who are you here to visit?</p>
        <div className="flex flex-row items-center gap-2">
          <Link href="/stephen">
            <Button>
              <span className="font-medium">Stephen</span>
            </Button>
          </Link>
          <Link href="/chelsey">
            <Button>
              <span className="font-medium">Chelsey</span>
            </Button>
          </Link>
        </div>
        <Link href="/stelsey">
          <span className="cursor-pointer underline">Give me Stelsey</span>
        </Link>
      </div>
    </div>
  )
}
