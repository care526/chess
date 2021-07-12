// import { PackRunData, useBaseData } from "./uses/useBaseData";
import { usePieces } from "./usePieces";
import { useControl } from "./useControl";

function App() {
  const { pieces, setPiece } = usePieces();
  const { focusId, turn, pieceClick, broadClick } = useControl(
    pieces,
    setPiece
  );

  const blocks = Array(72)
    .fill(0)
    .map((i, index) => <div className="block" key={index}></div>);

  const piecesBlocks = pieces.map((piece) => (
    <div
      className={[
        "pieces",
        "pieces--" + piece.color,
        "pieces--" + (focusId === piece.id ? "focus" : "no-focus"),
      ].join(" ")}
      key={piece.id}
      style={{
        top: 10 + piece.y * 91 + "px",
        left: 10 + piece.x * 91 + "px",
        display: piece.show ? "block" : "none",
      }}
      onClick={(e) => {
        e.stopPropagation();
        pieceClick(piece);
      }}
    >
      {piece.name}
    </div>
  ));

  return (
    <div className="main" onClick={broadClick}>
      <div className={"broad broad-" + turn}>{blocks}</div>
      {piecesBlocks}
    </div>
  );
}

export default App;
