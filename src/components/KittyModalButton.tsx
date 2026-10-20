"use client"
import { useState } from "react"
import ArrowUpRightFromSquareSvg from "@/src/svg/arrow-up-right-from-square.svg"
import { KittyModal } from "@/src/components/KittyModal"

export const KittyModalButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ArrowUpRightFromSquareSvg
        onClick={() => setOpen(true)}
        className="w-5 transition-colors duration-250 hover:text-accent"
      />
      {open && <KittyModal onClose={() => setOpen(false)} />}
    </>
  )
}
