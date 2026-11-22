import { WOMEN } from './index.js';

export const TABLE = {
  title: 'The long table',
  cost: 25,
  prose(ctx) {
    const lines = WOMEN.map((def) => def.tableLine(ctx.state.women[def.id]));
    return [
      `Rosa keeps a room at Cazuela that isn’t on the public book. Tonight the long table is set for five women and you, {you}, the liaison who keeps pretending this is only dinner.`,
      'They arrive in the bodies the week actually made, not the bodies you remember from the first night.',
      ...lines,
      'Steam fogs the low lamps. Someone laughs. Someone’s chair answers. The bread is already going.',
    ].join('\n\n');
  },
  choices: [
    {
      label: 'Tell them to keep going.',
      effects: { all: { weight: 16, hunger: -22, affection: 2, dependency: 2, acceptance: 1 } },
      reply:
        'You say it plainly, and the table believes you. Plates come back. Belts and ties loosen. By the last course they are warm, slower, and looking at you as if you set the weather. Rosa raises a spoon. “Again next week,” she says. No one argues.',
    },
    {
      label: 'Help whoever is struggling, and don’t push the rest.',
      effects: { all: { weight: 8, trust: 3, affection: 2, hunger: -12 } },
      reply:
        'You move around the table instead of conducting it: a cushion, a looser tie, a smaller second helping placed where a hand can reach. The room exhales. Mira touches your wrist. June nods once. Sable looks almost gentle. Liora stops taking notes she wasn’t supposed to be taking. Rosa sends you home with a container and a look.',
    },
    {
      label: 'Ask for the check before dessert.',
      effects: { all: { trust: 1, acceptance: -1, affection: 1 } },
      reply:
        'Dessert dies on the pass. Nobody is cruel about it. The night just ends a step early, with wrapped bread and a few glances that say they noticed the brake. You can come back. You will have to mean it.',
    },
  ],
};

export function tableLock(state) {
  if (state.day < 5) return 'Rosa can set the long table from day 5, once the week has a shape.';
  if (state.lastTable && state.day - state.lastTable < 4) {
    const left = 4 - (state.day - state.lastTable);
    return `The kitchen is still recovering. ${left} day${left === 1 ? '' : 's'} left.`;
  }
  if (state.money < TABLE.cost) return `The room is §${TABLE.cost}. You are short.`;
  return null;
}
