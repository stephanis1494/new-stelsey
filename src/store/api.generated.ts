import { emptyApi as api } from "./emptyApi"
export const addTagTypes = [
  "Auth",
  "Admin: Users",
  "Admin: Customers",
  "Admin: Projects",
  "Customer: Projects",
] as const
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authLogin: build.mutation<AuthLoginApiResponse, AuthLoginApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/login`,
          method: "POST",
          body: queryArg.loginRequest,
        }),
        invalidatesTags: ["Auth"],
      }),
      authAcceptInvite: build.mutation<
        AuthAcceptInviteApiResponse,
        AuthAcceptInviteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/accept-invite`,
          method: "POST",
          body: queryArg.acceptInviteRequest,
        }),
        invalidatesTags: ["Auth"],
      }),
      userAdminReissueInvite: build.mutation<
        UserAdminReissueInviteApiResponse,
        UserAdminReissueInviteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/users/${queryArg.id}/invite`,
          method: "POST",
        }),
        invalidatesTags: ["Admin: Users"],
      }),
      customerAdminList: build.query<
        CustomerAdminListApiResponse,
        CustomerAdminListApiArg
      >({
        query: () => ({ url: `/api/admin/customers` }),
        providesTags: ["Admin: Customers"],
      }),
      customerAdminCreate: build.mutation<
        CustomerAdminCreateApiResponse,
        CustomerAdminCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/customers`,
          method: "POST",
          body: queryArg.createCustomerRequest,
        }),
        invalidatesTags: ["Admin: Customers"],
      }),
      userAdminListForCustomer: build.query<
        UserAdminListForCustomerApiResponse,
        UserAdminListForCustomerApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/customers/${queryArg.customerId}/users`,
        }),
        providesTags: ["Admin: Users"],
      }),
      userAdminCreate: build.mutation<
        UserAdminCreateApiResponse,
        UserAdminCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/customers/${queryArg.customerId}/users`,
          method: "POST",
          body: queryArg.createCustomerUserRequest,
        }),
        invalidatesTags: ["Admin: Users"],
      }),
      projectAdminListForCustomer: build.query<
        ProjectAdminListForCustomerApiResponse,
        ProjectAdminListForCustomerApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/customers/${queryArg.customerId}/projects`,
        }),
        providesTags: ["Admin: Projects"],
      }),
      projectAdminCreate: build.mutation<
        ProjectAdminCreateApiResponse,
        ProjectAdminCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/customers/${queryArg.customerId}/projects`,
          method: "POST",
          body: queryArg.createProjectRequest,
        }),
        invalidatesTags: ["Admin: Projects"],
      }),
      userAdminUpdate: build.mutation<
        UserAdminUpdateApiResponse,
        UserAdminUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/users/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateUserRequest,
        }),
        invalidatesTags: ["Admin: Users"],
      }),
      projectAdminGet: build.query<
        ProjectAdminGetApiResponse,
        ProjectAdminGetApiArg
      >({
        query: (queryArg) => ({ url: `/api/admin/projects/${queryArg.id}` }),
        providesTags: ["Admin: Projects"],
      }),
      projectAdminUpdate: build.mutation<
        ProjectAdminUpdateApiResponse,
        ProjectAdminUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/projects/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateProjectRequest,
        }),
        invalidatesTags: ["Admin: Projects"],
      }),
      customerAdminGet: build.query<
        CustomerAdminGetApiResponse,
        CustomerAdminGetApiArg
      >({
        query: (queryArg) => ({ url: `/api/admin/customers/${queryArg.id}` }),
        providesTags: ["Admin: Customers"],
      }),
      customerAdminUpdate: build.mutation<
        CustomerAdminUpdateApiResponse,
        CustomerAdminUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/customers/${queryArg.id}`,
          method: "PATCH",
          body: queryArg.updateCustomerRequest,
        }),
        invalidatesTags: ["Admin: Customers"],
      }),
      customerProjectList: build.query<
        CustomerProjectListApiResponse,
        CustomerProjectListApiArg
      >({
        query: () => ({ url: `/api/projects` }),
        providesTags: ["Customer: Projects"],
      }),
      customerProjectGet: build.query<
        CustomerProjectGetApiResponse,
        CustomerProjectGetApiArg
      >({
        query: (queryArg) => ({ url: `/api/projects/${queryArg.id}` }),
        providesTags: ["Customer: Projects"],
      }),
      authMe: build.query<AuthMeApiResponse, AuthMeApiArg>({
        query: () => ({ url: `/api/auth/me` }),
        providesTags: ["Auth"],
      }),
      authCsrf: build.query<AuthCsrfApiResponse, AuthCsrfApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/csrf`,
          params: {
            csrfToken: queryArg.csrfToken,
          },
        }),
        providesTags: ["Auth"],
      }),
      projectAdminListAll: build.query<
        ProjectAdminListAllApiResponse,
        ProjectAdminListAllApiArg
      >({
        query: (queryArg) => ({
          url: `/api/admin/projects`,
          params: {
            status: queryArg.status,
          },
        }),
        providesTags: ["Admin: Projects"],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as api }
export type AuthLoginApiResponse = /** status 200 OK */ MeResponse
export type AuthLoginApiArg = {
  loginRequest: LoginRequest
}
export type AuthAcceptInviteApiResponse = unknown
export type AuthAcceptInviteApiArg = {
  acceptInviteRequest: AcceptInviteRequest
}
export type UserAdminReissueInviteApiResponse =
  /** status 200 OK */ InviteResponse
export type UserAdminReissueInviteApiArg = {
  id: number
}
export type CustomerAdminListApiResponse =
  /** status 200 OK */ CustomerResponse[]
export type CustomerAdminListApiArg = void
export type CustomerAdminCreateApiResponse =
  /** status 200 OK */ CustomerResponse
export type CustomerAdminCreateApiArg = {
  createCustomerRequest: CreateCustomerRequest
}
export type UserAdminListForCustomerApiResponse =
  /** status 200 OK */ UserResponse[]
export type UserAdminListForCustomerApiArg = {
  customerId: number
}
export type UserAdminCreateApiResponse = /** status 200 OK */ InviteResponse
export type UserAdminCreateApiArg = {
  customerId: number
  createCustomerUserRequest: CreateCustomerUserRequest
}
export type ProjectAdminListForCustomerApiResponse =
  /** status 200 OK */ ProjectResponse[]
export type ProjectAdminListForCustomerApiArg = {
  customerId: number
}
export type ProjectAdminCreateApiResponse = /** status 200 OK */ ProjectResponse
export type ProjectAdminCreateApiArg = {
  customerId: number
  createProjectRequest: CreateProjectRequest
}
export type UserAdminUpdateApiResponse = /** status 200 OK */ UserResponse
export type UserAdminUpdateApiArg = {
  id: number
  updateUserRequest: UpdateUserRequest
}
export type ProjectAdminGetApiResponse = /** status 200 OK */ ProjectResponse
export type ProjectAdminGetApiArg = {
  id: number
}
export type ProjectAdminUpdateApiResponse = /** status 200 OK */ ProjectResponse
export type ProjectAdminUpdateApiArg = {
  id: number
  updateProjectRequest: UpdateProjectRequest
}
export type CustomerAdminGetApiResponse = /** status 200 OK */ CustomerResponse
export type CustomerAdminGetApiArg = {
  id: number
}
export type CustomerAdminUpdateApiResponse =
  /** status 200 OK */ CustomerResponse
export type CustomerAdminUpdateApiArg = {
  id: number
  updateCustomerRequest: UpdateCustomerRequest
}
export type CustomerProjectListApiResponse =
  /** status 200 OK */ CustomerProjectResponse[]
export type CustomerProjectListApiArg = void
export type CustomerProjectGetApiResponse =
  /** status 200 OK */ CustomerProjectResponse
export type CustomerProjectGetApiArg = {
  id: number
}
export type AuthMeApiResponse = /** status 200 OK */ MeResponse
export type AuthMeApiArg = void
export type AuthCsrfApiResponse = unknown
export type AuthCsrfApiArg = {
  csrfToken: CsrfToken
}
export type ProjectAdminListAllApiResponse =
  /** status 200 OK */ ProjectSummaryResponse[]
export type ProjectAdminListAllApiArg = {
  status?: "PLANNING" | "IN_PROGRESS" | "IN_REVIEW" | "ON_HOLD" | "COMPLETED"
}
export type MeResponse = {
  id?: number
  email?: string
  displayName?: string
  role?: "ADMIN" | "CUSTOMER"
  customerId?: number
}
export type LoginRequest = {
  email: string
  password: string
}
export type AcceptInviteRequest = {
  token: string
  password: string
}
export type UserResponse = {
  id?: number
  customerId?: number
  email?: string
  displayName?: string
  role?: "ADMIN" | "CUSTOMER"
  enabled?: boolean
  passwordSet?: boolean
  createdAt?: string
}
export type InviteResponse = {
  user?: UserResponse
  inviteUrl?: string
  expiresAt?: string
}
export type CustomerResponse = {
  id?: number
  name?: string
  status?: "ACTIVE" | "ARCHIVED"
  createdAt?: string
  updatedAt?: string
}
export type CreateCustomerRequest = {
  name: string
}
export type CreateCustomerUserRequest = {
  email: string
  displayName: string
}
export type ProjectResponse = {
  id?: number
  customerId?: number
  name?: string
  description?: string
  status?: "PLANNING" | "IN_PROGRESS" | "IN_REVIEW" | "ON_HOLD" | "COMPLETED"
  createdAt?: string
  updatedAt?: string
}
export type CreateProjectRequest = {
  name: string
  description?: string
}
export type UpdateUserRequest = {
  enabled?: boolean
}
export type UpdateProjectRequest = {
  name?: string
  description?: string
  status?: "PLANNING" | "IN_PROGRESS" | "IN_REVIEW" | "ON_HOLD" | "COMPLETED"
}
export type UpdateCustomerRequest = {
  name?: string
  status?: "ACTIVE" | "ARCHIVED"
}
export type CustomerProjectResponse = {
  id?: number
  name?: string
  description?: string
  status?: "PLANNING" | "IN_PROGRESS" | "IN_REVIEW" | "ON_HOLD" | "COMPLETED"
  createdAt?: string
  updatedAt?: string
}
export type CsrfToken = {
  headerName?: string
  token?: string
  parameterName?: string
}
export type ProjectSummaryResponse = {
  id?: number
  name?: string
  status?: "PLANNING" | "IN_PROGRESS" | "IN_REVIEW" | "ON_HOLD" | "COMPLETED"
  customerId?: number
  customerName?: string
  updatedAt?: string
}
export const {
  useAuthLoginMutation,
  useAuthAcceptInviteMutation,
  useUserAdminReissueInviteMutation,
  useCustomerAdminListQuery,
  useCustomerAdminCreateMutation,
  useUserAdminListForCustomerQuery,
  useUserAdminCreateMutation,
  useProjectAdminListForCustomerQuery,
  useProjectAdminCreateMutation,
  useUserAdminUpdateMutation,
  useProjectAdminGetQuery,
  useProjectAdminUpdateMutation,
  useCustomerAdminGetQuery,
  useCustomerAdminUpdateMutation,
  useCustomerProjectListQuery,
  useCustomerProjectGetQuery,
  useAuthMeQuery,
  useAuthCsrfQuery,
  useProjectAdminListAllQuery,
} = injectedRtkApi
