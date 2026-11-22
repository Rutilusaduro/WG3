export function Chrome({ state, minimal = false, onGo, onEndDay }) {
  return (
    <header className="chrome">
      <button type="button" className="brand" onClick={() => onGo && !minimal && onGo('home')}>
        <span className="kicker">Ordinance Seven</span>
        <strong>{state.playerName}</strong>
      </button>
      <div className="chrome-stats">
        <span>Day {state.day}</span>
        <span>§{state.money}</span>
        {state.clinicTier > 0 && <span>Clearance {state.clinicTier}</span>}
      </div>
      {!minimal && (
        <nav>
          <button type="button" onClick={() => onGo('home')}>District</button>
          <button type="button" onClick={() => onGo('phone')}>Phone</button>
          <button type="button" onClick={() => onGo('supplies')}>Supplies</button>
          <button type="button" onClick={() => onGo('clinic')}>Helix</button>
          <button type="button" onClick={() => onGo('status')}>Board</button>
          {onEndDay && (
            <button type="button" className="primary" data-testid="end-day" onClick={onEndDay}>
              End day
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
