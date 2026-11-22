import { WOMEN } from '../data/index.js';
import { computeGain } from '../game/engine.js';
import { fitOf, rateNames } from '../game/selectors.js';
import { tableLock } from '../data/table.js';
import { Portrait } from './Portrait.jsx';
import { MassLine, StageTrack } from './Bars.jsx';

export function Home({ state, onGo, onShift, onTable, onNewGame, onImport, onExport }) {
  const lock = tableLock(state);
  return (
    <main className="home">
      <section className="lede-block">
        <p className="kicker">River district</p>
        <h2>The day is yours. The night is everybody’s.</h2>
        <p>
          Ending the day feeds no one by hand. It still moves all five — hunger, habit, whatever Helix left in the air. Drift tonight is only a forecast.
        </p>
        <div className="row wrap">
          <button type="button" onClick={onShift} disabled={state.daily.shift}>
            {state.daily.shift ? 'Shift done' : 'Remote shift +§28'}
          </button>
          <button type="button" onClick={onTable} disabled={!!lock} data-testid="long-table">
            The long table · §25
          </button>
        </div>
        {lock && <p className="reason">{lock}</p>}
      </section>
      <div className="roster">
        {WOMEN.map((def) => {
          const woman = state.women[def.id];
          const drift = computeGain(state, def.id).gain;
          const rates = rateNames(state, woman);
          return (
            <button
              type="button"
              key={def.id}
              className="woman-card"
              data-testid={`woman-${def.id}`}
              style={{ '--accent': def.accent }}
              onClick={() => onGo('visit', def.id)}
            >
              <Portrait def={def} stage={woman.stage} size="sm" />
              <div>
                <p className="kicker">{def.role}</p>
                <h3>{def.name}, {def.age}</h3>
                <MassLine def={def} woman={woman} />
                <StageTrack stage={woman.stage} />
                <p className="fit">{fitOf(woman)}</p>
                <p className="drift">If you do nothing else: about +{drift} tonight.{rates.length ? ` ${rates.join(' · ')}` : ''}</p>
              </div>
            </button>
          );
        })}
      </div>
      <section className="system">
        <p className="kicker">On this device</p>
        <div className="row wrap">
          <button type="button" onClick={onExport}>Export save</button>
          <label className="file">
            Import
            <input
              type="file"
              accept="application/json"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) onImport(file);
                event.target.value = '';
              }}
            />
          </label>
          <button type="button" onClick={onNewGame}>New game</button>
        </div>
        <p className="reason">Autosave is on. A new game replaces this one after you confirm.</p>
      </section>
    </main>
  );
}
