import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContent } from '../data/validate.js';
import { WOMEN } from '../data/index.js';
import {
  advanceDay,
  applyEffects,
  buyItem,
  computeGain,
  gainWeight,
  newGame,
  normalize,
  openDate,
  presentQueue,
  resolveScene,
  takeShift,
  useItem,
} from './engine.js';

test('content is complete and wired', () => {
  const errors = validateContent();
  assert.deepEqual(errors, [], errors.join('\n'));
});

test('weight crosses one stage and then several', () => {
  const woman = { stage: 1, points: 0, totalGained: 0 };
  const once = gainWeight(woman, 30);
  assert.equal(once.woman.stage, 2);
  assert.deepEqual(once.crossed, [2]);
  const jump = gainWeight({ stage: 1, points: 0, totalGained: 0 }, 74);
  assert.ok(jump.woman.stage >= 3);
  assert.ok(jump.crossed.length >= 2);
  const capped = gainWeight({ stage: 12, points: 180, totalGained: 0 }, 50);
  assert.equal(capped.woman.stage, 12);
  assert.equal(capped.crossed.length, 0);
  assert.equal(capped.woman.points, 200);
});

test('a day moves every woman and the calendar', () => {
  let state = newGame('Alex');
  state = { ...state, ui: { ...state.ui, mode: 'home' } };
  const before = Object.fromEntries(WOMEN.map((def) => [def.id, state.women[def.id].totalGained]));
  state = advanceDay(state);
  assert.equal(state.day, 2);
  assert.equal(state.ui.queue[0].type, 'morning');
  for (const def of WOMEN) {
    assert.ok(state.women[def.id].totalGained > before[def.id]);
    assert.ok(state.women[def.id].texts.length >= 1);
  }
  assert.ok(state.money > 120);
});

test('program and stillpoint change the nightly drift', () => {
  let state = newGame('Alex');
  const base = computeGain(state, 'rosa').gain;
  state = {
    ...state,
    women: {
      ...state.women,
      rosa: { ...state.women.rosa, program: true, rates: [{ name: 'Stillpoint', mult: 0.55, days: 3 }] },
    },
  };
  const mixed = computeGain(state, 'rosa').gain;
  assert.notEqual(mixed, base);
  const spiked = computeGain(
    {
      ...state,
      women: { ...state.women, rosa: { ...state.women.rosa, program: true, rates: [{ name: 'Spike', mult: 1.55, days: 2 }] } },
    },
    'rosa',
  ).gain;
  assert.ok(spiked > base);
});

test('shop, refusal, and a dose that can change a stage', () => {
  let state = newGame('Alex');
  state = { ...state, money: 800, clinicTier: 2, ui: { ...state.ui, mode: 'visit', womanId: 'mira' } };
  state = buyItem(state, 'bloom').state;
  assert.equal(state.inventory.bloom, 1);
  const refused = useItem(state, 'mira', 'bloom');
  assert.ok(refused.error);
  assert.equal(state.inventory.bloom, 1);
  state = {
    ...state,
    women: {
      ...state.women,
      mira: { ...state.women.mira, acceptance: 70, trust: 70 },
    },
  };
  const stage = state.women.mira.stage;
  const dosed = useItem(state, 'mira', 'bloom');
  assert.equal(dosed.error, undefined);
  assert.ok(dosed.state.women.mira.stage > stage);
  assert.equal(dosed.state.inventory.bloom, undefined);
  assert.equal(dosed.state.ui.mode, 'queue');
  assert.ok(presentQueue(dosed.state));
});

test('a date opens and resolves its first page', () => {
  let state = newGame('Alex');
  state = { ...state, money: 200, ui: { ...state.ui, mode: 'visit', womanId: 'rosa' } };
  const opened = openDate(state, 'rosa', 'sunday');
  assert.equal(opened.error, undefined);
  const view = resolveScene(opened.state);
  assert.equal(view.title, 'Sunday pot');
  assert.ok(view.choices.length >= 2);
  assert.ok(view.prose.length > 40);
});

test('shift pays once', () => {
  let state = newGame('Alex');
  const first = takeShift(state);
  assert.equal(first.state.money, state.money + 28);
  const second = takeShift(first.state);
  assert.ok(second.error);
});

test('normalize repairs a partial save', () => {
  const state = newGame('Alex');
  state.women.june.stage = 99;
  const fixed = normalize(JSON.parse(JSON.stringify(state)));
  assert.equal(fixed.women.june.stage, 12);
  assert.ok(fixed.women.sable);
  assert.equal(normalize({ version: 2 }), null);
});

test('feeding the table touches everyone', () => {
  let state = newGame('Alex');
  const before = WOMEN.map((def) => state.women[def.id].totalGained);
  const { state: next } = applyEffects(state, null, { all: { weight: 10, affection: 1 } });
  WOMEN.forEach((def, index) => {
    assert.equal(next.women[def.id].totalGained, before[index] + 10);
  });
});
