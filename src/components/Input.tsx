"use client"
import {
  ChangeEvent,
  FC,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react"
import { cn } from "@/src/utils/cn"

type InputProps = {
  className?: string
  value?: string
  setValue: (value: string) => void
  type?: HTMLInputTypeAttribute
  autoComplete?: HTMLInputAutoCompleteAttribute
}

export const Input: FC<InputProps> = ({
  className,
  value,
  setValue,
  type,
  autoComplete,
}): ReactNode => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input
        className={cn(
          "h-10 min-w-80 rounded-sm bg-foreground px-2 text-lg text-forest text-forest-deep",
          className,
        )}
        value={value}
        onChange={onChange}
        type={type || "text"}
        autoComplete={autoComplete || "text"}
      />
    </div>
  )
}
