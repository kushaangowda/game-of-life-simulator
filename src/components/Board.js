import React, { useEffect, useState } from "react";
import Cell from "./Cell";

let myInterval;
let prevCellStatus = [];

function Board({ randomize, numCellsPerRow, clear, speed, start }) {
  const newArray = (arr) => JSON.parse(JSON.stringify(arr));

  const neighbourCount = (i, j) => {
    let cellCount = 0;

    let currCellStatus = prevCellStatus.length === numCellsPerRow ? prevCellStatus : cellStatus;

    cellCount += i - 1 >= 0 && j - 1 >= 0 ? currCellStatus[i - 1][j - 1] : 0;
    cellCount += i + 1 < numCellsPerRow && j - 1 >= 0 ? currCellStatus[i + 1][j - 1] : 0;
    cellCount += i - 1 >= 0 && j + 1 < numCellsPerRow ? currCellStatus[i - 1][j + 1] : 0;
    cellCount +=
      i + 1 < numCellsPerRow && j + 1 < numCellsPerRow ? currCellStatus[i + 1][j + 1] : 0;
    cellCount += i - 1 >= 0 ? currCellStatus[i - 1][j] : 0;
    cellCount += i + 1 < numCellsPerRow ? currCellStatus[i + 1][j] : 0;
    cellCount += j - 1 >= 0 ? currCellStatus[i][j - 1] : 0;
    cellCount += j + 1 < numCellsPerRow ? currCellStatus[i][j + 1] : 0;

    return cellCount;
  };

  // get next generation stats
  const nextGen = () => {
    let newCellStatus = newArray(cellStatus).map((cellRow, i) =>
      cellRow.map((cellStat, j) => {
        if (cellStat && (neighbourCount(i, j) < 2 || neighbourCount(i, j) > 3)) return false;
        else if (!cellStat && neighbourCount(i, j) === 3) return true;
        return cellStat;
      })
    );
    prevCellStatus = newArray(newCellStatus);
    setCellStatus(newCellStatus);
  };

  // initialize cell board randomly
  useEffect(() => {
    if (randomize) {
      const newCellStatus = new Array(numCellsPerRow).fill(0).map((_) => {
        return new Array(numCellsPerRow).fill(0).map((_) => Math.random() >= 0.7);
      });
      prevCellStatus = newArray(newCellStatus);
      setCellStatus(newCellStatus);
    }
  }, [randomize, numCellsPerRow]);

  // reset cell board
  useEffect(() => {
    const newCellStatus = new Array(numCellsPerRow).fill(0).map((_) => {
      return new Array(numCellsPerRow).fill(false);
    });
    prevCellStatus = newArray(newCellStatus);
    setCellStatus(newCellStatus);
  }, [clear, numCellsPerRow]);

  // start simulation
  useEffect(() => {
    if (start) {
      clearInterval(myInterval);
      myInterval = setInterval(nextGen, speed * 100);
    } else {
      clearInterval(myInterval);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [speed, start]);

  const [cellStatus, setCellStatus] = useState([]);

  return (
    <div className="cellBoard">
      {cellStatus.map((cellRow, i) => {
        return (
          <div className="cellRow" key={i}>
            {cellRow.map((cellStat, j) => (
              <Cell key={i * numCellsPerRow + j} alive={cellStat} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
