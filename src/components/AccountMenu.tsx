"use client"
import Link from "next/link"
import { useAuthMeQuery } from "@/src/store/api.generated"
import { useLogoutMutation } from "@/src/store/authApi"
import { cn } from "@/src/utils/cn"

type AccountMenuProps = {
  className?: string
}

export const AccountMenu = ({ className }: AccountMenuProps) => {
  const { data: me } = useAuthMeQuery()
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation()
  const onLogout = async () => {
    try {
      await logout().unwrap()
    } finally {
      // A full page load throws away the whole JS heap (RTK Query cache, Next's router
      // cache, component state), so nothing from this user survives. Don't call
      // resetApiState() first: on a protected page that triggers refetches whose 401s
      // race this navigation and redirect to /login instead.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/")
    }
  }

  if (!me) {
    return (
      <Link href="/login" className={cn("whitespace-nowrap", className)}>
        Login
      </Link>
    )
  }

  const homePath = me.role === "ADMIN" ? "/admin/projects" : "/portal/projects"

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-2 whitespace-nowrap",
        className,
      )}
    >
      <Link
        href={homePath}
        className="hidden max-w-40 truncate text-base text-accent sm:block"
      >
        {`Hello ${me.displayName ?? ""}`}
      </Link>
      <div className="hidden h-6 w-px bg-ink/50 sm:block" />
      <button
        type="button"
        onClick={onLogout}
        className={cn(!isLoggingOut && "cursor-pointer")}
        disabled={isLoggingOut}
      >
        <span className="text-lg">Logout</span>
      </button>
    </div>
  )
}
