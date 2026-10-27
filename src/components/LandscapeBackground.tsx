import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/src/utils/cn"
import { between, mulberry32 } from "@/src/utils/random"

const INK = "var(--ink)"
const GOLD = "var(--gold)"
const SAGE = "#9cc5a1"

// Scales with the smaller viewport side, so the trees shrink on phones
// instead of crowding the content
const unit = (n: number) => `calc(${n} * min(1vh, 1vw))`
const round = (n: number) => Math.round(n * 100) / 100

// Glyphs on a 24 x 24 grid
const MOON = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
const SUN =
  "M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10zM12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
const STAR = "M12 4l1.2 6.8L20 12l-6.8 1.2L12 20l-1.2-6.8L4 12l6.8-1.2z"
const SNOWFLAKE = "M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"
const RAINDROP = "M15 4l-6 16"
const BIRD = "M2 13q5-6 10 0q5-6 10 0"
// A long gust ending in a curl, on a 48 x 24 grid
const GUST = "M2 10h28a5 5 0 1 0-5-5M8 17h22a4 4 0 1 1-4 4"

// Far mountain range on a 1000 x 300 grid, stretched to the screen width.
// The tall peak on the left carries the winter snowline.
const RIDGE =
  "M0 190L60 170L110 120L150 70L175 52L195 60L230 95L280 130L330 150L400 175L470 185L540 180L620 170L700 150L760 135L810 150L860 128L910 140L960 160L1000 150"
const SNOWLINE = "M134 90L148 98L160 88L174 100L188 89L202 99L214 90L225 90"

const random = mulberry32(22)

/**
 * A tall, narrow fir on a 20 x 60 grid: ragged drooping tiers that widen
 * towards the base, and a stub of trunk. Each side is jittered separately so
 * no two trees are symmetrical.
 */
const firPath = () => {
  const tiers = Math.round(between(random, 7, 10))
  const base = 52
  const step = base / tiers
  const side = (direction: number) =>
    Array.from({ length: tiers }, (_, index) => {
      const y = step * (index + 1)
      const width =
        9 * ((index + 1) / tiers) ** 0.85 * between(random, 0.8, 1.1)
      // Notch near the trunk, then the branch tip lower down and further out
      return [
        [10 + direction * width * 0.35, y - step * 0.55],
        [10 + direction * width, y],
      ]
    }).flat()
  const points = [
    [10, 0],
    ...side(1),
    [10.8, base],
    [10.8, 58],
    [9.2, 58],
    [9.2, base],
    ...side(-1).reverse(),
  ]
  return `M${points.map(([x, y]) => `${round(x)} ${round(y)}`).join("L")}z`
}

/** An arching sword fern frond on a 40 x 40 grid */
const fernPath = () => {
  const p0 = [4, 40]
  const p1 = [between(random, 6, 12), 10]
  const p2 = [between(random, 30, 36), between(random, 3, 8)]
  let d = `M${p0.join(" ")}Q${p1.map(round).join(" ")} ${p2.map(round).join(" ")}`
  const leaflets = 11
  for (let index = 1; index <= leaflets; index++) {
    const t = index / (leaflets + 1)
    // Point and direction along the quadratic curve
    const x = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0]
    const y = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1]
    let tx = 2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0])
    let ty = 2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1])
    const length = Math.hypot(tx, ty)
    tx /= length
    ty /= length
    const leaflet = 8 * (1 - t) + 1.5
    // Leaflets on both sides, swept forward towards the tip
    for (const [nx, ny] of [
      [-ty, tx],
      [ty, -tx],
    ]) {
      const dx = nx + tx * 0.7
      const dy = ny + ty * 0.7
      const scale = leaflet / Math.hypot(dx, dy)
      d += `M${round(x)} ${round(y)}l${round(dx * scale)} ${round(dy * scale)}`
    }
  }
  return d
}

type Fir = {
  offset: number
  height: number
  color: string
  opacity: number
  path: string
}

/**
 * Firs packed in from one edge, tallest at the corner and shrinking inward so
 * the middle of the page stays clear. `offset` is the trunk's distance from
 * the edge, in the same units as `height`.
 */
const firCluster = (): Fir[] => {
  const firs: Fir[] = []
  let offset = between(random, 0, 3)
  while (offset < 40) {
    const height = 30 - offset * 0.45 + between(random, -4, 4)
    firs.push({
      offset,
      height,
      color: random() < 0.6 ? SAGE : INK,
      opacity: between(random, 0.18, 0.3),
      path: firPath(),
    })
    // Neighbours overlap only at their lower branches
    offset += (height / 3) * between(random, 0.85, 1.2)
  }
  return firs
}

const LEFT_FIRS = firCluster()
const RIGHT_FIRS = firCluster()

// A few small firs across the middle so the treeline reads as continuous
const MIDDLE_FIRS = Array.from({ length: 5 }, (_, index) => ({
  left: 32 + index * 9 + between(random, -2, 2),
  height: between(random, 6, 9),
  color: random() < 0.6 ? SAGE : INK,
  opacity: between(random, 0.15, 0.25),
  path: firPath(),
}))

const scatter = (
  count: number,
  [minSize, maxSize]: [number, number],
  colors: string[],
  [minOpacity, maxOpacity]: [number, number],
) =>
  Array.from({ length: count }, () => ({
    left: between(random, 4, 92),
    top: between(random, 4, 76),
    size: between(random, minSize, maxSize),
    color: colors[Math.floor(random() * colors.length)],
    opacity: between(random, minOpacity, maxOpacity),
    // Negative delays start each one mid-drift, so they don't move in step
    duration: between(random, 9, 16),
    delay: -between(random, 0, 16),
  }))

const STARS = scatter(12, [5, 11], [INK, GOLD], [0.25, 0.45])
const SNOWFLAKES = scatter(16, [8, 13], [INK], [0.3, 0.45])
const RAINDROPS = scatter(22, [14, 20], [INK], [0.25, 0.4])

const FERNS = Array.from({ length: 3 }, (_, index) => ({
  right: 3 + index * 6 + between(random, -1, 1),
  size: between(random, 44, 64),
  flip: random() < 0.5,
  path: fernPath(),
}))

// A loose flock drifting past the sun, smallest (furthest) at the back
const BIRDS = Array.from({ length: 5 }, (_, index) => ({
  right: 10 + index * 6 + between(random, -2, 2),
  top: 48 + between(random, -8, 10),
  size: 30 - index * 3 + between(random, -2, 2),
  duration: between(random, 9, 16),
  delay: -between(random, 0, 16),
}))

const GUSTS = [
  { right: 4, top: 74, width: 76 },
  { right: 40, top: 10, width: 60 },
]

type GlyphProps = {
  d: string
  viewBox?: string
  className?: string
  style: CSSProperties
}

const Glyph = ({ d, viewBox = "0 0 24 24", className, style }: GlyphProps) => (
  <svg viewBox={viewBox} className={cn("absolute", className)} style={style}>
    <path
      d={d}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const CORNER_CLASSES = {
  "top left": "top-0 left-0",
  "top right": "top-0 right-0",
  "bottom left": "bottom-0 left-0",
  "bottom right": "bottom-0 right-0",
}

type CornerProps = {
  position: keyof typeof CORNER_CLASSES
  className?: string
  children: ReactNode
}

/** A quarter of the screen whose contents fade out towards the middle */
const Corner = ({ position, className, children }: CornerProps) => {
  const mask = `radial-gradient(circle at ${position}, black 25%, transparent 75%)`
  return (
    <div
      className={cn(
        "absolute h-1/2 w-1/2 mix-blend-soft-light",
        CORNER_CLASSES[position],
        className,
      )}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {children}
    </div>
  )
}

/**
 * A faint Pacific Northwest treeline behind the page, with each corner
 * hinting at a different time of day or season: night, summer, winter, spring.
 */
export const LandscapeBackground = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    style={{ fill: "none", stroke: INK }}
  >
    {/* Night: the sky corners are hidden on phones to keep them uncluttered */}
    <Corner position="top left" className="hidden md:block">
      <Glyph
        d={MOON}
        style={{
          left: "20%",
          top: "26%",
          width: 48,
          height: 48,
          opacity: 0.35,
          transform: "rotate(-15deg)",
        }}
      />
      {STARS.map(({ left, top, size, color, opacity }, index) => (
        <Glyph
          key={`star-${index}`}
          d={STAR}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            stroke: color,
            opacity,
          }}
        />
      ))}
    </Corner>

    {/* Summer */}
    <Corner position="top right" className="hidden md:block">
      <Glyph
        d={SUN}
        style={{
          right: "22%",
          top: "28%",
          width: 60,
          height: 60,
          stroke: GOLD,
          opacity: 0.35,
        }}
      />
      {BIRDS.map(({ right, top, size, duration, delay }, index) => (
        <Glyph
          key={`bird-${index}`}
          d={BIRD}
          className="motion-safe:animate-drift"
          style={{
            right: `${right}%`,
            top: `${top}%`,
            width: size,
            height: size,
            opacity: 0.4,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      {GUSTS.map(({ right, top, width }, index) => (
        <Glyph
          key={`gust-${index}`}
          d={GUST}
          viewBox="0 0 48 24"
          style={{
            right: `${right}%`,
            top: `${top}%`,
            width,
            height: width / 2,
            opacity: 0.3,
          }}
        />
      ))}
    </Corner>

    {/* Winter */}
    <Corner position="bottom left">
      {SNOWFLAKES.map(
        ({ left, top, size, opacity, duration, delay }, index) => (
          <Glyph
            key={`snowflake-${index}`}
            d={SNOWFLAKE}
            className="motion-safe:animate-drift"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        ),
      )}
    </Corner>

    {/* Spring */}
    <Corner position="bottom right">
      {RAINDROPS.map(({ left, top, size, opacity, duration, delay }, index) => (
        <Glyph
          key={`raindrop-${index}`}
          d={RAINDROP}
          className="motion-safe:animate-drift"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      {FERNS.map(({ right, size, flip, path }, index) => (
        <Glyph
          key={`fern-${index}`}
          d={path}
          viewBox="0 0 40 40"
          style={{
            right: `${right}%`,
            bottom: 0,
            width: size,
            height: size,
            stroke: SAGE,
            opacity: 0.45,
            transform: flip ? "scaleX(-1)" : undefined,
          }}
        />
      ))}
    </Corner>

    {/* Mountains and treeline, shared by every corner */}
    <div className="absolute inset-0 mix-blend-soft-light">
      <svg
        viewBox="0 0 1000 300"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ height: unit(38), opacity: 0.25 }}
      >
        {[RIDGE, SNOWLINE].map((d) => (
          <path
            key={d}
            d={d}
            strokeWidth={1.5}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {[
        ...LEFT_FIRS.map((fir) => ({ ...fir, side: "left" as const })),
        ...RIGHT_FIRS.map((fir) => ({ ...fir, side: "right" as const })),
      ].map(({ side, offset, height, color, opacity, path }, index) => (
        <Glyph
          key={`fir-${side}-${index}`}
          d={path}
          viewBox="0 0 20 60"
          style={{
            [side]: unit(offset),
            bottom: 0,
            width: unit(height / 3),
            height: unit(height),
            transform: `translateX(${side === "left" ? -50 : 50}%)`,
            stroke: color,
            opacity,
          }}
        />
      ))}
      {MIDDLE_FIRS.map(({ left, height, color, opacity, path }, index) => (
        <Glyph
          key={`fir-middle-${index}`}
          d={path}
          viewBox="0 0 20 60"
          style={{
            left: `${left}%`,
            bottom: 0,
            width: unit(height / 3),
            height: unit(height),
            transform: "translateX(-50%)",
            stroke: color,
            opacity,
          }}
        />
      ))}
    </div>
  </div>
)
