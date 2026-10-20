"use client"
import { AccountMenu } from "@/src/components/AccountMenu"
import { SocialLinks } from "@/src/components/SocialLinks"
import { cn } from "@/src/utils/cn"

type RightSidebarProps = {
  className?: string
}

// Lives in a narrow fixed-width grid column so the main content stays truly centered.
// The account menu is wider than the column; `items-end` lets it overflow to the left,
// into the empty space above the content, instead of widening the column.
export const RightSidebar = ({ className }: RightSidebarProps) => (
  <div
    className={cn(
      "sticky top-6 h-[calc(100dvh-3rem)] flex-col items-end justify-between self-start",
      className,
    )}
  >
    <AccountMenu />
    <SocialLinks className="self-center" />
  </div>
)
