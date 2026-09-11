import Link from "next/link"
import SunriseSvg from "@/src/svg/sunrise.svg"
import { Button } from "@/src/components/Button"

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-header text-6xl">Hello, good friend</h1>
        <SunriseSvg />
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
      </main>
    </div>
  )
}
