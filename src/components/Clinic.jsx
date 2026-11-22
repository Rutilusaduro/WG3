import { useState } from 'react';
import { WOMEN } from '../data/index.js';
import { ITEMS } from '../data/items.js';
import { itemLocked, shopPrice } from '../game/selectors.js';

export function Clinic({ state, onBuy, onTour, onEnroll, onCancel }) {
  const [tab, setTab] = useState(() => (state.clinicTier < 1 ? 'clinic' : 'market'));
  const items = ITEMS.filter((item) => item.shop === (tab === 'market' ? 'market' : 'clinic'));
  return (
    <main className="panel-page">
      <p className="kicker">{tab === 'market' ? 'Night market' : 'Helix dispensary'}</p>
      <h2>{tab === 'market' ? 'What the street will sell you' : 'What the badge will admit'}</h2>
      <div className="row">
        <button type="button" className={tab === 'market' ? 'primary' : ''} onClick={() => setTab('market')}>Market</button>
        <button type="button" className={tab === 'clinic' ? 'primary' : ''} onClick={() => setTab('clinic')}>Dispensary</button>
      </div>
      {tab === 'clinic' && state.clinicTier < 1 && (
        <article className="paper slim">
          <p>Your liaison badge is printed and not yet live. The dispensary will not open a drawer for a rumor.</p>
          <button type="button" className="primary" data-testid="activate-badge" onClick={onTour}>
            Activate badge
          </button>
        </article>
      )}
      <div className="shop-list">
        {items.map((item) => {
          const lock = itemLocked(state, item);
          const price = shopPrice(state, item);
          return (
            <article key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
              <p className="drift">§{price}{state.patron && item.shop === 'clinic' ? ' · patron price' : ''} · {item.intensity}</p>
              {lock && <p className="reason">{lock}</p>}
              <button type="button" disabled={!!lock || state.money < price} onClick={() => onBuy(item.id)}>
                {lock ? 'Locked' : 'Buy'}
              </button>
            </article>
          );
        })}
      </div>
      {tab === 'clinic' && state.clinicTier >= 1 && (
        <section>
          <p className="kicker">Ambulatory program · §75</p>
          <p>A quiet contract. Her nights run hotter. You can take her off it later; the mass already kept does not leave with the paperwork.</p>
          <div className="date-list">
            {WOMEN.map((def) => {
              const woman = state.women[def.id];
              return woman.program ? (
                <button type="button" key={def.id} onClick={() => onCancel(def.id)}>
                  <strong>{def.name}</strong>
                  <span>On the program. End it.</span>
                </button>
              ) : (
                <button type="button" key={def.id} disabled={state.money < 75} onClick={() => onEnroll(def.id)}>
                  <strong>Enroll {def.name}</strong>
                  <span>§75 · nights get heavier</span>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
