import BigNumber from "bignumber.js";

const calculateXpercentofY = (x: number, y: BigNumber) => {
  console.log(x, y);
  if (!x || !y) {
    return 0;
  }
  const percentageAsDecimal = new BigNumber(x).dividedBy(100);
  return percentageAsDecimal.multipliedBy(y);
};

export default calculateXpercentofY;
