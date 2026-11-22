import { stageName } from '../data/meta.js';
import { massOf, progressToNext, stageLabel } from '../game/selectors.js';

export function Meter({ label, value, tone = 'brass' }) {
  const width = Math.max(0, Math.min(100, value || 0));
  return (
    <div className="meter-row">
      <div className="meter-label">
        <span>{label}</span>
        <span>{Math.round(width)}</span>
      </div>
      <div className="meter" aria-hidden="true">
        <span className={`tone-${tone}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export function StageTrack({ stage }) {
  return (
    <div className="pips" aria-label={stageLabel(stage)}>
      {Array.from({ length: 12 }, (_, index) => (
        <i key={index} className={index < stage ? 'on' : ''} />
      ))}
    </div>
  );
}

export function MassLine({ def, woman }) {
  return (
    <p className="mass-line">
      <strong>{massOf(def, woman)} lb</strong>
      <span>{stageLabel(woman.stage)}</span>
      {woman.stage < 12 && <span>{Math.round(progressToNext(woman) * 100)}% to {stageName(woman.stage + 1)}</span>}
    </p>
  );
}
