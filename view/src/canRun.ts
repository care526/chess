interface Params<T = any> {
  startLine: number;
  endLine: number;
  startCloumn: number;
  endCloumn: number;
  mainPoint?: T;
}

export const canRun = {
  车: ({
    startLine,
    endLine,
    startCloumn,
    endCloumn,
    mainPoint,
  }: Params<boolean>) => {
    if (startLine === endLine || startCloumn === endCloumn)
      return true && mainPoint;
  },
};
