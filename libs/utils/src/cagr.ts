export const calculateCagr = (
  endingValue: number,
  beginningValue: number,
  numberOfYear: number
) => {
  return (Math.pow(endingValue / beginningValue, 1 / numberOfYear) - 1) * 100;
};
