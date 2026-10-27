"use client"
import Image from "next/image"
import { PortraitFrame } from "@/src/components/PortraitFrame"
import { STELSEY_IMAGES } from "@/src/utils/constants"
import { spreadFrames, type FrameShape } from "@/src/utils/spreadFrames"
import { useState } from "react"
import { ImageCarouselModal } from "@/src/components/ImageCarouselModal"

const FRAME_COUNT = STELSEY_IMAGES.length
// Must match the cell's aspect-ratio class below
const CELL_RATIO = 5 / 4

const ROUND_SHAPES: FrameShape[] = ["oval", "circle"]

const FRAMES = spreadFrames(FRAME_COUNT, CELL_RATIO)

// "stelsey-nyc-christmas-dip.jpg" -> "Stelsey nyc christmas dip"
const altFromUrl = (url: string) => {
  const words = (url.split("/").pop() ?? "")
    .replace(/\.[^.]+$/, "")
    .replace(/-/g, " ")
  return words.charAt(0).toUpperCase() + words.slice(1)
}

export const StelseyFrames = () => {
  const [imageModalEntryIndex, setImageModalEntryIndex] = useState<
    number | null
  >(null)

  return (
    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {FRAMES.map(({ shape, left, top, width, height, rotate }, index) => {
        const src = STELSEY_IMAGES[index]
        return (
          <div key={`frame-${index}`} className="relative aspect-[4/5]">
            <PortraitFrame
              shape={ROUND_SHAPES.includes(shape) ? "round" : "rect"}
              className="absolute"
              innerClassName="relative h-full w-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}%`,
                height: `${height}%`,
                transform: `rotate(${rotate}deg)`,
              }}
            >
              {src ? (
                <Image
                  src={src}
                  alt={altFromUrl(src)}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  onClick={() => setImageModalEntryIndex(index)}
                />
              ) : null}
            </PortraitFrame>
          </div>
        )
      })}
      {imageModalEntryIndex !== null && (
        <ImageCarouselModal
          images={STELSEY_IMAGES}
          startingIndex={imageModalEntryIndex}
          onClose={() => setImageModalEntryIndex(null)}
        />
      )}
    </div>
  )
}
