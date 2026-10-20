"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/src/utils/cn"
import { SidebarButton } from "@/src/components/SidebarButton"

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
  {
    label: "Y",
    href: "/stelsey",
  },
]

type LeftSidebarProps = {
  orientation?: "vertical" | "horizontal"
  className?: string
}

export const LeftSidebar = ({
  orientation = "vertical",
  className,
}: LeftSidebarProps) => {
  const pathname = usePathname()
  return (
    <nav
      aria-label="Site"
      className={cn(
        "items-center gap-2",
        orientation === "vertical"
          ? "sticky top-6 flex-col self-start"
          : "flex-row",
        className,
      )}
    >
      {SIDEBAR_CONFIG.map(({ label, href }) => (
        <SidebarButton
          key={href}
          label={label}
          href={href}
          active={pathname === href}
        />
      ))}
    </nav>
  )
}
