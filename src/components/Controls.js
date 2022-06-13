import React from "react";

function Controls({ setRandomize, setClear, setSpeed, setStart }) {
  const randomizeBoard = () => {
    setRandomize(true);
    setTimeout(() => {
      setRandomize(false);
    }, 100);
  };

  const clearBoard = () => {
    setClear(true);
    setTimeout(() => {
      setClear(false);
    }, 100);
  };

  const fast = () => {
    setSpeed((s) => Math.max(0.1, s - 0.1));
  };

  const slow = () => {
    setSpeed((s) => s + 0.1);
  };

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  return (
    <div className="controls">
      <button onClick={clearBoard}>Clear</button>
      <button onClick={randomizeBoard}>Randomize</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={fast}>Fast</button>
      <button onClick={slow}>Slow</button>
    </div>
  );
}

export default Controls;
