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
      <div className="button" onClick={clearBoard}>
        Clear
      </div>
      <div className="button" onClick={randomizeBoard}>
        Random
      </div>
      <div className="button" onClick={handleStart}>
        Start
      </div>
      <div className="button" onClick={handleStop}>
        Stop
      </div>
      <div className="button" onClick={fast}>
        Fast
      </div>
      <div className="button" onClick={slow}>
        Slow
      </div>
    </div>
  );
}

export default Controls;
