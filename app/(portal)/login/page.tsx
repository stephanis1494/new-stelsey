import { redirect } from "next/navigation"
import { LoginForm } from "@/app/(portal)/login/_components/LoginForm"
import { getCurrentUser, homePathFor } from "@/src/server/getCurrentUser"

export default async function Login() {
  // Returning visitors with a valid session skip the form entirely.
  const me = await getCurrentUser()
  if (me) redirect(homePathFor(me))

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Welcome back you!</h1>
      <p>Log in to view your projects</p>
      <LoginForm />
    </main>
  )
}
