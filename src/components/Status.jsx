import { WOMEN } from '../data/index.js';
import { computeGain } from '../game/engine.js';
import { fitOf } from '../game/selectors.js';
import { Portrait } from './Portrait.jsx';
import { MassLine, Meter, StageTrack } from './Bars.jsx';

export function Status({ state }) {
  return (
    <main className="panel-page">
      <p className="kicker">Board</p>
      <h2>Five bodies, one calendar.</h2>
      <div className="board">
        {WOMEN.map((def) => {
          const woman = state.women[def.id];
          return (
            <article key={def.id} style={{ '--accent': def.accent }}>
              <Portrait def={def} stage={woman.stage} size="sm" />
              <h3>{def.name}</h3>
              <MassLine def={def} woman={woman} />
              <StageTrack stage={woman.stage} />
              <p className="fit">{fitOf(woman)}</p>
              <p className="drift">Tonight if ignored: +{computeGain(state, def.id).gain}. Kept so far: {woman.totalGained}.</p>
              <Meter label="Affection" value={woman.affection} tone="rose" />
              <Meter label="Trust" value={woman.trust} />
              <Meter label="Dependency" value={woman.dependency} tone="ink" />
              <Meter label="Acceptance" value={woman.acceptance} tone="good" />
            </article>
          );
        })}
      </div>
      <section className="paper slim">
        <p className="kicker">Journal</p>
        <ul className="journal">
          {state.journal.map((line, index) => (
            <li key={`${line}-${index}`}>{line}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
