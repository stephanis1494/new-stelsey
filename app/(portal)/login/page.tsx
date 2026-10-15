import { Button } from "@/src/components/Button"
import { Input } from "@/src/components/Input"
import { LoginForm } from "@/app/(portal)/login/_components/LoginForm"

export default function Login() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">Welcome back you!</span>
        <span>Log in to view your project</span>
        <LoginForm />
      </main>
    </div>
  )
}
