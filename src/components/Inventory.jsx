import { useState } from 'react';
import { WOMEN } from '../data/index.js';
import { ITEM_MAP } from '../data/items.js';

export function Inventory({ state, onUse }) {
  const [picked, setPicked] = useState(null);
  const entries = Object.entries(state.inventory).filter(([, qty]) => qty > 0);
  const item = picked ? ITEM_MAP[picked] : null;
  return (
    <main className="panel-page">
      <p className="kicker">Supplies</p>
      <h2>What you are holding</h2>
      {entries.length === 0 && <p>Your pockets are a theory. The market and the dispensary are not.</p>}
      <div className="shop-list">
        {entries.map(([id, qty]) => {
          const known = ITEM_MAP[id];
          if (!known) return null;
          return (
            <article key={id} className={picked === id ? 'selected' : ''}>
              <h3>{known.name} × {qty}</h3>
              <p>{known.blurb}</p>
              <button type="button" onClick={() => setPicked(id)}>Choose</button>
            </article>
          );
        })}
      </div>
      {item && (
        <section className="paper slim">
          <p className="kicker">Use {item.name}</p>
          {item.target === 'global' ? (
            <button type="button" className="primary" onClick={() => onUse(null, item.id)}>
              Open it in the apartment
            </button>
          ) : (
            <div className="date-list">
              {WOMEN.map((def) => {
                const woman = state.women[def.id];
                const feeds = state.daily.feeds[def.id] || 0;
                const blocked = item.countsAsFeed && feeds >= 3;
                return (
                  <button
                    type="button"
                    key={def.id}
                    disabled={blocked}
                    onClick={() => onUse(def.id, item.id)}
                  >
                    <strong>{def.name}</strong>
                    <span>
                      {blocked ? 'She is done being handed things today.' : `Stage ${woman.stage} · fed ${feeds}/3`}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
