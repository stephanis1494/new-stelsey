import { between, mulberry32 } from "@/src/utils/random"

const COLUMNS = 6
const ROWS = 5
const MIN_SIZE = 14
const MAX_SIZE = 110

type OutlineShape = "heart"

const SHAPES: Record<
  OutlineShape,
  { path: string; colors: string[]; maxRotate: number; seed: number }
> = {
  heart: {
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    colors: ["var(--ink)", "var(--gold)", "#e7a3a8"],
    maxRotate: 25,
    seed: 14,
  },
}

// One shape per cell of a loose grid, jittered within its cell, so they cover
// the whole screen without clumping. Seeded so server and client agree.
const scatter = ({
  colors,
  maxRotate,
  seed,
}: (typeof SHAPES)[OutlineShape]) => {
  const random = mulberry32(seed)
  return Array.from({ length: COLUMNS * ROWS }, (_, index) => {
    // Skew towards small shapes so the big ones stay occasional
    const depth = random() ** 2
    return {
      left: ((index % COLUMNS) + between(random, 0.1, 0.9)) * (100 / COLUMNS),
      top:
        (Math.floor(index / COLUMNS) + between(random, 0.1, 0.9)) *
        (100 / ROWS),
      size: MIN_SIZE + depth * (MAX_SIZE - MIN_SIZE),
      rotate: between(random, -maxRotate, maxRotate),
      color: colors[Math.floor(random() * colors.length)],
      // Bigger shapes read as further back: softer and fainter
      blur: depth * 1.5,
      opacity: between(random, 0.25, 0.45) - depth * 0.1,
    }
  })
}

const PLACEMENTS = {
  heart: scatter(SHAPES.heart),
}

/** Faint outlined shapes scattered behind the page content */
export const OutlineBackground = ({ shape }: { shape: OutlineShape }) => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    {PLACEMENTS[shape].map(
      ({ left, top, size, rotate, color, blur, opacity }, index) => (
        <svg
          key={`${shape}-${index}`}
          viewBox="0 0 24 24"
          className="absolute mix-blend-soft-light"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            filter: `blur(${blur}px)`,
            opacity,
            fill: "none",
            stroke: color,
          }}
        >
          <path
            d={SHAPES[shape].path}
            strokeWidth={1.5}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      ),
    )}
  </div>
)
