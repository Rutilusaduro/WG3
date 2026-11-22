import { normalize } from './engine.js';

export const SAVE_KEY = 'ordinance-seven-save-v1';

export function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return normalize(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveGame(state) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function clearGame() {
  localStorage.removeItem(SAVE_KEY);
}
