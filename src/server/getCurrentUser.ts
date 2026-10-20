import "server-only"
import { cache } from "react"
import { cookies } from "next/headers"
import type { MeResponse } from "@/src/store/api.generated"

const API_URL = process.env.API_URL ?? "http://localhost:8080"

// Asks the Spring API who the current session belongs to, by forwarding the browser's
// cookies from the incoming request. Returns null when not logged in.
// `cache` dedupes calls within one request (e.g. a layout and its page both calling it).
export const getCurrentUser = cache(async (): Promise<MeResponse | null> => {
  const cookieStore = await cookies()
  const res = await fetch(`${API_URL}/api/auth/me`, {
    headers: { cookie: cookieStore.toString() },
    cache: "no-store",
  })
  if (res.status === 401) return null
  if (!res.ok) throw new Error(`Auth check failed: ${res.status}`)
  return res.json()
})

export const homePathFor = (user: MeResponse) =>
  user.role === "ADMIN" ? "/admin/projects" : "/portal/projects"
