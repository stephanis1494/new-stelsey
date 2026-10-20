import { redirect } from "next/navigation"
import { AppShell } from "@/src/components/AppShell"
import type { NavItem } from "@/src/components/NavSidebar"
import { getCurrentUser, homePathFor } from "@/src/server/getCurrentUser"

const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/admin/projects" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Settings", href: "/admin/settings" },
]

// Server-side gate: runs before any HTML is sent. The API still enforces ADMIN on
// every /api/admin request, so this is about routing users to the right place.
export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  const me = await getCurrentUser()
  if (!me) redirect("/login")
  if (me.role !== "ADMIN") redirect(homePathFor(me))

  return (
    <AppShell title="Admin Panel" navItems={NAV_ITEMS}>
      {children}
    </AppShell>
  )
}
