import React from "react";
import { PiecesItem, pieces } from "./pieces";

function App() {
  function piecesClick(pieces: PiecesItem) {
    pieces.isOver = true;
    console.log(11);
  }

  const blocks = Array(72)
    .fill(0)
    .map((i, index) => <div className="block" key={index}></div>);

  const piecesBlocks = pieces.map((i) => (
    <div
      className={"pieces pieces--" + i.color}
      key={i.id}
      style={{
        top: 10 + i.line * 100 + "px",
        left: 10 + i.cloumn * 100 + "px",
        display: i.isOver ? "none" : "block",
      }}
      onClick={() => piecesClick(i)}
    >
      {i.name}
      {i.isOver}
    </div>
  ));

  return (
    <div className="main">
      <div className="broad">{blocks}</div>
      {piecesBlocks}
    </div>
  );
}

export default App;
