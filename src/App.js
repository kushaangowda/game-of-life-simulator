import { useEffect, useState } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";

function App() {
  const [numCellsPerRow, setNumCellsPerRow] = useState(10);

  const updateWindowDimensions = () => {
    const widthParam = Math.floor(0.65 * window.innerWidth);
    const heightParam = Math.floor(0.75 * window.innerHeight);
    const minParam = Math.min(widthParam, heightParam);
    const numCells = Math.floor(minParam / 8);
    setNumCellsPerRow(numCells);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const [randomize, setRandomize] = useState(false);
  const [clear, setClear] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <Controls
        setRandomize={setRandomize}
        setClear={setClear}
        setSpeed={setSpeed}
        setStart={setStart}
      />
      <Board
        randomize={randomize}
        numCellsPerRow={numCellsPerRow}
        clear={clear}
        speed={speed}
        start={start}
      />
    </div>
  );
}

export default App;
