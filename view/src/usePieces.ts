import { useState } from "react";

export type Color = "red" | "blue";

export interface Piece {
  id: number;
  name: string;
  color: Color;
  x: number;
  y: number;
  show: boolean;
}

function createPieceData(
  data: [number, string, "red" | "blue", number, number, boolean]
): Piece {
  const [id, name, color, x, y, show] = data;
  return {
    id,
    name,
    color,
    x,
    y,
    show,
  };
}

export function usePieces(): {
  pieces: Piece[];
  setPiece: (piece: Piece) => void;
} {
  const [piece0, setPiece0] = useState<Piece>(
    createPieceData([0, "车", "red", 0, 0, true])
  );
  const [piece1, setPiece1] = useState<Piece>(
    createPieceData([1, "马", "red", 1, 0, true])
  );
  const [piece2, setPiece2] = useState<Piece>(
    createPieceData([2, "象", "red", 2, 0, true])
  );
  const [piece3, setPiece3] = useState<Piece>(
    createPieceData([3, "士", "red", 3, 0, true])
  );
  const [piece4, setPiece4] = useState<Piece>(
    createPieceData([4, "帅", "red", 4, 0, true])
  );
  const [piece5, setPiece5] = useState<Piece>(
    createPieceData([5, "士", "red", 5, 0, true])
  );
  const [piece6, setPiece6] = useState<Piece>(
    createPieceData([6, "象", "red", 6, 0, true])
  );
  const [piece7, setPiece7] = useState<Piece>(
    createPieceData([7, "马", "red", 7, 0, true])
  );
  const [piece8, setPiece8] = useState<Piece>(
    createPieceData([8, "车", "red", 8, 0, true])
  );

  const [piece9, setPiece9] = useState<Piece>(
    createPieceData([9, "炮", "red", 1, 2, true])
  );
  const [piece10, setPiece10] = useState<Piece>(
    createPieceData([10, "炮", "red", 7, 2, true])
  );

  const [piece11, setPiece11] = useState<Piece>(
    createPieceData([11, "兵", "red", 0, 3, true])
  );
  const [piece12, setPiece12] = useState<Piece>(
    createPieceData([12, "兵", "red", 2, 3, true])
  );
  const [piece13, setPiece13] = useState<Piece>(
    createPieceData([13, "兵", "red", 4, 3, true])
  );
  const [piece14, setPiece14] = useState<Piece>(
    createPieceData([14, "兵", "red", 6, 3, true])
  );
  const [piece15, setPiece15] = useState<Piece>(
    createPieceData([15, "兵", "red", 8, 3, true])
  );

  const [piece16, setPiece16] = useState<Piece>(
    createPieceData([16, "卒", "blue", 0, 6, true])
  );
  const [piece17, setPiece17] = useState<Piece>(
    createPieceData([17, "卒", "blue", 2, 6, true])
  );
  const [piece18, setPiece18] = useState<Piece>(
    createPieceData([18, "卒", "blue", 4, 6, true])
  );
  const [piece19, setPiece19] = useState<Piece>(
    createPieceData([19, "卒", "blue", 6, 6, true])
  );
  const [piece20, setPiece20] = useState<Piece>(
    createPieceData([20, "卒", "blue", 8, 6, true])
  );

  const [piece21, setPiece21] = useState<Piece>(
    createPieceData([21, "炮", "blue", 1, 7, true])
  );
  const [piece22, setPiece22] = useState<Piece>(
    createPieceData([22, "炮", "blue", 7, 7, true])
  );

  const [piece23, setPiece23] = useState<Piece>(
    createPieceData([23, "车", "blue", 0, 9, true])
  );
  const [piece24, setPiece24] = useState<Piece>(
    createPieceData([24, "马", "blue", 1, 9, true])
  );
  const [piece25, setPiece25] = useState<Piece>(
    createPieceData([25, "象", "blue", 2, 9, true])
  );
  const [piece26, setPiece26] = useState<Piece>(
    createPieceData([26, "士", "blue", 3, 9, true])
  );
  const [piece27, setPiece27] = useState<Piece>(
    createPieceData([27, "将", "blue", 4, 9, true])
  );
  const [piece28, setPiece28] = useState<Piece>(
    createPieceData([28, "士", "blue", 5, 9, true])
  );
  const [piece29, setPiece29] = useState<Piece>(
    createPieceData([29, "象", "blue", 6, 9, true])
  );
  const [piece30, setPiece30] = useState<Piece>(
    createPieceData([30, "马", "blue", 7, 9, true])
  );
  const [piece31, setPiece31] = useState<Piece>(
    createPieceData([31, "车", "blue", 8, 9, true])
  );

  const pieces = [
    piece0,
    piece1,
    piece2,
    piece3,
    piece4,
    piece5,
    piece6,
    piece7,
    piece8,
    piece9,
    piece10,
    piece11,
    piece12,
    piece13,
    piece14,
    piece15,
    piece16,
    piece17,
    piece18,
    piece19,
    piece20,
    piece21,
    piece22,
    piece23,
    piece24,
    piece25,
    piece26,
    piece27,
    piece28,
    piece29,
    piece30,
    piece31,
  ];
  const setPieces = [
    setPiece0,
    setPiece1,
    setPiece2,
    setPiece3,
    setPiece4,
    setPiece5,
    setPiece6,
    setPiece7,
    setPiece8,
    setPiece9,
    setPiece10,
    setPiece11,
    setPiece12,
    setPiece13,
    setPiece14,
    setPiece15,
    setPiece16,
    setPiece17,
    setPiece18,
    setPiece19,
    setPiece20,
    setPiece21,
    setPiece22,
    setPiece23,
    setPiece24,
    setPiece25,
    setPiece26,
    setPiece27,
    setPiece28,
    setPiece29,
    setPiece30,
    setPiece31,
  ];

  function setPiece(piece: Piece) {
    const { id } = piece;
    setPieces[id](piece);
  }

  return { pieces, setPiece };
}
