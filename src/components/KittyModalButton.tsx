"use client"
import { useState } from "react"
import ArrowUpRightFromSquareSvg from "@/src/svg/arrow-up-right-from-square.svg"
import { ImageCarouselModal } from "@/src/components/ImageCarouselModal"
import { KITTY_IMAGES } from "@/src/utils/constants"

export const KittyModalButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ArrowUpRightFromSquareSvg
        onClick={() => setOpen(true)}
        className="w-5 cursor-pointer transition-colors duration-250 hover:text-accent"
      />
      {open && (
        <ImageCarouselModal
          images={KITTY_IMAGES}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
