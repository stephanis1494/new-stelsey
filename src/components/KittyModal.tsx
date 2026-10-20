"use client"

import { useRef, useEffect, FC } from "react"

const EXAMPLE =
  "https://www.cats.org.uk/media/13136/220325case013.jpg?width=500&height=333.49609375"

type KittyModalProps = {
  onClose: () => void
}

export const KittyModal: FC<KittyModalProps> = ({ onClose }) => {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e) => {
      console.log("chelsey: ", innerRef?.current?.contains(e.target))
      if (!innerRef?.current?.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 z-1 flex h-full w-full items-center justify-center bg-black/64">
      <div ref={innerRef} className="flex flex-col gap-2">
        <img src={EXAMPLE} className="h-200 rounded-lg" />
        <div className="items center flex flex-row gap-2">
          <img src={EXAMPLE} className="h-40 rounded-lg" />
          <img src={EXAMPLE} className="h-40 rounded-lg" />
          <img src={EXAMPLE} className="h-40 rounded-lg" />
          <img src={EXAMPLE} className="h-40 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
