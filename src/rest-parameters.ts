export {};

const reducer = (accumulator: number, currentValue: number): number => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
}

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5);