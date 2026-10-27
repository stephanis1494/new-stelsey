"use client"

import { FC, useEffect, useRef, useState } from "react"
import { Modal } from "@/src/components/Modal"
import { cn } from "@/src/utils/cn"
import ChevronLeftSvg from "@/src/svg/chevron-left.svg"
import XmarkSvg from "@/src/svg/xmark.svg"

// Shameless Claude usage to finish this carousel :P
const THUMB_WIDTH = 112
const THUMB_GAP = 8
const THUMB_STEP = THUMB_WIDTH + THUMB_GAP
const THUMB_RADIUS = 12
const THUMB_OFFSETS = Array.from(
  { length: THUMB_RADIUS * 2 + 1 },
  (_, i) => i - THUMB_RADIUS,
)
const SWIPE_THRESHOLD = 50
const mod = (n: number, m: number) => ((n % m) + m) % m

type ImageCarouselModalProps = {
  images: string[]
  startingIndex?: number
  onClose: () => void
}

export const ImageCarouselModal: FC<ImageCarouselModalProps> = ({
  images,
  startingIndex,
  onClose,
}) => {
  const [position, setPosition] = useState<number>(startingIndex ?? 0)
  const swipeStartX = useRef<number | null>(null)

  const imageCount = images.length
  const currentIndex = mod(position, imageCount)
  const hasMultiple = imageCount > 1

  const step = (delta: number) => setPosition((p) => p + delta)

  useEffect(() => {
    if (!hasMultiple) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setPosition((p) => p - 1)
      if (e.key === "ArrowRight") setPosition((p) => p + 1)
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [hasMultiple])

  if (!imageCount) return null

  return (
    <Modal onClose={onClose}>
      <button
        aria-label="Close"
        onClick={onClose}
        className="fixed top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/40 text-ink transition-colors duration-150 hover:text-accent"
      >
        <XmarkSvg className="w-4" />
      </button>
      <div className="relative flex flex-col items-center gap-4">
        <ArrowButton
          direction="left"
          onClick={() => step(-1)}
          className="absolute -left-16"
        />
        <ArrowButton
          direction="right"
          onClick={() => step(1)}
          className="absolute -right-16"
        />

        <div className="flex h-[70vh] w-[min(90vw,72rem)] items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1} of ${imageCount}`}
            draggable={false}
            className="h-full w-auto max-w-full touch-pan-y rounded-lg border border-white/8 object-contain select-none"
            onPointerDown={(e) => {
              swipeStartX.current = e.clientX
            }}
            onPointerUp={(e) => {
              if (swipeStartX.current === null) return
              const dx = e.clientX - swipeStartX.current
              swipeStartX.current = null
              if (hasMultiple && Math.abs(dx) > SWIPE_THRESHOLD) {
                step(dx < 0 ? 1 : -1)
              }
            }}
          />
        </div>
        {hasMultiple && (
          <>
            <p className="text-sm text-ink/80 tabular-nums">
              {currentIndex + 1} / {imageCount}
            </p>
            <div className="relative h-21 w-[min(90vw,72rem)] overflow-hidden mask-x-from-85%">
              <div
                className="absolute top-0 left-1/2 h-full transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${-position * THUMB_STEP - THUMB_WIDTH / 2}px)`,
                }}
              >
                {THUMB_OFFSETS.map((offset) => {
                  const virtualPosition = position + offset
                  const index = mod(virtualPosition, imageCount)
                  const isCurrent = offset === 0
                  return (
                    <button
                      key={virtualPosition}
                      tabIndex={-1}
                      aria-label={`Show image ${index + 1}`}
                      aria-current={isCurrent}
                      onClick={() => setPosition(virtualPosition)}
                      className={cn(
                        "absolute top-0 h-full cursor-pointer overflow-hidden rounded-lg border-2 transition-[opacity,border-color] duration-300",
                        isCurrent
                          ? "border-accent opacity-100"
                          : "border-white/8 opacity-50 hover:opacity-80",
                      )}
                      style={{
                        left: virtualPosition * THUMB_STEP,
                        width: THUMB_WIDTH,
                      }}
                    >
                      <img
                        src={images[index]}
                        alt=""
                        draggable={false}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}

type ArrowButtonProps = {
  direction: "left" | "right"
  onClick: () => void
  className?: string
}

const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  onClick,
  className,
}) => (
  <button
    aria-label={direction === "left" ? "Previous image" : "Next image"}
    onClick={onClick}
    className={cn(
      "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white/64 bg-black/40 text-ink transition-colors duration-150 hover:border-accent hover:text-accent",
      direction === "left" ? "left-3" : "right-3",
      className,
    )}
  >
    <ChevronLeftSvg
      className={cn("w-5", direction === "right" && "rotate-180")}
    />
  </button>
)
