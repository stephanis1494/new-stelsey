import { between, mulberry32 } from "@/src/utils/random"

export type FrameShape = "oval" | "circle" | "square" | "portrait" | "landscape"

export type FramePlacement = {
  shape: FrameShape
  /** All values are % of the grid cell */
  left: number
  top: number
  width: number
  height: number
  /** Tilt in degrees */
  rotate: number
}

/** Height ÷ width of each frame shape. Oval matches the portrait pages. */
export const FRAME_RATIO: Record<FrameShape, number> = {
  oval: 521 / 338,
  circle: 1,
  square: 1,
  portrait: 4 / 3,
  landscape: 3 / 4,
}

const SHAPES = Object.keys(FRAME_RATIO) as FrameShape[]

// Largest a frame may be along either axis, as a % of its cell. The leftover
// room is what lets it drift around without ever leaving the cell.
const MAX_SIZE = 95
const MIN_SIZE_SCALE = 0.8
const MAX_ROTATE = 5

const toRadians = (degrees: number) => (degrees * Math.PI) / 180

/**
 * How far past its own edges a `width` x `height` box reaches on each side
 * once rotated by `degrees`. Both inputs and outputs share one unit.
 */
const rotationSpill = (width: number, height: number, degrees: number) => {
  const sin = Math.abs(Math.sin(toRadians(degrees)))
  const cos = Math.cos(toRadians(degrees))
  return {
    x: (width * cos + height * sin - width) / 2,
    y: (width * sin + height * cos - height) / 2,
  }
}

/**
 * Produces a placement for each of `count` frames. The caller lays cells out
 * in a grid; each frame is given a random shape and size and then positioned
 * somewhere inside its own cell, so frames never overlap one another.
 *
 * `cellRatio` is the cell's height ÷ width and must match the cell's CSS
 * aspect ratio for the height % to be correct.
 */
export const spreadFrames = (
  count: number,
  cellRatio: number,
  seed = 1,
): FramePlacement[] => {
  const random = mulberry32(seed)

  return Array.from({ length: count }, () => {
    const shape = SHAPES[Math.floor(random() * SHAPES.length)]
    // How much taller (or shorter) the frame is than the cell, per unit width
    const relativeRatio = FRAME_RATIO[shape] / cellRatio

    // Widest the frame can be while both its width and height fit in the cell
    const maxWidth = Math.min(MAX_SIZE, MAX_SIZE / relativeRatio)
    const width = between(random, maxWidth * MIN_SIZE_SCALE, maxWidth)
    const height = width * relativeRatio

    // Work out how far the tilted corners poke past the frame's box, so the
    // frame can be kept inside its cell even when rotated. The cell isn't
    // square, so height is converted into width units for the maths and the
    // vertical spill converted back afterwards.
    let rotate = between(random, -MAX_ROTATE, MAX_ROTATE)
    const slackX = 100 - width
    const slackY = 100 - height
    let spill = rotationSpill(width, height * cellRatio, rotate)
    spill.y /= cellRatio

    // A near-full-size frame may not have room to tilt at all; ease the
    // rotation off until its corners fit. Spill is ~linear in small angles.
    const fit = Math.min(1, slackX / (2 * spill.x), slackY / (2 * spill.y))
    if (fit < 1) {
      rotate *= fit
      spill = rotationSpill(width, height * cellRatio, rotate)
      spill.y /= cellRatio
    }

    return {
      shape,
      width,
      height,
      left: between(random, spill.x, slackX - spill.x),
      top: between(random, spill.y, slackY - spill.y),
      rotate,
    }
  })
}
