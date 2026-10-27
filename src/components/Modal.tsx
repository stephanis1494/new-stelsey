"use client"

import { useRef, useEffect, FC, type ReactNode } from "react"

type ModalProps = {
  onClose: () => void
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (!innerRef?.current?.contains(target)) {
        onClose()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    // Stop the page behind the modal from scrolling
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    document.addEventListener("click", handleClick)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("click", handleClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-1 flex h-full w-full items-center justify-center bg-black/64">
      <div ref={innerRef} className="">
        {children}
      </div>
    </div>
  )
}
