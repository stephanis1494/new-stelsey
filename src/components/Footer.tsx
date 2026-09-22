"use client"
import Link from "next/link"
import DocumentSvg from "../svg/document.svg"
import LinkedInSvg from "../svg/linkedin.svg"
import EnvelopeSvg from "../svg/envelope.svg"
import GithubSvg from "../svg/github.svg"
import { usePathname } from "next/navigation"

const STEPHEN_CONFIG = [
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

export const Footer = () => {
  const pathname = usePathname()
  const config = pathname === "/stephen" ? STEPHEN_CONFIG : null

  if (!config) return null

  return (
    <div className="fixed right-6 bottom-6 flex flex-col items-center gap-4">
      <div className="h-30 w-0.75 bg-ink/40" />
      {config.map(({ icon, href }, index) => (
        <Link
          key={`footer-link-${index}`}
          href={href}
          className="opacity-60 transition-[color,opacity] duration-250 hover:text-accent hover:opacity-100"
        >
          {icon}
        </Link>
      ))}
      <div className="h-30 w-0.75 bg-ink/40" />
    </div>
  )
}
