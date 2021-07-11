import { useBaseData } from "./useBaseData";

export interface PackRunData {
  currentId: number;
  targetId?: number;
  targetLine?: number;
  targetColumn?: number;
}

export const useOperates = () => {
  const {
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
  } = useBaseData();

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
    return Array(endLine - startLine - 1)
      .fill(0)
      .filter((_, index) => {
        const id = getId(startLine + index, cloumn);
        return id && isAlives[id];
      }).length;
  }

  function setPiecePosition(data: PackRunData) {
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
  }

  return {
    setPiecePosition,
    getLineExistPiecsCount,
    getColumnExistPiecsCount,
  };
};
