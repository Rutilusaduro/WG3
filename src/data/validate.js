import { WOMEN } from './index.js';
import { ITEM_MAP, ITEMS } from './items.js';
import { resolveText } from '../game/text.js';
import { stageName } from './meta.js';

export function validateContent() {
  const errors = [];
  const bodies = new Set();
  for (const def of WOMEN) {
    if (def.stages.length !== 12) errors.push(`${def.id} has ${def.stages.length} stages`);
    if (def.age < 21) errors.push(`${def.id} age`);
    def.stages.forEach((stage, index) => {
      const label = `${def.id} stage ${index + 1}`;
      if (!stage.body || stage.body.length < 220) errors.push(`${label} body short`);
      if (bodies.has(stage.body)) errors.push(`${label} duplicate body`);
      bodies.add(stage.body);
      if (!stage.clothing || stage.clothing.length < 40) errors.push(`${label} clothing`);
      if (!stage.outfitName || !stage.mobility || !stage.mobilityTag) errors.push(`${label} tags`);
      if (!stage.event?.title || !stage.event.prose || stage.event.prose.length < 80) errors.push(`${label} event`);
      if ((stage.event.choices || []).length < 2) errors.push(`${label} event choices`);
      if (!stage.intimacy?.opening || stage.intimacy.opening.length < 80) errors.push(`${label} intimacy`);
      if ((stage.intimacy.choices || []).length < 2) errors.push(`${label} intimacy choices`);
      if (!stage.talk?.line || (stage.talk.choices || []).length < 2) errors.push(`${label} talk`);
      if (stageName(index + 1) && stage.outfitName.length < 3) errors.push(`${label} outfit`);
    });
    if (def.dates.length < 5) errors.push(`${def.id} dates ${def.dates.length}`);
    for (const date of def.dates) {
      if (!date.nodes[date.start]) errors.push(`${def.id} ${date.id} missing start`);
      for (const [nodeId, node] of Object.entries(date.nodes)) {
        for (const choice of node.choices || []) {
          if (choice.next && !date.nodes[choice.next]) errors.push(`${def.id} ${date.id} ${nodeId} -> ${choice.next}`);
        }
      }
      for (const stage of [1, 6, 12]) {
        const woman = { stage, affection: 40, trust: 40, acceptance: 40, flags: ['waiver', 'subject_zero'] };
        const ctx = { woman, playerName: 'Alex', def, state: { women: { [def.id]: woman }, clinicTier: 2 }, stageName: stageName(stage) };
        try {
          for (const node of Object.values(date.nodes)) resolveText(node.prose, ctx);
          const lock = date.locked?.(woman, ctx.state);
          if (lock != null && typeof lock !== 'string') errors.push(`${def.id} ${date.id} lock type`);
        } catch (error) {
          errors.push(`${def.id} ${date.id} stage ${stage}: ${error.message}`);
        }
      }
    }
    for (const item of ITEMS) {
      const lines = def.reactions?.[item.id];
      if (!lines || lines.length < 3) errors.push(`${def.id} reaction ${item.id}`);
    }
    for (const band of ['early', 'mid', 'late']) {
      if ((def.texts[band] || []).length < 3) errors.push(`${def.id} texts ${band}`);
      if ((def.ambients[band] || []).length < 1) errors.push(`${def.id} ambient ${band}`);
    }
    for (const stage of [1, 5, 12]) {
      const woman = { stage, flags: [] };
      if (typeof def.overnight(woman, 3) !== 'string') errors.push(`${def.id} overnight`);
      if (typeof def.tableLine(woman) !== 'string') errors.push(`${def.id} table`);
    }
  }
  if (!ITEM_MAP.bloom || !ITEM_MAP.pastry) errors.push('items missing');
  return errors;
}
