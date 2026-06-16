// =========================================================
// Handwriting Realism Utility
// Generates per-word CSS jitter for realistic handwriting
// =========================================================

/** Seeded PRNG for deterministic randomness */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Preset = 'memo' | 'postit' | 'annotation' | 'signature' | 'accent'

interface JitterConfig {
  rotateRange: number      // degrees, ± 
  xRange: number           // px, ±
  yRange: number           // px, ±
  sizeRange: number        // px, ±
  opacityMin: number       // min opacity
  fontClass: string        // CSS class to apply
}

const presets: Record<Preset, JitterConfig> = {
  memo: {
    rotateRange: 1.2,
    xRange: 0.4,
    yRange: 0.5,
    sizeRange: 0.8,
    opacityMin: 0.88,
    fontClass: 'hw-memo',
  },
  postit: {
    rotateRange: 1.8,
    xRange: 0.6,
    yRange: 0.7,
    sizeRange: 1.2,
    opacityMin: 0.82,
    fontClass: 'hw-postit',
  },
  annotation: {
    rotateRange: 0.8,
    xRange: 0.3,
    yRange: 0.3,
    sizeRange: 0.5,
    opacityMin: 0.92,
    fontClass: 'hw-annotation',
  },
  signature: {
    rotateRange: 0.5,
    xRange: 0.2,
    yRange: 0.2,
    sizeRange: 0.3,
    opacityMin: 0.9,
    fontClass: 'hw-signature',
  },
  accent: {
    rotateRange: 1.0,
    xRange: 0.3,
    yRange: 0.4,
    sizeRange: 0.6,
    opacityMin: 0.9,
    fontClass: 'hw-accent',
  },
}

/**
 * Convert text into HTML with per-word jitter spans.
 * Each word gets unique CSS custom properties for rotation, offset, size, and opacity.
 * Uses a seeded PRNG so output is deterministic for the same text.
 */
export function handwrite(text: string, preset: Preset, seed?: number): string {
  const config = presets[preset]
  const rng = mulberry32(seed ?? hashString(text))
  const words = text.split(/\s+/)

  const spans = words.map((word) => {
    const r = (rng() * 2 - 1) * config.rotateRange
    const x = (rng() * 2 - 1) * config.xRange
    const y = (rng() * 2 - 1) * config.yRange
    const s = (rng() * 2 - 1) * config.sizeRange
    const o = config.opacityMin + rng() * (1 - config.opacityMin)

    return `<span class="hw-word" style="--jr:${r.toFixed(2)}deg;--jx:${x.toFixed(2)}px;--jy:${y.toFixed(2)}px;--js:${s.toFixed(1)}px;--jo:${o.toFixed(3)}">${word}</span>`
  })

  return `<span class="${config.fontClass}">${spans.join(' ')}</span>`
}

/**
 * Simple wrapper for handwritten text without per-word jitter.
 * Just applies the font class and ink effect.
 */
export function hw(text: string, preset: Preset): string {
  const config = presets[preset]
  return `<span class="${config.fontClass}">${text}</span>`
}

/** Simple string hash for seeding */
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}
