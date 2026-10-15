"use client"
import Link from "next/link"
import DocumentSvg from "@/src/svg/document.svg"
import LinkedInSvg from "@/src/svg/linkedin.svg"
import EnvelopeSvg from "@/src/svg/envelope.svg"
import GithubSvg from "@/src/svg/github.svg"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { api, useAuthMeQuery } from "@/src/store/api.generated"
import { useLogoutMutation } from "@/src/store/authApi"
import { useAppDispatch } from "@/src/store/hooks"
import { cn } from "@/src/utils/cn"

type SocialLink = {
  icon: ReactNode
  href: string
}

const STEPHEN_CONFIG: SocialLink[] = [
  {
    icon: <DocumentSvg />,
    href: "https://resume.com",
  },
  {
    icon: <LinkedInSvg />,
    href: "https://www.linkedin.com/in/stelseylesser/",
  },
  {
    icon: <EnvelopeSvg />,
    href: "mailto:",
  },
  {
    icon: <GithubSvg />,
    href: "https://github.com/stephanis1494",
  },
]

export const RightSidebar = () => {
  const { data: me } = useAuthMeQuery()
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation()
  const dispatch = useAppDispatch()

  const displayName: string = me?.displayName || ""
  const pathname: string = usePathname()
  const config: SocialLink[] | null =
    pathname === "/stephen" ? STEPHEN_CONFIG : null

  const onLogout = async () => {
    try {
      await logout().unwrap()
    } finally {
      dispatch(api.util.resetApiState())
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/")
    }
  }

  const footerElement: ReactNode[] | null = Array.isArray(config)
    ? config.map(({ icon, href }, index) => (
        <Link
          key={`footer-link-${index}`}
          href={href}
          className="opacity-60 transition-[color,opacity] duration-250 hover:text-accent hover:opacity-100"
        >
          {icon}
        </Link>
      ))
    : null

  return (
    <div className="sticky top-6 flex h-[calc(100dvh-3rem)] flex-col justify-between self-start">
      {displayName ? (
        <div className="flex flex-row items-center gap-2">
          <Link href="/portal/projects">
            <span className="text-base text-accent">{`Hello ${displayName}`}</span>
          </Link>
          <div className="h-6 w-px bg-ink/50" />
          <button
            onClick={onLogout}
            className={cn(!isLoggingOut && "cursor-pointer")}
            disabled={isLoggingOut}
          >
            <span className="text-xl">Logout</span>
          </button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
      {footerElement ? (
        <div className="flex flex-col items-center gap-4">
          <div className="h-30 w-0.75 bg-ink/40" />
          {footerElement}
          <div className="h-30 w-0.75 bg-ink/40" />
        </div>
      ) : null}
    </div>
  )
}
