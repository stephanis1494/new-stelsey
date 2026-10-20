"use client"
import { useState } from "react"
import { useAuthLoginMutation, api } from "@/src/store/api.generated"
import { useAppDispatch } from "@/src/store/hooks"
import { useRouter } from "next/navigation"

import { Button } from "@/src/components/Button"
import { Input } from "@/src/components/Input"

export const LoginForm = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [login, { isLoading, error }] = useAuthLoginMutation()

  const [emailValue, setEmailValue] = useState<string>("")
  const [passwordValue, setPasswordValue] = useState<string>("")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const user = await login({
        loginRequest: { email: emailValue, password: passwordValue },
      }).unwrap()

      dispatch(api.util.upsertQueryData("authMe", undefined, user))

      router.push(
        user.role === "ADMIN" ? "/admin/projects" : "/portal/projects",
      )
    } catch (e) {
      // hook handles the error state for user
      console.warn("Failed to login user", e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col items-center justify-center">
        <span className="mt-4 self-start text-lg font-medium">Email</span>
        <Input
          value={emailValue}
          setValue={setEmailValue}
          type="email"
          autoComplete="email"
        />
        <span className="mt-4 self-start text-lg font-medium">Password</span>
        <Input
          value={passwordValue}
          setValue={setPasswordValue}
          type="password"
          autoComplete="current-password"
        />
        <Button className="mt-6 w-60">
          <span className="font-medium">Log In</span>
        </Button>
      </div>
    </form>
  )
}
