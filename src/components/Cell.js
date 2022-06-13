import React from "react";

function Cell({ alive }) {
  return <div className="cell" style={{ backgroundColor: alive ? "black" : "white" }}></div>;
}

export default Cell;
