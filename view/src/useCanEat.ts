import { Piece } from "./usePieces";
import {
  line,
  pao,
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

export function useCanEat(pieces: Piece[]) {
  const canEats = [
    line,
    ma,
    redXiang,
    redShi,
    redShuai,
    redShi,
    redXiang,
    ma,
    line,

    pao,
    pao,

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

    pao,
    pao,

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

  function canEat(focusPiece: Piece, byPiece: Piece): boolean {
    const result = canEats[focusPiece.id](
      [focusPiece.x, focusPiece.y, byPiece.x, byPiece.y],
      pieces
    );
    if (!result) console.log("不能吃");

    return result;
  }

  return canEat;
}
