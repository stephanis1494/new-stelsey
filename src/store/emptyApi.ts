import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query"

const UNSAFE_METHODS = ["POST", "PUT", "PATCH", "DELETE"]

let csrfRequest: Promise<unknown> | null = null

const readCookie = (name: string) =>
  document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${name}=`))
    ?.split("=")[1]

const ensureCsrfCookie = async () => {
  if (readCookie("XSRF-TOKEN")) return

  csrfRequest ??= fetch("/api/auth/csrf").finally(() => {
    csrfRequest = null
  })

  await csrfRequest
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "",
  prepareHeaders: (headers) => {
    const token = readCookie("XSRF-TOKEN")
    if (token) headers.set("X-XSRF-TOKEN", decodeURIComponent(token))
    return headers
  },
})

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extra) => {
  const method =
    typeof args === "string" ? "GET" : (args?.method || "GET").toUpperCase()

  if (UNSAFE_METHODS.includes(method)) {
    await ensureCsrfCookie()
  }

  const result = await rawBaseQuery(args, api, extra)
  if (
    result.error?.status === 401 &&
    !window.location.pathname.startsWith("/login")
  ) {
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign("/login")
  }
  return result
}

export const emptyApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
})
