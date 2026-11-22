import { byId } from '../data/index.js';
import { resolveScene } from '../game/engine.js';
import { Portrait } from './Portrait.jsx';
import { Prose } from './Prose.jsx';

export function Scene({ state, onChoose, onFinish }) {
  const view = resolveScene(state);
  if (!view) return null;
  const def = view.womanId ? byId[view.womanId] : null;
  const woman = view.womanId ? state.women[view.womanId] : null;
  return (
    <main className="scene-screen">
      <article className="paper">
        <div className="scene-head">
          {def && <Portrait def={def} stage={woman.stage} size="sm" />}
          <div>
            <p className="kicker">{def ? def.name : 'Cazuela'}</p>
            <h2>{view.title}</h2>
          </div>
        </div>
        <Prose text={view.prose} />
        {view.choices.length > 0 ? (
          <div className="choices">
            {view.choices.map((choice, index) => (
              <button type="button" key={choice.label} className="choice" onClick={() => onChoose(index)}>
                {choice.label}
              </button>
            ))}
          </div>
        ) : (
          <button type="button" className="primary" data-testid="scene-continue" onClick={onFinish}>
            {view.end ? 'Leave' : 'Continue'}
          </button>
        )}
      </article>
    </main>
  );
}
