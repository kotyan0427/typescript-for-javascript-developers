export {};

// bmi(身長・体重・console.logで出力するかどうか)

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const result: number = weight / (height * height);
  if (printable) {
    console.log(result);
  }
  return result;
};

// bmi(1.7, 65, true);
// bmi(1.7, 65, false);
bmi(1.7, 65);
