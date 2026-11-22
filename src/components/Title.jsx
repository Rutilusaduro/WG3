import { useState } from 'react';

export function Title({ hasContinue, onNew, onContinue }) {
  const [name, setName] = useState('Alex');
  return (
    <main className="title-screen">
      <p className="kicker">Helix Appetite Laboratories</p>
      <h1>Ordinance Seven</h1>
      <p className="lede">
        Five women. One city. Appetite, written down and then allowed to keep going.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onNew(name);
        }}
      >
        <label>
          Your name
          <input
            data-testid="player-name"
            value={name}
            maxLength={24}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <div className="row">
          <button type="submit" className="primary" data-testid="new-game">Begin</button>
          {hasContinue && (
            <button type="button" onClick={onContinue}>Continue</button>
          )}
        </div>
      </form>
      <p className="note">
        Adult fiction. Everyone in this story is an adult. It is about feeding, desire, and bodies that do not stop growing. Progress saves in this browser.
      </p>
    </main>
  );
}

export function Intro({ name, onBegin }) {
  return (
    <main className="scene-screen">
      <article className="paper">
        <p className="kicker">Day 1 · River district</p>
        <h2>{name}, thirty-two</h2>
        <div className="prose">
          <p>
            Ordinance Seven is not a weapon program. That is what the unclassified page says. The classified page calls it metabolic persistence: the art of convincing a body that every calorie is a blessing it should keep.
          </p>
          <p>
            You are the liaison between Helix Appetite Laboratories and the people it would rather call participants than lovers. You are not objective. You came back because five women live here, and because you have always wanted to see what happens if the city feeds them and you do not say stop.
          </p>
          <p>
            They know you. They do not know how far the badge can go. Time will thicken the truth. You can help it along — or simply end the day, and let the night do a quieter version of the same work.
          </p>
        </div>
        <button type="button" className="primary" data-testid="begin-week" onClick={onBegin}>
          Step into the district
        </button>
      </article>
    </main>
  );
}
