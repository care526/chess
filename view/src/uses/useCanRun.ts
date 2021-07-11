import { useBaseData } from "./useBaseData";
import { PackRunData, useOperates } from "./useOperates";

// 只判断能否行走
export const useCanRun = () => {
  const { lines, columns } = useBaseData();

  const { getLineExistPiecsCount, getColumnExistPiecsCount } = useOperates();
  return [
    // red 车
    ({ currentId, targetId, targetLine, targetColumn }: PackRunData) => {
      if (targetId !== undefined) {
        // 吃子
        console.log(
          lines,
          columns,
          columns[currentId],
          lines[currentId],
          lines[targetId],
          getColumnExistPiecsCount(
            columns[currentId],
            lines[currentId],
            lines[targetId]
          )
        );
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
    },
  ];
};
