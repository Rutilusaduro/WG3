import { WOMEN } from '../data/index.js';

export function Phone({ state, onReply }) {
  return (
    <main className="panel-page">
      <p className="kicker">Phone</p>
      <h2>They write whether you open it or not.</h2>
      <div className="threads">
        {WOMEN.map((def) => {
          const texts = state.women[def.id].texts || [];
          const latest = texts[0];
          return (
            <article key={def.id} className="paper slim">
              <h3>{def.name}</h3>
              {texts.length === 0 && <p className="reason">Nothing yet. End a day.</p>}
              {texts.map((message, index) => (
                <p key={`${message.day}-${index}`} className={index === 0 ? 'latest' : ''}>
                  <span className="kicker">Day {message.day}</span> {message.text}
                  {message.reply && <em> · you answered</em>}
                </p>
              ))}
              {latest && !latest.reply && (
                <div className="choices">
                  <button type="button" onClick={() => onReply(def.id, 'encourage')}>Eat. I like you like this.</button>
                  <button type="button" onClick={() => onReply(def.id, 'visit')}>I miss you. I’m coming.</button>
                  <button type="button" onClick={() => onReply(def.id, 'slow')}>We can slow down.</button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}
