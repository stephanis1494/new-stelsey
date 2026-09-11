"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/src/utils/cn"

const SIDEBAR_CONFIG = [
  {
    label: "H",
    href: "/",
  },
  {
    label: "C",
    href: "/chelsey",
  },
  {
    label: "S",
    href: "/stephen",
  },
]

export const LeftSidebar = () => {
  const pathname = usePathname()
  return (
    <div className="fixed top-6 flex flex-col items-center gap-2">
      {SIDEBAR_CONFIG.map(({ label, href }, index) => (
        <SidebarButton
          key={`sidebar-button-${index}`}
          label={label}
          href={href}
          active={pathname === href}
        />
      ))}
    </div>
  )
}

type SidebarProps = {
  label: string
  href: string
  active: boolean
}
const SidebarButton = ({ label, href, active }: SidebarProps) => (
  <Link href={href}>
    <div
      className={cn(
        "group flex h-12 w-12 items-center justify-center rounded-lg border-3 transition-colors duration-250",
        active ? "border-black" : "border-black/16 hover:border-black/32",
      )}
    >
      <span
        className={cn(
          "text-xl font-bold transition-colors duration-250",
          active ? "text-black" : "text-black/16 group-hover:text-black/32",
        )}
      >
        {label}
      </span>
    </div>
  </Link>
)
