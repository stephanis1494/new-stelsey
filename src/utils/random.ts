// Small seeded PRNG (mulberry32) so the "random" layout is identical on the
// server and client - Math.random() here would cause a hydration mismatch.
export const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

export const between = (random: () => number, min: number, max: number) =>
  min + random() * (max - min)
