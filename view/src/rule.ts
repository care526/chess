import { Piece } from "./usePieces";
import {
  isThisPositionHasPiece,
  isSameLine,
  xShaftHasPieceCount,
  yShaftHasPieceCount,
  Params,
} from "./utils";

export function line(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;
  // 是否在同一条线上
  if (!isSameLine(params)) return false;
  // 横向 中间无棋子
  if (originalY === targetY && xShaftHasPieceCount(params, pieces) !== 0)
    return false;
  // 纵向 中间无棋子
  if (originalX === targetX && yShaftHasPieceCount(params, pieces) !== 0)
    return false;
  return true;
}

export function pao(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;
  // 是否在同一条线上
  if (!isSameLine(params)) return false;
  // 横向 中间无棋子
  if (originalY === targetY && xShaftHasPieceCount(params, pieces) !== 1)
    return false;
  // 纵向 中间无棋子
  if (originalX === targetX && yShaftHasPieceCount(params, pieces) !== 1)
    return false;
  return true;
}

export function ma(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;

  const position1 = [
    [originalX + 2, originalY + 1],
    [originalX + 2, originalY - 1],
  ];
  const position2 = [
    [originalX - 2, originalY + 1],
    [originalX - 2, originalY - 1],
  ];
  const position3 = [
    [originalX + 1, originalY - 2],
    [originalX - 1, originalY - 2],
  ];
  const position4 = [
    [originalX + 1, originalY + 2],
    [originalX - 1, originalY + 2],
  ];
  // 如果不是马能走的8个位置，直接返回false

  const findPoint = (point: number[]) =>
    point[0] === targetX && point[1] === targetY;
  if (
    !([] as number[][])
      .concat(position1, position2, position3, position4)
      .some(findPoint)
  )
    return false;

  const positions: number[][] = [];
  // 判断蹩马腿的4个位置
  if (!isThisPositionHasPiece(originalX + 1, originalY, pieces)) {
    positions.push(...position1);
  }
  if (!isThisPositionHasPiece(originalX - 1, originalY, pieces)) {
    positions.push(...position2);
  }
  if (!isThisPositionHasPiece(originalX, originalY - 1, pieces)) {
    positions.push(...position3);
  }
  if (!isThisPositionHasPiece(originalX, originalY + 1, pieces)) {
    positions.push(...position4);
  }

  if (!positions.some(findPoint)) return false;

  return true;
}

function xiang(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;

  const position1 = [[originalX + 2, originalY - 2]];
  const position2 = [[originalX - 2, originalY - 2]];
  const position3 = [[originalX - 2, originalY + 2]];
  const position4 = [[originalX + 2, originalY + 2]];

  const findPoint = (point: number[]) =>
    point[0] === targetX && point[1] === targetY;

  if (
    !([] as number[][])
      .concat(position1, position2, position3, position4)
      .some(findPoint)
  )
    return false;

  const positions: number[][] = [];
  // 判断日心的4个位置
  if (!isThisPositionHasPiece(originalX + 1, originalY - 1, pieces)) {
    positions.push(...position1);
  }
  if (!isThisPositionHasPiece(originalX - 1, originalY - 1, pieces)) {
    positions.push(...position2);
  }
  if (!isThisPositionHasPiece(originalX - 1, originalY + 1, pieces)) {
    positions.push(...position3);
  }
  if (!isThisPositionHasPiece(originalX + 1, originalY + 1, pieces)) {
    positions.push(...position4);
  }

  if (!positions.some(findPoint)) return false;

  return true;
}

export function redXiang(params: Params, pieces: Piece[]): boolean {
  const targetY = params[3];
  // 不能过河
  if (targetY > 4) return false;
  return xiang(params, pieces);
}

export function blueXiang(params: Params, pieces: Piece[]): boolean {
  const targetY = params[3];
  // 不能过河
  if (targetY < 5) return false;
  return xiang(params, pieces);
}

function shi(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;

  const positions = [
    [originalX + 1, originalY - 1],
    [originalX - 1, originalY - 1],
    [originalX - 1, originalY + 1],
    [originalX + 1, originalY + 1],
  ];

  const findPoint = (point: number[]) =>
    point[0] === targetX && point[1] === targetY;

  if (!positions.some(findPoint)) return false;

  return true;
}

export function redShi(params: Params, pieces: Piece[]): boolean {
  const [, , targetX, targetY] = params;
  if (targetY > 2) return false;
  if (![3, 4, 5].includes(targetX)) return false;

  return shi(params, pieces);
}

export function blueShi(params: Params, pieces: Piece[]): boolean {
  const [, , targetX, targetY] = params;
  if (targetY < 8) return false;
  if (![3, 4, 5].includes(targetX)) return false;

  return shi(params, pieces);
}

function shuai(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;

  const positions = [
    [originalX + 1, originalY],
    [originalX - 1, originalY],
    [originalX, originalY + 1],
    [originalX, originalY - 1],
  ];

  const findPoint = (point: number[]) =>
    point[0] === targetX && point[1] === targetY;

  if (!positions.some(findPoint)) return false;

  return true;
}

export function redShuai(params: Params, pieces: Piece[]): boolean {
  const [, , targetX, targetY] = params;
  if (targetY > 2) return false;
  if (![3, 4, 5].includes(targetX)) return false;

  return shuai(params, pieces);
}

export function blueShuai(params: Params, pieces: Piece[]): boolean {
  const [, , targetX, targetY] = params;
  if (targetY < 8) return false;
  if (![3, 4, 5].includes(targetX)) return false;

  return shuai(params, pieces);
}

export function bing(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;

  // 未过河
  if (originalY <= 4) {
    if (originalX === targetX && originalY + 1 === targetY) return true;
    return false;
  } else {
    const positions = [
      [originalX, originalY + 1],
      [originalX + 1, originalY],
      [originalX - 1, originalY],
    ];

    const findPoint = (point: number[]) =>
      point[0] === targetX && point[1] === targetY;

    if (!positions.some(findPoint)) return false;

    return true;
  }
}

export function zhu(params: Params, pieces: Piece[]): boolean {
  const [originalX, originalY, targetX, targetY] = params;

  // 未过河
  if (originalY > 4) {
    if (originalX === targetX && originalY - 1 === targetY) return true;
    return false;
  } else {
    const positions = [
      [originalX, originalY - 1],
      [originalX + 1, originalY],
      [originalX - 1, originalY],
    ];

    const findPoint = (point: number[]) =>
      point[0] === targetX && point[1] === targetY;

    if (!positions.some(findPoint)) return false;

    return true;
  }
}
