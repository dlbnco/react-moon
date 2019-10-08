import React, { useState } from 'react';

import Moon from 'react-moon';

let interval;

const App = () => {
  const [phase, setPhase] = useState(0.16);
  const [isPlaying, setPlay] = useState(false);
  const play = () => {
    setPlay(true);
    interval = window.setInterval(() => {
      setPhase(phase => {
        const newValue = phase < 1 ? phase + 0.005 : 0;
        return newValue;
      });
    }, 50);
  };
  const pause = () => {
    setPlay(false);
    window.clearInterval(interval);
  };
  return (
    <div>
      <h1 align="center">react-moon</h1>
      <Moon size={320} phase={phase} />
      phase: {phase.toFixed(2)}
      <br />
      <input
        style={{ width: '100%' }}
        type="range"
        min={0}
        max={1}
        value={phase}
        step={0.001}
        onChange={e => setPhase(e.target.valueAsNumber)}
      />
      <div>
        <button onClick={isPlaying ? pause : play}>
          <span role="img" aria-label="Play">
            {isPlaying ? '⏸️' : '▶️'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
