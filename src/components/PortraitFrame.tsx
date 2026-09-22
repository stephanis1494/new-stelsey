import { cn } from "@/src/utils/cn"

type PortraitFrameProps = {
  /** "round" gives the oval/circle portrait look, "rect" gives soft corners */
  shape?: "round" | "rect"
  className?: string
  style?: React.CSSProperties
  innerClassName?: string
  children?: React.ReactNode
}

export const PortraitFrame = ({
  shape = "round",
  className,
  style,
  innerClassName,
  children,
}: PortraitFrameProps) => (
  <div
    className={cn(
      "shrink-0 border-[6px] border-accent p-1 shadow-[0_0_0_3px_var(--forest-deep),0_0_0_5px_var(--gold),0_24px_48px_-16px_rgba(0,0,0,0.8)]",
      shape === "round" ? "rounded-full" : "rounded-3xl",
      className,
    )}
    style={style}
  >
    <div
      className={cn(
        "overflow-hidden bg-black/25 shadow-[inset_0_2px_16px_rgba(0,0,0,0.6)]",
        shape === "round" ? "rounded-full" : "rounded-2xl",
        innerClassName,
      )}
    >
      {children}
    </div>
  </div>
)
