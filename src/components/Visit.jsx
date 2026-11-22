import { byId } from '../data/index.js';
import { intimacyBlock, seenStage } from '../game/engine.js';
import { fitOf, rateNames } from '../game/selectors.js';
import { Portrait } from './Portrait.jsx';
import { MassLine, Meter, StageTrack } from './Bars.jsx';
import { Prose } from './Prose.jsx';

export function Visit({ state, onBack, onTalk, onCare, onIntimacy, onEvent, onDate, onFeed }) {
  const womanId = state.ui.womanId;
  const def = byId[womanId];
  const woman = state.women[womanId];
  if (!def || !woman) return <main className="panel-page"><p>Choose someone from the district.</p></main>;
  const stage = def.stages[woman.stage - 1];
  const block = intimacyBlock(def, woman);
  const intimacyReason = state.daily.intimacy[womanId] ? 'Already, today.' : block;
  const rates = rateNames(state, woman);

  return (
    <main className="visit">
      <div className="visit-top">
        <Portrait def={def} stage={woman.stage} />
        <div>
          <p className="kicker">{def.role}</p>
          <h2>{def.name}</h2>
          <p className="bio">{def.bio}</p>
          <MassLine def={def} woman={woman} />
          <StageTrack stage={woman.stage} />
          <p className="fit">{stage.outfitName}. {fitOf(woman)}</p>
          <p className="fit">{stage.mobilityTag}. {stage.mobility}</p>
          {rates.length > 0 && <p className="drift">{rates.join(' · ')}</p>}
          {woman.program && <p className="drift">Helix ambulatory program is writing her nights larger.</p>}
        </div>
      </div>
      <div className="stat-grid">
        <Meter label="Affection" value={woman.affection} tone="rose" />
        <Meter label="Trust" value={woman.trust} tone="brass" />
        <Meter label="Dependency" value={woman.dependency} tone="ink" />
        <Meter label="Acceptance" value={woman.acceptance} tone="good" />
        <Meter label="Hunger" value={woman.hunger} tone="rose" />
      </div>
      <article className="paper">
        <p className="kicker">Body</p>
        <Prose text={`${stage.body}\n\n${stage.clothing}`} />
      </article>
      <div className="action-grid">
        <button type="button" onClick={() => onTalk(womanId)} disabled={!!state.daily.talk[womanId]}>Talk</button>
        <button type="button" onClick={() => onFeed(womanId)}>Feed / give</button>
        <button type="button" onClick={() => onCare(womanId)} disabled={!!state.daily.care[womanId]}>Care</button>
        <button type="button" onClick={() => onIntimacy(womanId)} disabled={!!intimacyReason}>Be close</button>
        {!seenStage(woman) && (
          <button type="button" className="primary" onClick={() => onEvent(womanId)}>
            {stage.event.title}
          </button>
        )}
        <button type="button" onClick={onBack}>Back</button>
      </div>
      {state.daily.talk[womanId] && <p className="reason">You already talked at length today.</p>}
      {intimacyReason && <p className="reason">{intimacyReason}</p>}
      <section>
        <p className="kicker">Evenings</p>
        <div className="date-list">
          {def.dates.map((date) => {
            const lock = date.locked?.(woman, state) || (state.daily.dates[womanId] ? 'Already out together today.' : null) || (state.money < date.cost ? 'Too expensive tonight.' : null);
            return (
              <button type="button" key={date.id} disabled={!!lock} onClick={() => onDate(womanId, date.id)}>
                <strong>{date.title}</strong>
                <span>{date.cost ? `§${date.cost}` : 'No bill'} · {lock || date.blurb}</span>
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
