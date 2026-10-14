import Link from "next/link"
import SunriseSvg from "@/src/svg/sunrise.svg"
import { Button } from "@/src/components/Button"
import { Input } from "@/src/components/Input"

export default function Login() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">Welcome back you!</span>
        <span>Log in to view your project</span>
        <span className="mt-4 self-start text-lg font-medium">Username</span>
        <Input />
        <span className="mt-4 self-start text-lg font-medium">Password</span>
        <Input />
        <Button className="mt-4 w-60">
          <span className="font-medium">Log In</span>
        </Button>
      </main>
    </div>
  )
}
