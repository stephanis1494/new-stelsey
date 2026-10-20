import { redirect } from "next/navigation"
import { AppShell } from "@/src/components/AppShell"
import type { NavItem } from "@/src/components/NavSidebar"
import { getCurrentUser, homePathFor } from "@/src/server/getCurrentUser"

const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/portal/projects" },
  { label: "Settings", href: "/portal/settings" },
]

// Server-side gate: runs before any HTML is sent, so logged-out users and admins never
// see a flash of the customer portal. The API still enforces access on every request.
export default async function PortalLayout({
  children,
}: LayoutProps<"/portal">) {
  const me = await getCurrentUser()
  if (!me) redirect("/login")
  if (me.role !== "CUSTOMER") redirect(homePathFor(me))

  return (
    <AppShell title="Customer Portal" navItems={NAV_ITEMS}>
      {children}
    </AppShell>
  )
}
