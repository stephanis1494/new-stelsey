"use client"
import { ChangeEvent, FC, ReactNode, useState } from "react"
import { cn } from "@/src/utils/cn"

type InputChangeEvent = ChangeEvent<HTMLInputElement>
type InputProps = { className?: string }

export const Input: FC<InputProps> = ({ className }): ReactNode => {
  const [value, setValue] = useState<string>("")

  const updateValue = (e: InputChangeEvent): void => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input
        className={cn(
          "text-forest h-10 min-w-80 rounded-sm bg-foreground px-2 text-lg text-forest-deep",
          className,
        )}
        value={value}
        onChange={updateValue}
      />
    </div>
  )
}
