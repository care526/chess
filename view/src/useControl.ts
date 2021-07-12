import { useState } from "react";
import { Piece, Color } from "./usePieces";
import { useCanRun } from "./useCanRun";
import { useCanEat } from "./useCanEat";

export function useControl(
  pieces: Piece[],
  setPiece: (piece: Piece) => void
): {
  focusId: number;
  turn: Color;
  setFocusId: React.Dispatch<React.SetStateAction<number>>;
  setTurn: React.Dispatch<React.SetStateAction<Color>>;
  pieceClick: (piece: Piece) => void;
  broadClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} {
  const [focusId, setFocusId] = useState<number>(-1);
  const [turn, setTurn] = useState<Color>("red");
  const canRun = useCanRun(pieces);
  const canEat = useCanEat(pieces);

  function pieceClick(piece: Piece): void {
    // 第一次点击
    if (focusId === -1) {
      // 点的对方的棋子：什么也不发生
      if (piece.color !== turn) return;

      setFocusId(piece.id);
      return;
    }

    // 非第一次点击：之前有聚焦的棋子
    // 切换聚焦
    if (piece.color === turn) {
      setFocusId(piece.id);
      return;
    }
    // 吃子
    // 判断能否吃到
    if (canEat(pieces[focusId], piece)) {
      // 隐藏被吃掉的棋子
      setPiece({
        ...piece,
        show: false,
      });
      // 跳转己方棋子到被吃的位置
      setPiece({
        ...pieces[focusId],
        x: piece.x,
        y: piece.y,
      });
      setFocusId(-1);
      setTurn(turn === "red" ? "blue" : "red");
    }
  }

  function broadClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    if (focusId === -1) return;

    // 判断能否走棋
    const targetX = Math.floor((event.clientX - 10) / 91);
    const targetY = Math.floor((event.clientY - 10) / 91);
    if (canRun(pieces[focusId], targetX, targetY)) {
      setPiece({
        ...pieces[focusId],
        x: targetX,
        y: targetY,
      });
      setFocusId(-1);
      setTurn(turn === "red" ? "blue" : "red");
    }
  }

  return {
    focusId,
    turn,
    setFocusId,
    setTurn,
    pieceClick,
    broadClick,
  };
}
