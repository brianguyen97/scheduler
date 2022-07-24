import React, { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    if (replace) {
      const newHistory = history.filter(h => h !== mode);
      setHistory([...newHistory, newMode]);
    } else {
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  };

  const back = function () {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      const newHistory = history.filter(
        mode => mode !== history[history.length - 1]
      );
      setHistory(newHistory);
    }
  };
  return { mode, transition, back };
}
