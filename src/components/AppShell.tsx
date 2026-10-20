import type { ReactNode } from "react"
import { SidebarButton } from "@/src/components/SidebarButton"
import { AccountMenu } from "@/src/components/AccountMenu"
import { NavSidebar, type NavItem } from "@/src/components/NavSidebar"

type AppShellProps = {
  title: string
  navItems: NavItem[]
  children: ReactNode
}

// Shared frame for the customer portal and the admin panel:
// header (home button + title, account menu) above [section nav | content].
export const AppShell = ({ title, navItems, children }: AppShellProps) => (
  <div className="flex min-h-dvh flex-col gap-6 p-4 md:gap-10 md:p-6">
    <header className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-4">
        <SidebarButton label="H" href="/" active={false} />
        <span className="truncate text-xl font-bold md:text-2xl">{title}</span>
      </div>
      <AccountMenu />
    </header>

    <div className="flex flex-1 flex-col gap-6 md:flex-row md:gap-8">
      <NavSidebar items={navItems} />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  </div>
)
