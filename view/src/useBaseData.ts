import React, { useState } from "react";
import { pieces } from "./pieceData";

export const useBaseData = () => {
  const [ids] = useState<number[]>(pieces.map((_, index) => index));
  const [names, setNames] = useState<string[]>(pieces.map((i) => i.name));
  const [colors, setColorss] = useState<string[]>(pieces.map((i) => i.color));
  const [lines, setLines] = useState<number[]>(pieces.map((i) => i.line));
  const [columns, setColumns] = useState<number[]>(pieces.map((i) => i.column));
  const [isAlives, setIsAlives] = useState<boolean[]>(pieces.map(() => true));
  const [focusId, setFocusId] = useState<number>(-1);
  const [trun, setTrun] = useState<"red" | "blue">("red");

  function getId(line: number, column: number): number {
    const filterLine = lines
      .map((i, index) => (i === line ? index : -1))
      .filter((i) => i !== -1);
    return columns
      .map((i, index) =>
        filterLine.includes(index) && i === column ? index : -1
      )
      .filter((i) => i !== -1)[0];
  }

  function getLineExistPiecsCount(
    line: number,
    startCloumn: number,
    endCloumn: number
  ): number {
    return Array(endCloumn - startCloumn - 1)
      .fill(0)
      .filter((_, index) => {
        const id = getId(line, startCloumn + index);
        return id && isAlives[id];
      }).length;
  }

  function getPointIsAlive(line: number, column: number): boolean {
    if (line % 1 !== 0 && column % 1 !== 0) return false;
    const id = getId(line, column);
    if (id && isAlives[id]) return true;
    return false;
  }

  return {
    ids,
    names,
    colors,
    lines,
    columns,
    isAlives,
    focusId,
    trun,
    setNames,
    setColorss,
    setLines,
    setColumns,
    setIsAlives,
    setFocusId,
    setTrun,
  };
};
