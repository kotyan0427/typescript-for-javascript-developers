export {};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  const calc = values.reduce((accu: number, curr: number) => {
    return accu + curr;
  });
  return calc;
};

console.log(sum(1, 2, 3, 4, 5));
