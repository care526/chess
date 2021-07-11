import { useState } from "react";
import { pieces } from "../pieceData";

export interface PackRunData {
  currentId: number;
  targetId?: number;
  targetLine?: number;
  targetColumn?: number;
}

export const useBaseData = () => {
  const [ids] = useState<number[]>(pieces.map((_, index) => index));
  const [names, setNames] = useState<string[]>(pieces.map((i) => i.name));
  const [colors, setColorss] = useState<string[]>(pieces.map((i) => i.color));
  const [lines, setLines] = useState<number[]>(pieces.map((i) => i.line));
  const [columns, setColumns] = useState<number[]>(pieces.map((i) => i.column));
  const [isAlives, setIsAlives] = useState<boolean[]>(pieces.map(() => true));
  const [focusId, setFocusId] = useState<number>(-1);
  const [trun, setTrun] = useState<"red" | "blue">("red");

  // function getPointIsAlive(line: number, column: number): boolean {
  //   if (line % 1 !== 0 && column % 1 !== 0) return false;
  //   const id = getId(line, column);
  //   if (id && isAlives[id]) return true;
  //   return false;
  // }

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
    if (startCloumn > endCloumn)
      [startCloumn, endCloumn] = [endCloumn, startCloumn];

    return Array(endCloumn - startCloumn - 1)
      .fill(0)
      .filter((_, index) => {
        const id = getId(line, startCloumn + index);
        return id && isAlives[id];
      }).length;
  }

  function getColumnExistPiecsCount(
    cloumn: number,
    startLine: number,
    endLine: number
  ): number {
    if (startLine > endLine) [startLine, endLine] = [endLine, startLine];

    return Array(endLine - startLine - 1)
      .fill(0)
      .filter((_, index) => {
        const id = getId(startLine + index, cloumn);
        return id && isAlives[id];
      }).length;
  }

  function setPiecePosition(data: PackRunData): boolean {
    if (!canRun(data)) {
      console.log("不能走");
      return false;
    }

    const { currentId, targetId, targetLine, targetColumn } = data;
    // 指定目标id换位置，吃子
    if (targetId !== undefined) {
      // 能不能吃
      setIsAlives(isAlives.map((i, index) => (targetId === index ? false : i)));
      setLines(
        lines.map((i, index) => (currentId === index ? lines[targetId] : i))
      );
      setColumns(
        columns.map((i, index) => (currentId === index ? columns[targetId] : i))
      );
    }
    // 指定空目标地址换位置，移动走棋
    if (targetLine !== undefined && targetColumn !== undefined) {
      // 能不能走
      setLines(lines.map((i, index) => (currentId === index ? targetLine : i)));
      setColumns(
        columns.map((i, index) => (currentId === index ? targetColumn : i))
      );
    }
    return true;
  }

  function canRun(data: PackRunData): boolean {
    return [
      // red 车
      ({ currentId, targetId, targetLine, targetColumn }: PackRunData) => {
        console.log(1);
        if (targetId !== undefined) {
          // 吃子
          return (
            (lines[currentId] === lines[targetId] &&
              getLineExistPiecsCount(
                lines[currentId],
                columns[currentId],
                columns[targetId]
              ) === 0) ||
            (columns[currentId] === columns[targetId] &&
              getColumnExistPiecsCount(
                columns[currentId],
                lines[currentId],
                lines[targetId]
              ) === 0)
          );
        }
        if (targetLine !== undefined && targetColumn !== undefined) {
          console.log(2);
          // 走棋
          return (
            (lines[currentId] === targetLine &&
              getLineExistPiecsCount(
                targetLine,
                columns[currentId],
                targetColumn
              ) === 0) ||
            (columns[currentId] === targetColumn &&
              getColumnExistPiecsCount(
                targetColumn,
                lines[currentId],
                targetLine
              ) === 0)
          );
        }
        return true;
      },
    ][data.currentId](data);
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

    setPiecePosition,
    getLineExistPiecsCount,
    getColumnExistPiecsCount,
  };
};
