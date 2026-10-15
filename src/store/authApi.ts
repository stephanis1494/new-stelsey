import { api } from "@/src/store/api.generated"

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    logout: build.mutation<void, void>({
      query: () => ({
        url: "/api/auth/logout",
        method: "POST",
      }),
    }),
  }),
})

export const { useLogoutMutation } = authApi
