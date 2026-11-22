import { paragraphs } from '../game/text.js';

export function Prose({ text }) {
  return (
    <div className="prose">
      {paragraphs(text).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
