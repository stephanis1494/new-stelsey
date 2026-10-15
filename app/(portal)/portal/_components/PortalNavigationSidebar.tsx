"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/src/utils/cn"

export const PortalNavigationSidebar = () => {
  const pathname = usePathname()
  const subRoute = pathname.split("/")[2]

  const isProjectRoute = subRoute === "projects"
  const isSettingsRoute = subRoute === "settings"

  return (
    <div className="flex flex-col gap-2 ps-12">
      <span className="mb-10 text-2xl font-bold">Customer Portal</span>
      <Link href="/portal/projects">
        <div
          className={cn(
            "flex h-12 w-36 items-center justify-center rounded-lg border border-white/16",
            isProjectRoute && "bg-white/8",
          )}
        >
          <span className="text-lg font-medium">Projects</span>
        </div>
      </Link>
      <Link href="/portal/settings">
        <div
          className={cn(
            "flex h-12 w-36 items-center justify-center rounded-lg border border-white/16",
            isSettingsRoute && "bg-white/8",
          )}
        >
          <span className="text-lg font-medium">Settings</span>
        </div>
      </Link>
    </div>
  )
}
