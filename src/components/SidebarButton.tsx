import Link from "next/link"
import { cn } from "@/src/utils/cn"

type SidebarProps = {
  label: string
  href: string
  active: boolean
}

export const SidebarButton = ({ label, href, active }: SidebarProps) => (
  <Link href={href}>
    <div
      className={cn(
        "group flex h-12 w-12 items-center justify-center rounded-lg border-3 transition-colors duration-250",
        active ? "border-accent" : "border-ink/16 hover:border-ink/40",
      )}
    >
      <span
        className={cn(
          "text-xl font-bold transition-colors duration-250",
          active ? "text-accent" : "text-ink/24 group-hover:text-ink/50",
        )}
      >
        {label}
      </span>
    </div>
  </Link>
)
