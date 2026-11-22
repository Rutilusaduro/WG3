export const STAGE_NAMES = [
  'Slender',
  'Lean',
  'Softening',
  'Soft & Rounded',
  'Pleasantly Chubby',
  'Plump',
  'Fat',
  'Massive',
  'Obese',
  'Super Obese',
  'Near-Immobile',
  'Immobile Blob',
];

/** Points required to leave the current stage. Index 0 = stage 1. */
export const THRESHOLDS = [30, 36, 42, 50, 58, 68, 78, 90, 102, 116, 132];

/** Pounds added by the start of each stage, on top of a character's base. */
export const ADDED_MASS = [0, 12, 26, 44, 66, 92, 124, 162, 208, 262, 326, 400];

export const STAT_KEYS = ['affection', 'trust', 'dependency', 'acceptance', 'hunger'];

export function stageName(stage) {
  return STAGE_NAMES[Math.min(12, Math.max(1, stage)) - 1];
}

export function bandOf(stage) {
  if (stage >= 9) return 'late';
  if (stage >= 5) return 'mid';
  return 'early';
}

export function bandIndex(stage) {
  if (stage >= 9) return 2;
  if (stage >= 5) return 1;
  return 0;
}

export function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
