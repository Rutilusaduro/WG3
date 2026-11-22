import { useEffect, useState } from 'react';
import { Chrome } from './components/Chrome.jsx';
import { Clinic } from './components/Clinic.jsx';
import { Home } from './components/Home.jsx';
import { Inventory } from './components/Inventory.jsx';
import { Phone } from './components/Phone.jsx';
import { Queue } from './components/Queue.jsx';
import { Scene } from './components/Scene.jsx';
import { Status } from './components/Status.jsx';
import { Intro, Title } from './components/Title.jsx';
import { Visit } from './components/Visit.jsx';
import {
  activateBadge,
  advanceDay,
  advanceQueue,
  buyItem,
  cancelProgram,
  chooseScene,
  enroll,
  finishScene,
  go,
  newGame,
  normalize,
  openCare,
  openDate,
  openEvent,
  openIntimacy,
  openTable,
  openTalk,
  replyToText,
  resolveQueueChoice,
  takeShift,
  useItem,
} from './game/engine.js';
import { clearGame, loadGame, saveGame } from './game/storage.js';

export default function App() {
  const [state, setState] = useState(() => loadGame());
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [atTitle, setAtTitle] = useState(() => !loadGame());

  useEffect(() => {
    if (!state) return;
    try {
      saveGame(state);
      setWarning('');
    } catch {
      setWarning('This browser refused to store the save. Export a copy before you leave.');
    }
  }, [state]);

  function commit(result) {
    if (!result) return;
    if (result.error) {
      setError(result.error);
      return;
    }
    setError('');
    setState(result.state ?? result);
  }

  function start(name) {
    clearGame();
    const next = newGame(name);
    setState(next);
    setAtTitle(false);
    setError('');
  }

  if (!state || atTitle) {
    return (
      <Title
        hasContinue={!!state}
        onNew={start}
        onContinue={() => setAtTitle(false)}
      />
    );
  }

  const mode = state.ui.mode;
  const minimal = mode === 'intro' || mode === 'scene' || mode === 'queue';

  return (
    <div className="app">
      {mode !== 'intro' && (
        <Chrome
          state={state}
          minimal={minimal}
          onGo={(next, womanId = null) => commit(go(state, next, womanId))}
          onEndDay={mode === 'home' ? () => commit(advanceDay(state)) : null}
        />
      )}
      {(error || warning) && (
        <p className="banner" role="status">{error || warning}</p>
      )}
      {mode === 'intro' && <Intro name={state.playerName} onBegin={() => commit(go(state, 'home'))} />}
      {mode === 'home' && (
        <Home
          state={state}
          onGo={(next, womanId) => commit(go(state, next, womanId))}
          onShift={() => commit(takeShift(state))}
          onTable={() => commit(openTable(state))}
          onExport={() => {
            const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `ordinance-seven-day-${state.day}.json`;
            link.click();
            URL.revokeObjectURL(url);
          }}
          onImport={async (file) => {
            try {
              const next = normalize(JSON.parse(await file.text()));
              if (!next) {
                setError('That file is not an Ordinance Seven save.');
                return;
              }
              setState(next);
              setError('');
            } catch {
              setError('Could not read that file.');
            }
          }}
          onNewGame={() => {
            if (window.confirm('Replace this life with a new one?')) start(state.playerName);
          }}
        />
      )}
      {mode === 'visit' && (
        <Visit
          state={state}
          onBack={() => commit(go(state, 'home'))}
          onTalk={(id) => commit(openTalk(state, id))}
          onCare={(id) => commit(openCare(state, id))}
          onIntimacy={(id) => commit(openIntimacy(state, id))}
          onEvent={(id) => commit(openEvent(state, id))}
          onDate={(id, dateId) => commit(openDate(state, id, dateId))}
          onFeed={(id) => commit(go(state, 'supplies', id))}
        />
      )}
      {mode === 'scene' && (
        <Scene
          state={state}
          onChoose={(index) => commit(chooseScene(state, index))}
          onFinish={() => commit(finishScene(state))}
        />
      )}
      {mode === 'queue' && (
        <Queue
          state={state}
          onContinue={() => commit(advanceQueue(state))}
          onChoose={(index) => commit(resolveQueueChoice(state, index))}
        />
      )}
      {mode === 'clinic' && (
        <Clinic
          state={state}
          onBuy={(id) => commit(buyItem(state, id))}
          onTour={() => commit(activateBadge(state))}
          onEnroll={(id) => commit(enroll(state, id))}
          onCancel={(id) => commit(cancelProgram(state, id))}
        />
      )}
      {mode === 'supplies' && <Inventory state={state} onUse={(womanId, itemId) => commit(useItem(state, womanId, itemId))} />}
      {mode === 'phone' && <Phone state={state} onReply={(id, kind) => commit(replyToText(state, id, kind))} />}
      {mode === 'status' && <Status state={state} />}
    </div>
  );
}
