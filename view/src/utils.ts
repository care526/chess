import { Piece } from "./usePieces";

export type Params = [number, number, number, number];

export function isThisPositionHasPiece(
  x: number,
  y: number,
  pieces: Piece[]
): boolean {
  return !!pieces.find((piece) => piece.show && piece.x === x && piece.y === y);
}

export function isSameLine([
  originalX,
  originalY,
  targetX,
  targetY,
]: Params): boolean {
  return originalX === targetX || originalY === targetY;
}

export function compareNum(number1: number, number2: number): [number, number] {
  if (number1 < number2) return [number1, number2];
  return [number2, number1];
}

export function xShaftHasPieceCount(
  [originalX, originalY, targetX, targetY]: Params,
  pieces: Piece[]
) {
  const [minX, maxX] = compareNum(originalX, targetX);

  return pieces.filter(
    (piece) =>
      piece.show && piece.y === targetY && minX < piece.x && piece.x < maxX
  ).length;
}

export function yShaftHasPieceCount(
  [originalX, originalY, targetX, targetY]: Params,
  pieces: Piece[]
) {
  const [minY, maxY] = compareNum(originalY, targetY);

  return pieces.filter(
    (piece) =>
      piece.show && piece.x === targetX && minY < piece.y && piece.y < maxY
  ).length;
}
