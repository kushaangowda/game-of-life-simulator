import React, { useState, useEffect } from "react";

function Cell({ randomize, clear, alive }) {
  //   useEffect(() => {
  //     if (randomize) {
  //       const k = Math.random();
  //       setAlive(k >= 0.6);
  //     }
  //   }, [randomize]);

  //   useEffect(() => {
  //     if (clear) {
  //       setAlive(false);
  //     }
  //   }, [clear]);

  return <div className="cell" style={{ backgroundColor: alive ? "black" : "white" }}></div>;
}

export default Cell;
