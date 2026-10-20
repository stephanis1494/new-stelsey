import { LeftSidebar } from "@/src/components/LeftSidebar"
import { RightSidebar } from "@/src/components/RightSidebar"
import { AccountMenu } from "@/src/components/AccountMenu"
import { SocialLinks } from "@/src/components/SocialLinks"

// Desktop: [nav | content | account + socials]. The side columns have equal fixed widths,
// so the content column is always centered on the page, whatever the sidebars contain.
// Mobile: a top bar with the same nav + account menu, and socials at the bottom.
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-dvh flex-col md:grid md:grid-cols-[3rem_minmax(0,1fr)_3rem] md:gap-6 md:p-6">
      <header className="flex items-center justify-between gap-4 p-4 md:hidden">
        <LeftSidebar orientation="horizontal" className="flex" />
        <AccountMenu />
      </header>

      <LeftSidebar className="hidden md:flex" />

      <main className="flex min-w-0 grow flex-col items-center justify-center px-4 md:px-6">
        {children}
      </main>

      <RightSidebar className="hidden md:flex" />

      <SocialLinks orientation="horizontal" className="py-8 md:hidden" />
    </div>
  )
}
