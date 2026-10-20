"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import DocumentSvg from "@/src/svg/document.svg"
import LinkedInSvg from "@/src/svg/linkedin.svg"
import EnvelopeSvg from "@/src/svg/envelope.svg"
import GithubSvg from "@/src/svg/github.svg"
import { cn } from "@/src/utils/cn"

type SocialLink = {
  icon: ReactNode
  href: string
  label: string
}

const STEPHEN_LINKS: SocialLink[] = [
  { icon: <DocumentSvg />, href: "https://resume.com", label: "Resume" },
  {
    icon: <LinkedInSvg />,
    href: "https://www.linkedin.com/in/stelseylesser/",
    label: "LinkedIn",
  },
  { icon: <EnvelopeSvg />, href: "mailto:", label: "Email" },
  {
    icon: <GithubSvg />,
    href: "https://github.com/stephanis1494",
    label: "GitHub",
  },
]

const LINKS_BY_PATH: Record<string, SocialLink[]> = {
  "/stephen": STEPHEN_LINKS,
}

type SocialLinksProps = {
  orientation?: "vertical" | "horizontal"
  className?: string
}

export const SocialLinks = ({
  orientation = "vertical",
  className,
}: SocialLinksProps) => {
  const pathname = usePathname()
  const links = LINKS_BY_PATH[pathname]
  if (!links) return null

  const vertical = orientation === "vertical"
  const rule = vertical ? "h-30 w-0.75" : "h-0.75 w-12"

  return (
    <div
      className={cn(
        "flex items-center gap-4",
        vertical ? "flex-col" : "flex-row justify-center",
        className,
      )}
    >
      <div className={cn(rule, "bg-ink/40")} />
      {links.map(({ icon, href, label }) => (
        <Link
          key={href}
          href={href}
          aria-label={label}
          className="opacity-60 transition-[color,opacity] duration-250 hover:text-accent hover:opacity-100"
        >
          {icon}
        </Link>
      ))}
      <div className={cn(rule, "bg-ink/40")} />
    </div>
  )
}
