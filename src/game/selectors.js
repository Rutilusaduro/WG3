import { ADDED_MASS, THRESHOLDS, stageName, bandIndex } from '../data/meta.js';
import { ITEM_MAP, priceOf } from '../data/items.js';

export function massOf(def, woman) {
  const stage = woman.stage;
  const added = ADDED_MASS[stage - 1] || 0;
  const next = ADDED_MASS[stage] ?? added + 48;
  const need = THRESHOLDS[stage - 1] || 80;
  const frac = stage >= 12 ? Math.min(1, woman.points / 80) : woman.points / need;
  const gain = stage >= 12 ? added + frac * 48 : added + (next - added) * frac;
  return Math.round(def.baseWeight + gain);
}

export function fitOf(woman) {
  if (woman.stage >= 12) return 'At capacity — the membrane is the only thing still trying.';
  const need = THRESHOLDS[woman.stage - 1];
  const ratio = woman.points / need;
  if (ratio > 0.8) return 'Failing. She will need the next size.';
  if (ratio > 0.4) return 'Tight. Seams and ties are negotiating.';
  return 'Holding, for now.';
}

export function progressToNext(woman) {
  if (woman.stage >= 12) return 1;
  const need = THRESHOLDS[woman.stage - 1];
  return Math.max(0, Math.min(1, woman.points / need));
}

export function stageLabel(stage) {
  return `Stage ${stage}: ${stageName(stage)}`;
}

export function reactionFor(def, woman, item) {
  const lines = def.reactions?.[item.id];
  if (!lines || !lines.length) {
    return `${def.name} takes the ${item.name}. The change is quiet, physical, and hers.`;
  }
  return lines[Math.min(bandIndex(woman.stage), lines.length - 1)];
}

export function itemLocked(state, item) {
  if ((item.tier || 0) > (state.clinicTier || 0)) {
    return `Requires Helix clearance ${item.tier}. Tour the lab, spend at the dispensary, or earn Liora’s waiver.`;
  }
  return null;
}

export function shopPrice(state, item) {
  return priceOf(state, item);
}

export function rateNames(state, woman) {
  const names = [];
  for (const rate of woman.rates || []) names.push(`${rate.name} · ${rate.days}d`);
  for (const rate of state.globalRates || []) names.push(`${rate.name} · ${rate.days}d`);
  if (woman.program) names.push('Helix program');
  return names;
}

export function knownItem(id) {
  return ITEM_MAP[id];
}
