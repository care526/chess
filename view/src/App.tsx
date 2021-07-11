import React from "react";
import { PackRunData, useBaseData } from "./uses/useBaseData";

function App() {
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
    setPiecePosition,
  } = useBaseData();

  function piecesClick(id: number) {
    // 聚焦
    if (trun === colors[id]) {
      // 第一次
      if (focusId === -1) {
        setFocusId(id);
      }
      // 切换聚焦
      if (colors[id] === colors[focusId]) {
        setFocusId(id);
      }
    } else if (focusId !== -1) {
      // 吃子 前要有聚焦
      const data: PackRunData = { currentId: focusId, targetId: id };
      if (!setPiecePosition(data)) return;

      setFocusId(-1);
      setTrun(trun === "red" ? "blue" : "red");
    }

    // // 选择聚焦
    // if (trun === colors[id] && focusId === -1) {
    //   return setFocusId(id);
    // }
    // // 切换聚焦
    // // 吃子

    // // 第一次聚焦
    // if (focusId < 0 && focusId !== id) {
    //   // 判断是不是点击的自己的棋子
    //   if (trun === colors[id]) setFocusId(id);
    //   return;
    // }

    // // 切换聚焦
    // if (colors[id] === colors[focusId]) {
    //   setFocusId(id);
    // } else {
    //   // 吃子
    //   // 判断能不能吃子
    //   // xxx
    //   // setIsOvers(isOvers.map((i, index) => (id === index ? true : i)));
    //   setLines(lines.map((i, index) => (focusId === index ? lines[id] : i)));
    //   setColumns(
    //     columns.map((i, index) => (focusId === index ? columns[id] : i))
    //   );
    //   setFocusId(-1);
    //   setTrun(trun === "red" ? "blue" : "red");
    // }
  }

  function broadClick(event: any) {
    if (focusId < 0) return;

    // 判断一下能不能走
    // xxx
    const targetLine = Math.floor((event.clientY - 10) / 91);
    const targetColumn = Math.floor((event.clientX - 10) / 91);
    if (!setPiecePosition({ currentId: focusId, targetLine, targetColumn }))
      return;

    setFocusId(-1);
    setTrun(trun === "red" ? "blue" : "red");
  }

  const blocks = Array(72)
    .fill(0)
    .map((i, index) => <div className="block" key={index}></div>);

  const piecesBlocks = ids.map((_, index) => (
    <div
      className={[
        "pieces",
        "pieces--" + colors[index],
        "pieces--" + (focusId === ids[index] ? "focus" : "no-focus"),
      ].join(" ")}
      key={index}
      style={{
        top: 10 + lines[index] * 91 + "px",
        left: 10 + columns[index] * 91 + "px",
        display: isAlives[index] ? "block" : "none",
      }}
      onClick={(e) => {
        e.stopPropagation();
        piecesClick(ids[index]);
      }}
    >
      {names[index]}
    </div>
  ));

  return (
    <div className="main" onClick={broadClick}>
      <div className={"broad broad-" + trun}>{blocks}</div>
      {piecesBlocks}
    </div>
  );
}

export default App;
