"use client"
import Link from "next/link"
import DocumentSvg from "@/src/svg/document.svg"
import LinkedInSvg from "@/src/svg/linkedin.svg"
import EnvelopeSvg from "@/src/svg/envelope.svg"
import GithubSvg from "@/src/svg/github.svg"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

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
  const pathname: string = usePathname()
  const config: SocialLink[] | null =
    pathname === "/stephen" ? STEPHEN_CONFIG : null

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
      <Link href="/login">
        <span className="cursor-pointer text-lg">Login</span>
      </Link>
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
