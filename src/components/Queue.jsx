import { byId } from '../data/index.js';
import { presentQueue } from '../game/engine.js';
import { stageName } from '../data/meta.js';
import { Portrait } from './Portrait.jsx';
import { Prose } from './Prose.jsx';

export function Queue({ state, onContinue, onChoose }) {
  const view = presentQueue(state);
  if (!view) return null;
  if (view.type === 'morning') {
    const { report } = view;
    return (
      <main className="scene-screen">
        <article className="paper">
          <p className="kicker">Morning · Day {report.day}</p>
          <h2>While you slept, the city kept eating.</h2>
          <p className="lede">Stipend §{report.income}. You hold §{report.money}.</p>
          <ul className="report">
            {report.lines.map((line) => {
              const def = byId[line.womanId];
              return (
                <li key={line.womanId}>
                  <Portrait def={def} stage={line.stage} size="sm" />
                  <div>
                    <strong>{line.name}</strong>
                    <span> +{line.gain} · {stageName(line.stage)}</span>
                    {line.crossed?.length > 0 && <em> Crossed into {line.crossed.map(stageName).join(', ')}.</em>}
                    {line.meal && <em> She kept the meal you promised.</em>}
                    {line.absence && <em> Your absence nicked her affection.</em>}
                    <p>{line.note}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button type="button" className="primary" data-testid="morning-continue" onClick={onContinue}>
            Continue the morning
          </button>
        </article>
      </main>
    );
  }
  const def = view.womanId ? byId[view.womanId] : null;
  const stage = view.stage || (view.womanId ? state.women[view.womanId].stage : 1);
  return (
    <main className="scene-screen">
      <article className="paper">
        <div className="scene-head">
          {def && <Portrait def={def} stage={stage} size="sm" />}
          <div>
            <p className="kicker">{def ? def.name : 'The apartment'}</p>
            <h2>{view.title}</h2>
          </div>
        </div>
        <Prose text={view.prose} />
        {view.choices?.length > 0 ? (
          <div className="choices">
            {view.choices.map((choice, index) => (
              <button type="button" key={choice.label} className="choice" onClick={() => onChoose(index)}>
                {choice.label}
              </button>
            ))}
          </div>
        ) : (
          <button type="button" className="primary" data-testid="queue-continue" onClick={onContinue}>
            Continue
          </button>
        )}
      </article>
    </main>
  );
}
