import { Piece } from "./usePieces";
import {
  line,
  ma,
  redXiang,
  blueXiang,
  redShi,
  blueShi,
  redShuai,
  blueShuai,
  bing,
  zhu,
} from "./rule";

export function useCanRun(pieces: Piece[]) {
  const canRuns = [
    line,
    ma,
    redXiang,
    redShi,
    redShuai,
    redShi,
    redXiang,
    ma,
    line,

    line,
    line,

    bing,
    bing,
    bing,
    bing,
    bing,

    zhu,
    zhu,
    zhu,
    zhu,
    zhu,

    line,
    line,

    line,
    ma,
    blueXiang,
    blueShi,
    blueShuai,
    blueShi,
    blueXiang,
    ma,
    line,
  ];

  function canRun(piece: Piece, targetX: number, targetY: number): boolean {
    const result = canRuns[piece.id](
      [piece.x, piece.y, targetX, targetY],
      pieces
    );
    if (!result) console.log("不能走");

    return result;
  }

  return canRun;
}
