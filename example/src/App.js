import React, { useState, useEffect } from 'react';

import Moon from 'react-moon';

let interval;

const App = () => {
  const [phase, setPhase] = useState(0);
  const play = () => {
    interval = window.setInterval(() => {
      setPhase(phase => {
        const newValue = phase < 1 ? phase + 0.005 : 0;
        return newValue;
      });
    }, 50);
  };
  const pause = () => {
    window.clearInterval(interval);
  };
  return (
    <div>
      <Moon size={320} phase={phase} />
      phase: {phase.toFixed(2)}
      <br />
      <input
        type="range"
        min={0}
        max={1}
        value={phase}
        step={0.001}
        onChange={e => setPhase(e.target.valueAsNumber)}
      />
      <div>
        <button onClick={play}>▶️</button>
        <button onClick={pause}>⏸️</button>
      </div>
    </div>
  );
};

export default App;
