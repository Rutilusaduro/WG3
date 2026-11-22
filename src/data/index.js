import { mira } from './mira.js';
import { sable } from './sable.js';
import { june } from './june.js';
import { liora } from './liora.js';
import { rosa } from './rosa.js';

export const WOMEN = [mira, sable, june, liora, rosa];
export const byId = Object.fromEntries(WOMEN.map((woman) => [woman.id, woman]));
