"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/src/utils/cn"

export type NavItem = {
  label: string
  href: string
}

type NavSidebarProps = {
  items: NavItem[]
  className?: string
}

export const NavSidebar = ({ items, className }: NavSidebarProps) => {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Section"
      className={cn(
        "flex flex-row gap-2 overflow-x-auto md:sticky md:top-6 md:flex-col md:self-start",
        className,
      )}
    >
      {items.map(({ label, href }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`)
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex h-12 w-36 shrink-0 items-center justify-center rounded-lg border border-white/16 transition-colors duration-150 hover:bg-white/5",
              active && "bg-white/8",
            )}
          >
            <span className="text-lg font-medium">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
