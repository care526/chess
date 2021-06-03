import { useState } from "react";

export interface PiecesItem {
  id: number;
  name: string;
  color: string;
  line: number;
  cloumn: number;
  isOver: boolean;
}

export const pieces = [
  { id: 0, name: "车", color: "red", line: 0, cloumn: 0, isOver: false },
  { id: 1, name: "马", color: "red", line: 0, cloumn: 1, isOver: false },
  { id: 2, name: "象", color: "red", line: 0, cloumn: 2, isOver: false },
  { id: 3, name: "士", color: "red", line: 0, cloumn: 3, isOver: false },
  { id: 4, name: "帅", color: "red", line: 0, cloumn: 4, isOver: false },
  { id: 5, name: "士", color: "red", line: 0, cloumn: 5, isOver: false },
  { id: 6, name: "象", color: "red", line: 0, cloumn: 6, isOver: false },
  { id: 7, name: "马", color: "red", line: 0, cloumn: 7, isOver: false },
  { id: 8, name: "车", color: "red", line: 0, cloumn: 8, isOver: false },

  { id: 9, name: "炮", color: "red", line: 2, cloumn: 1, isOver: false },
  { id: 10, name: "炮", color: "red", line: 2, cloumn: 7, isOver: false },

  { id: 11, name: "兵", color: "red", line: 3, cloumn: 0, isOver: false },
  { id: 12, name: "兵", color: "red", line: 3, cloumn: 2, isOver: false },
  { id: 13, name: "兵", color: "red", line: 3, cloumn: 4, isOver: false },
  { id: 14, name: "兵", color: "red", line: 3, cloumn: 6, isOver: false },
  { id: 15, name: "兵", color: "red", line: 3, cloumn: 8, isOver: false },

  { id: 16, name: "卒", color: "blue", line: 6, cloumn: 0, isOver: false },
  { id: 17, name: "卒", color: "blue", line: 6, cloumn: 2, isOver: false },
  { id: 18, name: "卒", color: "blue", line: 6, cloumn: 4, isOver: false },
  { id: 19, name: "卒", color: "blue", line: 6, cloumn: 6, isOver: false },
  { id: 20, name: "卒", color: "blue", line: 6, cloumn: 8, isOver: false },

  { id: 21, name: "炮", color: "blue", line: 7, cloumn: 1, isOver: false },
  { id: 22, name: "炮", color: "blue", line: 7, cloumn: 7, isOver: false },

  { id: 23, name: "车", color: "blue", line: 9, cloumn: 0, isOver: false },
  { id: 24, name: "马", color: "blue", line: 9, cloumn: 1, isOver: false },
  { id: 25, name: "象", color: "blue", line: 9, cloumn: 2, isOver: false },
  { id: 26, name: "士", color: "blue", line: 9, cloumn: 3, isOver: false },
  { id: 27, name: "将", color: "blue", line: 9, cloumn: 4, isOver: false },
  { id: 28, name: "士", color: "blue", line: 9, cloumn: 5, isOver: false },
  { id: 29, name: "象", color: "blue", line: 9, cloumn: 6, isOver: false },
  { id: 30, name: "马", color: "blue", line: 9, cloumn: 7, isOver: false },
  { id: 31, name: "车", color: "blue", line: 9, cloumn: 8, isOver: false },
];
