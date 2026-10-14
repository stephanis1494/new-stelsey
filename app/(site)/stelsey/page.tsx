import { PortraitFrame } from "@/src/components/PortraitFrame"
import { spreadFrames, type FrameShape } from "@/src/utils/spreadFrames"

const FRAME_COUNT = 30
// Must match the cell's aspect-ratio class below
const CELL_RATIO = 5 / 4

const ROUND_SHAPES: FrameShape[] = ["oval", "circle"]

// TODO: fill with photos of us and the cats
const FRAMES = spreadFrames(FRAME_COUNT, CELL_RATIO)

export default function Stelsey() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <main className="flex w-full max-w-300 flex-col gap-12 pt-40 pb-20">
        <h1 className="text-center font-header text-6xl">Stelsey</h1>
        <p className="text-center text-lg">
          Write some super insanely cute shit here, like really lay it on you
          know what I mean?
        </p>
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {FRAMES.map(({ shape, left, top, width, height, rotate }, index) => (
            <div key={`frame-${index}`} className="relative aspect-[4/5]">
              <PortraitFrame
                shape={ROUND_SHAPES.includes(shape) ? "round" : "rect"}
                className="absolute"
                innerClassName="h-full w-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                  transform: `rotate(${rotate}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
