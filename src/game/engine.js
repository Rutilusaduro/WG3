import { WOMEN, byId } from '../data/index.js';
import { THRESHOLDS, stageName, clamp, bandOf } from '../data/meta.js';
import { ITEM_MAP } from '../data/items.js';
import { resolveText } from './text.js';
import { TABLE, tableLock } from '../data/table.js';
import { itemLocked, reactionFor, shopPrice } from './selectors.js';

export { tableLock };

function emptyDaily() {
  return { shift: false, feeds: {}, dates: {}, intimacy: {}, care: {}, talk: {} };
}

function emptyUi(mode = 'home') {
  return { mode, queue: [], resume: null, scene: null, womanId: null };
}

function blankWoman(def, day = 1) {
  const need = THRESHOLDS[def.startStage - 1] || 40;
  return {
    stage: def.startStage,
    points: Math.round(need * 0.18),
    affection: def.start.affection,
    trust: def.start.trust,
    dependency: def.start.dependency,
    acceptance: def.start.acceptance,
    hunger: 42,
    rates: [],
    cooldowns: {},
    flags: [],
    totalGained: 0,
    seenEvent: {},
    lastSeen: day,
    program: false,
    pendingMeal: false,
    texts: [],
  };
}

export function newGame(playerName) {
  const name = String(playerName || 'Alex').trim().slice(0, 24) || 'Alex';
  const women = {};
  for (const def of WOMEN) women[def.id] = blankWoman(def, 1);
  return withDerived({
    version: 1,
    playerName: name,
    playerAge: 32,
    day: 1,
    money: 120,
    seed: Math.floor(Math.random() * 1e9),
    inventory: { pastry: 1, honey: 1 },
    clinicTier: 0,
    spentAtClinic: 0,
    patron: false,
    globalRates: [],
    itemCooldowns: {},
    lastTable: 0,
    journal: ['Day 1. You came back to the river district with a Helix badge and five women already in your life.'],
    women,
    daily: emptyDaily(),
    ui: emptyUi('intro'),
  });
}

export function normalize(raw) {
  if (!raw || typeof raw !== 'object' || raw.version !== 1) return null;
  const women = {};
  for (const def of WOMEN) {
    const existing = raw.women?.[def.id] || {};
    const base = blankWoman(def, raw.day || 1);
    const merged = { ...base, ...existing };
    merged.stage = clamp(Number(merged.stage) || def.startStage, 1, 12);
    merged.points = Math.max(0, Number(merged.points) || 0);
    for (const key of ['affection', 'trust', 'dependency', 'acceptance', 'hunger']) {
      merged[key] = clamp(Number(merged[key]) || 0, 0, 100);
    }
    merged.rates = Array.isArray(merged.rates) ? merged.rates : [];
    merged.cooldowns = merged.cooldowns && typeof merged.cooldowns === 'object' ? merged.cooldowns : {};
    merged.flags = Array.isArray(merged.flags) ? merged.flags : [];
    merged.seenEvent = merged.seenEvent && typeof merged.seenEvent === 'object' ? merged.seenEvent : {};
    merged.texts = Array.isArray(merged.texts) ? merged.texts.slice(0, 6) : [];
    merged.totalGained = Number(merged.totalGained) || 0;
    women[def.id] = merged;
  }
  const daily = { ...emptyDaily(), ...(raw.daily || {}) };
  daily.feeds = daily.feeds || {};
  daily.dates = daily.dates || {};
  daily.intimacy = daily.intimacy || {};
  daily.care = daily.care || {};
  daily.talk = daily.talk || {};
  return withDerived({
    ...raw,
    playerName: String(raw.playerName || 'Alex').slice(0, 24),
    playerAge: 32,
    day: Math.max(1, Number(raw.day) || 1),
    money: Math.max(0, Number(raw.money) || 0),
    seed: Number(raw.seed) || 1,
    inventory: raw.inventory && typeof raw.inventory === 'object' ? raw.inventory : {},
    clinicTier: clamp(Number(raw.clinicTier) || 0, 0, 3),
    spentAtClinic: Math.max(0, Number(raw.spentAtClinic) || 0),
    globalRates: Array.isArray(raw.globalRates) ? raw.globalRates : [],
    itemCooldowns: raw.itemCooldowns && typeof raw.itemCooldowns === 'object' ? raw.itemCooldowns : {},
    lastTable: Number(raw.lastTable) || 0,
    journal: Array.isArray(raw.journal) ? raw.journal.slice(0, 40) : [],
    women,
    daily,
    ui: {
      ...emptyUi('home'),
      ...(raw.ui || {}),
      queue: Array.isArray(raw.ui?.queue) ? raw.ui.queue : [],
    },
  });
}

function withDerived(state) {
  const patron = Object.values(state.women || {}).some((woman) => woman.stage >= 8);
  let clinicTier = state.clinicTier || 0;
  if ((state.spentAtClinic || 0) >= 250) clinicTier = Math.max(clinicTier, 2);
  return { ...state, patron, clinicTier };
}

export function gainWeight(woman, amount) {
  const added = Math.max(0, Number(amount) || 0);
  let points = woman.points + added;
  let stage = woman.stage;
  const crossed = [];
  let guard = 0;
  while (stage < 12 && guard++ < 16) {
    const need = THRESHOLDS[stage - 1];
    if (points < need) break;
    points -= need;
    stage += 1;
    crossed.push(stage);
  }
  if (stage >= 12) points = Math.min(points, 200);
  return {
    woman: { ...woman, stage, points, totalGained: (woman.totalGained || 0) + added },
    crossed,
  };
}

function tickRates(list = []) {
  return list.map((rate) => ({ ...rate, days: rate.days - 1 })).filter((rate) => rate.days > 0);
}

function tickMap(map = {}) {
  const out = {};
  for (const [key, value] of Object.entries(map)) {
    if (value - 1 > 0) out[key] = value - 1;
  }
  return out;
}

export function computeGain(state, womanId) {
  const def = byId[womanId];
  const woman = state.women[womanId];
  let mult = 1;
  for (const rate of woman.rates || []) mult *= rate.mult;
  for (const rate of state.globalRates || []) mult *= rate.mult;
  if (woman.program) mult *= 1.35;
  let gain = def.metabolism * (def.activity?.(woman.stage) ?? 1) * mult;
  if (woman.dependency >= 55) gain += 1.5;
  if (woman.acceptance >= 60) gain += 1;
  if (woman.hunger >= 80) gain += 3;
  else if (woman.hunger >= 60) gain += 2;
  else if (woman.hunger >= 40) gain += 1;
  if (woman.stage >= 10) gain += 1;
  const meal = !!woman.pendingMeal;
  if (meal) gain += 8;
  const absence = state.day - (woman.lastSeen || state.day) >= 5;
  return { gain: Math.max(1, Math.round(gain)), meal, absence };
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function bump(woman, key, amount) {
  if (!amount) return woman;
  return { ...woman, [key]: clamp((woman[key] || 0) + amount, 0, 100) };
}

function applyOne(state, womanId, effects) {
  const crossings = [];
  let woman = { ...state.women[womanId] };
  woman = bump(woman, 'affection', effects.affection);
  woman = bump(woman, 'trust', effects.trust);
  woman = bump(woman, 'dependency', effects.dependency);
  woman = bump(woman, 'acceptance', effects.acceptance);
  woman = bump(woman, 'hunger', effects.hunger);
  if (effects.weight) {
    const gained = gainWeight(woman, effects.weight);
    woman = gained.woman;
    if (gained.crossed.length) crossings.push({ womanId, stages: gained.crossed });
  }
  if (effects.flag && !woman.flags.includes(effects.flag)) {
    woman = { ...woman, flags: [...woman.flags, effects.flag] };
  }
  if (effects.rate) {
    woman = {
      ...woman,
      rates: [...woman.rates.filter((rate) => rate.name !== effects.rate.name), { ...effects.rate }],
    };
  }
  if (effects.cooldown) {
    woman = {
      ...woman,
      cooldowns: { ...woman.cooldowns, [effects.cooldown.key]: effects.cooldown.days },
    };
  }
  if (effects.program != null) woman = { ...woman, program: effects.program };
  if (effects.pendingMeal != null) woman = { ...woman, pendingMeal: effects.pendingMeal };
  woman = { ...woman, lastSeen: state.day };
  return {
    state: { ...state, women: { ...state.women, [womanId]: woman } },
    crossings,
  };
}

function applyDaily(daily, patch = {}) {
  const next = {
    shift: patch.shift ?? daily.shift,
    feeds: { ...daily.feeds },
    dates: { ...daily.dates },
    intimacy: { ...daily.intimacy },
    care: { ...daily.care },
    talk: { ...daily.talk },
  };
  if (patch.feed) next.feeds[patch.feed] = (next.feeds[patch.feed] || 0) + 1;
  if (patch.date) next.dates[patch.date] = true;
  if (patch.intimacy) next.intimacy[patch.intimacy] = true;
  if (patch.care) next.care[patch.care] = true;
  if (patch.talk) next.talk[patch.talk] = true;
  if (patch.shift) next.shift = true;
  return next;
}

function applyGlobal(state, effects = {}) {
  let money = Math.max(0, state.money + (effects.money || 0));
  const inventory = { ...state.inventory };
  if (effects.item) {
    const qty = (inventory[effects.item.id] || 0) + effects.item.qty;
    if (qty <= 0) delete inventory[effects.item.id];
    else inventory[effects.item.id] = qty;
  }
  let globalRates = state.globalRates || [];
  if (effects.globalRate) {
    globalRates = [...globalRates.filter((rate) => rate.name !== effects.globalRate.name), { ...effects.globalRate }];
  }
  let clinicTier = state.clinicTier || 0;
  if (effects.clinicTier) clinicTier = Math.max(clinicTier, effects.clinicTier);
  const spentAtClinic = (state.spentAtClinic || 0) + (effects.clinicSpend || 0);
  let journal = state.journal || [];
  if (effects.journal) journal = [effects.journal, ...journal].slice(0, 40);
  const daily = effects.daily ? applyDaily(state.daily, effects.daily) : state.daily;
  return { ...state, money, inventory, globalRates, clinicTier, spentAtClinic, journal, daily };
}

export function applyEffects(state, womanId, effects = {}) {
  let next = state;
  const crossings = [];
  if (effects.all) {
    for (const def of WOMEN) {
      const result = applyOne(next, def.id, effects.all);
      next = result.state;
      crossings.push(...result.crossings);
    }
  }
  if (womanId) {
    const result = applyOne(next, womanId, effects);
    next = result.state;
    crossings.push(...result.crossings);
  }
  next = applyGlobal(next, effects);
  for (const crossing of crossings) {
    for (const stage of crossing.stages) {
      next = {
        ...next,
        journal: [`${byId[crossing.womanId].name} reached ${stageName(stage)}.`, ...next.journal].slice(0, 40),
      };
    }
  }
  return { state: withDerived(next), crossings };
}

function crossingsToItems(crossings) {
  const items = [];
  for (const crossing of crossings) {
    for (const stage of crossing.stages) {
      items.push({ type: 'stage', womanId: crossing.womanId, stage });
      items.push({ type: 'event', womanId: crossing.womanId, stage });
    }
  }
  return items;
}

function enterQueue(state, frontItems, resume) {
  if (!frontItems.length) return state;
  const ui = state.ui;
  if (ui.mode === 'queue' && ui.queue?.length) {
    const [head, ...rest] = ui.queue;
    return { ...state, ui: { ...ui, queue: [head, ...frontItems, ...rest] } };
  }
  const fallback = {
    mode: ui.mode === 'queue' ? 'home' : ui.mode,
    scene: ui.scene,
    womanId: ui.womanId,
  };
  return {
    ...state,
    ui: {
      ...ui,
      mode: 'queue',
      queue: [...frontItems, ...(ui.queue || [])],
      resume: resume || fallback,
    },
  };
}

function markSeen(state, womanId, stage) {
  const woman = state.women[womanId];
  return {
    ...state,
    women: {
      ...state.women,
      [womanId]: { ...woman, seenEvent: { ...woman.seenEvent, [String(stage)]: true } },
    },
  };
}

export function makeCtx(state, womanId) {
  const def = womanId ? byId[womanId] : null;
  const woman = womanId ? state.women[womanId] : null;
  return {
    state,
    def,
    woman,
    playerName: state.playerName,
    stageName: woman ? stageName(woman.stage) : '',
  };
}

export function advanceDay(state) {
  const nextDay = state.day + 1;
  const women = { ...state.women };
  const reportLines = [];
  const crossings = [];
  for (const def of WOMEN) {
    const preview = computeGain(state, def.id);
    let woman = { ...women[def.id] };
    const gained = gainWeight(woman, preview.gain);
    woman = gained.woman;
    if (preview.meal) woman.pendingMeal = false;
    let hunger = woman.hunger + 14 + (woman.dependency >= 55 ? 6 : 0) + (woman.stage >= 9 ? 4 : 0);
    if (preview.meal) hunger -= 18;
    woman.hunger = clamp(hunger, 0, 100);
    if (preview.absence) woman.affection = clamp(woman.affection - 1, 0, 100);
    if (woman.stage >= 7 && woman.dependency >= 40 && nextDay % 2 === 0) {
      woman.acceptance = clamp(woman.acceptance + 1, 0, 100);
    }
    woman.rates = tickRates(woman.rates);
    woman.cooldowns = tickMap(woman.cooldowns);
    const band = bandOf(woman.stage);
    const pool = def.texts[band];
    const text = pool[nextDay % pool.length].replaceAll('{you}', state.playerName);
    woman.texts = [{ day: nextDay, text, reply: null }, ...(woman.texts || [])].slice(0, 6);
    women[def.id] = woman;
    if (gained.crossed.length) crossings.push({ womanId: def.id, stages: gained.crossed });
    reportLines.push({
      womanId: def.id,
      name: def.name,
      gain: preview.gain,
      meal: preview.meal,
      absence: preview.absence,
      stage: woman.stage,
      crossed: gained.crossed,
      note: def.overnight(woman, nextDay),
    });
  }
  const income = 22 + ((state.clinicTier || 0) >= 1 ? 10 : 0);
  const entries = [`Day ${nextDay}. Stipend §${income}.`];
  for (const crossing of crossings) {
    for (const stage of crossing.stages) {
      entries.unshift(`${byId[crossing.womanId].name} reached ${stageName(stage)}.`);
    }
  }
  const queue = [
    {
      type: 'morning',
      report: { day: nextDay, income, money: state.money + income, lines: reportLines },
    },
    ...crossingsToItems(crossings),
  ];
  const roll = mulberry32((state.seed + nextDay * 997) >>> 0)();
  if (!crossings.length && roll < 0.42) {
    const pick = mulberry32((state.seed + nextDay * 13) >>> 0)();
    const womanId = WOMEN[Math.floor(pick * WOMEN.length)].id;
    const stage = women[womanId].stage;
    const band = bandOf(stage);
    const list = byId[womanId].ambients[band];
    const index = Math.floor(mulberry32((state.seed + nextDay * 99) >>> 0)() * list.length);
    queue.push({ type: 'ambient', womanId, band, index });
  }
  return withDerived({
    ...state,
    day: nextDay,
    women,
    money: state.money + income,
    daily: emptyDaily(),
    globalRates: tickRates(state.globalRates),
    itemCooldowns: tickMap(state.itemCooldowns),
    journal: [...entries, ...state.journal].slice(0, 40),
    ui: {
      mode: 'queue',
      queue,
      resume: { mode: 'home', scene: null, womanId: null },
      scene: null,
      womanId: null,
    },
  });
}

export function go(state, mode, womanId = null) {
  return { ...state, ui: { ...state.ui, mode, womanId, scene: null } };
}

export function refusal(def, woman, item, state) {
  if ((item.minStage || 0) > woman.stage) {
    return `${def.name} has no use for the ${item.name} yet.`;
  }
  const personal = woman.cooldowns?.[item.id] || 0;
  const globalCd = state.itemCooldowns?.[item.id] || 0;
  const cd = Math.max(personal, globalCd);
  if (cd > 0) return `The last ${item.name} is still in play (${cd} day${cd === 1 ? '' : 's'}).`;
  if (item.intensity === 'mild' || item.target === 'global') return null;
  if (item.intensity === 'strong') {
    if (def.id === 'sable' && woman.acceptance >= 25) return null;
    if (def.id === 'liora' && woman.flags.includes('subject_zero')) return null;
    if (woman.acceptance >= 30 || woman.trust >= 45 || woman.dependency >= 50) return null;
    return def.refuseStrong;
  }
  if (def.id === 'sable' && (woman.acceptance >= 35 || woman.stage >= 6)) return null;
  if (def.id === 'liora' && woman.flags.includes('subject_zero') && woman.trust >= 30) return null;
  if (woman.acceptance >= 48 || (woman.trust >= 60 && woman.dependency >= 35)) return null;
  return def.refuseExtreme;
}

export function useItem(state, womanId, itemId) {
  const item = ITEM_MAP[itemId];
  if (!item) return { state, error: 'That item is gone.' };
  if ((state.inventory[itemId] || 0) < 1) return { state, error: 'You do not have that.' };
  if (item.target === 'global') {
    const cd = state.itemCooldowns?.[item.id] || 0;
    if (cd > 0) return { state, error: `The apartment is still steeped in it (${cd} day${cd === 1 ? '' : 's'}).` };
    let { state: next } = applyEffects(state, null, {
      ...item.effects,
      item: { id: item.id, qty: -1 },
      journal: `Day ${state.day}: released ${item.name} into the apartment.`,
    });
    if (item.cooldownDays) {
      next = { ...next, itemCooldowns: { ...next.itemCooldowns, [item.id]: item.cooldownDays } };
    }
    const resume = { mode: state.ui.mode === 'queue' ? 'home' : state.ui.mode, scene: null, womanId: state.ui.womanId };
    next = enterQueue(
      next,
      [{ type: 'result', womanId: null, title: item.name, prose: item.blurb + ' The rooms will keep a little more of everyone for a few days.' }],
      resume,
    );
    return { state: next };
  }
  const def = byId[womanId];
  const woman = state.women[womanId];
  if (!def || !woman) return { state, error: 'Choose a woman.' };
  if (item.countsAsFeed && (state.daily.feeds[womanId] || 0) >= 3) {
    return { state, error: `${def.name} has had enough handed to her today. Tomorrow is soon.` };
  }
  const no = refusal(def, woman, item, state);
  if (no) return { state, error: no };
  const effects = {
    ...item.effects,
    item: { id: item.id, qty: -1 },
    journal: `Day ${state.day}: ${item.name} for ${def.name}.`,
    daily: item.countsAsFeed ? { feed: womanId } : undefined,
  };
  if (item.cooldownDays) effects.cooldown = { key: item.id, days: item.cooldownDays };
  let { state: next, crossings } = applyEffects(state, womanId, effects);
  const prose = reactionFor(def, woman, item);
  const resume = { mode: 'visit', womanId, scene: null };
  next = enterQueue(
    { ...next, ui: { ...next.ui, womanId } },
    [{ type: 'result', womanId, title: item.name, prose }, ...crossingsToItems(crossings)],
    resume,
  );
  return { state: next };
}

export function buyItem(state, itemId) {
  const item = ITEM_MAP[itemId];
  if (!item) return { state, error: 'Not for sale.' };
  const lock = itemLocked(state, item);
  if (lock) return { state, error: lock };
  const price = shopPrice(state, item);
  if (state.money < price) return { state, error: `You need §${price}.` };
  const { state: next } = applyEffects(state, null, {
    money: -price,
    item: { id: itemId, qty: 1 },
    clinicSpend: item.shop === 'clinic' ? price : 0,
    journal: `Bought ${item.name}.`,
  });
  return { state: next };
}

export function activateBadge(state) {
  if ((state.clinicTier || 0) >= 1) return { state, error: 'Your badge is already live.' };
  const { state: next } = applyEffects(state, null, {
    clinicTier: 1,
    item: { id: 'nectar', qty: 1 },
    journal: 'Helix dispensary clearance: tier 1. They pressed a vial of Nectar-9 into your hand like a welcome.',
  });
  return { state: next };
}

export function enroll(state, womanId) {
  const def = byId[womanId];
  const woman = state.women[womanId];
  if ((state.clinicTier || 0) < 1) return { state, error: 'Activate your badge before enrolling anyone.' };
  if (woman.program) return { state, error: `${def.name} is already on the program.` };
  if (state.money < 75) return { state, error: 'Enrollment is §75.' };
  const { state: next } = applyEffects(state, womanId, {
    money: -75,
    program: true,
    dependency: 4,
    trust: 1,
    clinicSpend: 75,
    journal: `${def.name} enrolled in the ambulatory program.`,
  });
  return { state: next };
}

export function cancelProgram(state, womanId) {
  const def = byId[womanId];
  if (!state.women[womanId].program) return { state, error: 'She is not enrolled.' };
  const { state: next } = applyEffects(state, womanId, {
    program: false,
    trust: 1,
    dependency: -3,
    journal: `${def.name} left the Helix program.`,
  });
  return { state: next };
}

export function takeShift(state) {
  if (state.daily.shift) return { state, error: 'You already took today’s remote shift.' };
  const { state: next } = applyEffects(state, null, {
    money: 28,
    daily: { shift: true },
    journal: `Day ${state.day}: remote shift, §28.`,
  });
  return { state: next };
}

export function intimacyBlock(def, woman) {
  const forward = def.id === 'sable' || def.id === 'rosa';
  if (woman.affection < (forward ? 18 : 28)) return 'Affection is still too thin for this.';
  if (woman.trust < (forward ? 12 : 16)) return 'She does not trust you with her body yet.';
  if (!forward && woman.acceptance < 14 && woman.stage >= 6) {
    return 'She is too ashamed to be seen like this. Tenderness, time, and honesty move that.';
  }
  if (stateDailyIntimacy(woman, def)) return null;
  return null;
}

function stateDailyIntimacy() {
  return null;
}

export function openTalk(state, womanId) {
  const def = byId[womanId];
  if (state.daily.talk[womanId]) return { state, error: `You already talked at length with ${def.name} today.` };
  const { state: next } = applyEffects(state, womanId, { daily: { talk: womanId } });
  return {
    state: {
      ...next,
      ui: { ...next.ui, mode: 'scene', womanId, scene: { kind: 'talk', womanId } },
    },
  };
}

export function openDate(state, womanId, dateId) {
  const def = byId[womanId];
  const date = def.dates.find((entry) => entry.id === dateId);
  if (!date) return { state, error: 'That evening does not exist.' };
  const lock = date.locked?.(state.women[womanId], state);
  if (lock) return { state, error: lock };
  if (state.daily.dates[womanId]) return { state, error: 'You already went out with her today.' };
  if (state.money < date.cost) return { state, error: 'You cannot cover the evening.' };
  const { state: next } = applyEffects(state, womanId, {
    money: -date.cost,
    daily: { date: womanId },
    journal: `Day ${state.day}: ${def.name} — ${date.title}.`,
  });
  return {
    state: {
      ...next,
      ui: {
        ...next.ui,
        mode: 'scene',
        womanId,
        scene: { kind: 'date', womanId, dateId, nodeId: date.start },
      },
    },
  };
}

export function openIntimacy(state, womanId) {
  const def = byId[womanId];
  const woman = state.women[womanId];
  if (state.daily.intimacy[womanId]) return { state, error: 'You already had that closeness today.' };
  const block = intimacyBlock(def, woman);
  if (block) return { state, error: block };
  const { state: next } = applyEffects(state, womanId, { daily: { intimacy: womanId } });
  return {
    state: {
      ...next,
      ui: { ...next.ui, mode: 'scene', womanId, scene: { kind: 'intimacy', womanId } },
    },
  };
}

export function openCare(state, womanId) {
  const def = byId[womanId];
  if (state.daily.care[womanId]) return { state, error: `You already took care of ${def.name} today.` };
  const { state: next } = applyEffects(state, womanId, { daily: { care: womanId } });
  return {
    state: {
      ...next,
      ui: { ...next.ui, mode: 'scene', womanId, scene: { kind: 'care', womanId } },
    },
  };
}

export function openEvent(state, womanId) {
  const woman = state.women[womanId];
  if (woman.seenEvent[String(woman.stage)]) return { state, error: 'You already lived that moment with her.' };
  return {
    state: enterQueue(state, [{ type: 'event', womanId, stage: woman.stage }], {
      mode: 'visit',
      womanId,
      scene: null,
    }),
  };
}

export function openTable(state) {
  const lock = tableLock(state);
  if (lock) return { state, error: lock };
  const { state: next } = applyEffects(state, null, {
    money: -TABLE.cost,
    journal: `Day ${state.day}: the long table at Cazuela.`,
  });
  return {
    state: {
      ...next,
      lastTable: next.day,
      ui: { ...next.ui, mode: 'scene', womanId: null, scene: { kind: 'table' } },
    },
  };
}

function careChoices(def, woman) {
  const late = woman.stage >= 9;
  const mid = woman.stage >= 5;
  return [
    {
      label: late ? 'Wash and settle the places she cannot reach.' : 'Help her out of whatever is pinching.',
      effects: { trust: 3, affection: 2, acceptance: 2 },
      reply: late
        ? `${def.name} directs you in short phrases and then goes quiet, the way people do when help is finally the right shape. “That’s enough,” she says. “Stay anyway.”`
        : `You ease straps, seams, the red line of a waistband. ${def.name} breathes like someone set down. “Don’t make it a production,” she says, and keeps your hand.`,
    },
    {
      label: mid ? 'Rub what the day did to her joints.' : 'Sit with her and do nothing useful.',
      effects: { trust: 2, affection: 3, acceptance: 1 },
      reply: mid
        ? `Your hands find the work: ankles, the small of her back, the soft weight she has stopped apologizing for. ${def.name} lets the noise drain out of her face.`
        : `You sit. The city can want things. For a while neither of you does. ${def.name} leans, testing whether you’ll stay if nothing is being gained. You stay.`,
    },
    {
      label: 'Eat with her, no agenda.',
      effects: { weight: 6, affection: 2, hunger: -12, acceptance: 1 },
      reply: `It is not a dose and not a dare. You share a plate. ${def.name} eats more than she meant to and looks, afterward, as if that might be allowed.`,
    },
  ];
}

export function resolveScene(state) {
  const scene = state.ui.scene;
  if (!scene) return null;
  if (scene.kind === 'table') {
    const ctx = makeCtx(state, null);
    return {
      title: TABLE.title,
      prose: resolveText(TABLE.prose(ctx), ctx),
      choices: TABLE.choices,
      end: false,
      womanId: null,
      kind: 'table',
    };
  }
  const def = byId[scene.womanId];
  const woman = state.women[scene.womanId];
  const ctx = makeCtx(state, scene.womanId);
  if (scene.followup) {
    return { title: scene.title || 'After', prose: scene.followup, choices: [], end: true, womanId: scene.womanId, kind: scene.kind };
  }
  if (scene.kind === 'date') {
    const date = def.dates.find((entry) => entry.id === scene.dateId);
    const node = date.nodes[scene.nodeId];
    const choices = node.choices || [];
    return {
      title: date.title,
      prose: resolveText(node.prose, ctx),
      choices,
      end: !!node.end || choices.length === 0,
      womanId: scene.womanId,
      kind: 'date',
    };
  }
  if (scene.kind === 'talk') {
    const talk = def.stages[woman.stage - 1].talk;
    return { title: 'Conversation', prose: resolveText(talk.line, ctx), choices: talk.choices, end: false, womanId: scene.womanId, kind: 'talk' };
  }
  if (scene.kind === 'intimacy') {
    const intimacy = def.stages[woman.stage - 1].intimacy;
    return {
      title: 'Close',
      prose: resolveText(intimacy.opening, ctx),
      choices: intimacy.choices.map((choice) => ({ ...choice, reply: choice.reply || choice.result })),
      end: false,
      womanId: scene.womanId,
      kind: 'intimacy',
    };
  }
  if (scene.kind === 'care') {
    return {
      title: 'Care',
      prose: `${def.name} lets you into the ordinary part of the day — the part between dates, where bodies actually live. Stage ${woman.stage}: ${stageName(woman.stage)}.`,
      choices: careChoices(def, woman),
      end: false,
      womanId: scene.womanId,
      kind: 'care',
    };
  }
  return { title: 'Moment', prose: '', choices: [], end: true, womanId: scene.womanId, kind: scene.kind };
}

export function chooseScene(state, index) {
  const view = resolveScene(state);
  const choice = view?.choices?.[index];
  if (!choice) return { state, error: 'That choice has closed.' };
  if (choice.requires && view.womanId && !choice.requires(state.women[view.womanId], state)) {
    return { state, error: choice.lockedReason || 'Not now.' };
  }
  const target = view.kind === 'table' ? null : view.womanId;
  let { state: next, crossings } = applyEffects(state, target, choice.effects || {});
  if (choice.next && state.ui.scene?.kind === 'date') {
    next = { ...next, ui: { ...next.ui, scene: { ...state.ui.scene, nodeId: choice.next, followup: null } } };
    if (crossings.length) next = enterQueue(next, crossingsToItems(crossings));
    return { state: next };
  }
  const ctx = makeCtx(next, view.womanId);
  const reply = resolveText(choice.reply || choice.result || 'She lets the moment settle.', ctx);
  const items = [{ type: 'result', womanId: view.womanId, title: view.title, prose: reply }, ...crossingsToItems(crossings)];
  const resume =
    view.kind === 'table'
      ? { mode: 'home', womanId: null, scene: null }
      : { mode: 'visit', womanId: view.womanId, scene: null };
  return { state: enterQueue(next, items, resume) };
}

export function finishScene(state) {
  const scene = state.ui.scene;
  const back = scene?.kind === 'table' ? 'home' : 'visit';
  return {
    ...state,
    ui: {
      ...state.ui,
      mode: back,
      scene: null,
      womanId: scene?.womanId || state.ui.womanId,
    },
  };
}

export function presentQueue(state) {
  const head = state.ui.queue?.[0];
  if (!head) return null;
  if (head.type === 'morning') return { type: 'morning', report: head.report };
  if (head.type === 'result') {
    return { type: 'result', title: head.title, prose: head.prose, womanId: head.womanId, choices: [] };
  }
  const def = byId[head.womanId];
  const stageDef = def.stages[head.stage - 1];
  if (head.type === 'stage') {
    return {
      type: 'stage',
      title: `${def.name} · ${stageName(head.stage)}`,
      stage: head.stage,
      womanId: head.womanId,
      prose: `${stageDef.body}\n\n${stageDef.clothing}\n\n${stageDef.mobility}`,
      choices: [],
    };
  }
  if (head.type === 'event') {
    const ctx = makeCtx(state, head.womanId);
    return {
      type: 'event',
      title: stageDef.event.title,
      stage: head.stage,
      womanId: head.womanId,
      prose: resolveText(stageDef.event.prose, ctx),
      choices: stageDef.event.choices || [],
    };
  }
  if (head.type === 'ambient') {
    const amb = def.ambients[head.band][head.index];
    const ctx = makeCtx(state, head.womanId);
    return {
      type: 'ambient',
      title: amb.title,
      womanId: head.womanId,
      prose: resolveText(amb.prose, ctx),
      choices: amb.choices || [],
    };
  }
  return null;
}

export function resolveQueueChoice(state, index) {
  const head = state.ui.queue[0];
  const view = presentQueue(state);
  const choice = view?.choices?.[index];
  if (!choice) return { state, error: 'That choice has closed.' };
  let { state: next, crossings } = applyEffects(state, head.womanId, choice.effects || {});
  if (head.type === 'event') next = markSeen(next, head.womanId, head.stage);
  const prose = resolveText(choice.reply || choice.result || 'She lets that settle.', makeCtx(next, head.womanId));
  const rest = next.ui.queue.slice(1);
  const items = [{ type: 'result', womanId: head.womanId, title: view.title, prose }, ...crossingsToItems(crossings)];
  return { state: { ...next, ui: { ...next.ui, mode: 'queue', queue: [...items, ...rest] } } };
}

export function advanceQueue(state) {
  const queue = state.ui.queue.slice(1);
  if (queue.length) return { ...state, ui: { ...state.ui, queue } };
  const resume = state.ui.resume || { mode: 'home', scene: null, womanId: null };
  return {
    ...state,
    ui: {
      ...state.ui,
      queue: [],
      mode: resume.mode || 'home',
      scene: resume.scene || null,
      womanId: resume.womanId ?? null,
      resume: null,
    },
  };
}

export function replyToText(state, womanId, kind) {
  const woman = state.women[womanId];
  const texts = woman.texts || [];
  if (!texts.length || texts[0].reply) return { state, error: 'No message is waiting.' };
  const effects =
    kind === 'encourage'
      ? { affection: 1, acceptance: 2, dependency: 2, pendingMeal: true, weight: 4 }
      : kind === 'slow'
        ? { trust: 3, dependency: -3, acceptance: 1, rate: { name: 'Promised pause', mult: 0.7, days: 2 } }
        : { affection: 3, trust: 1 };
  let { state: next, crossings } = applyEffects(state, womanId, effects);
  const updated = { ...next.women[womanId] };
  updated.texts = [{ ...updated.texts[0], reply: kind }, ...updated.texts.slice(1)];
  next = { ...next, women: { ...next.women, [womanId]: updated } };
  if (!crossings.length) return { state: next };
  return {
    state: enterQueue(next, crossingsToItems(crossings), { mode: 'phone', womanId, scene: null }),
  };
}

export function seenStage(woman, stage = woman.stage) {
  return !!woman.seenEvent[String(stage)];
}
