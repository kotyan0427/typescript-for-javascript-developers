export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = "#FF0000",
  WHITE = "#fff",
  GREEN = "#008800",
  BLUE = "#0000FF",
  BLACK = "#000",
  // YELLOW = "#ffff00",
}

let greens = COLORS.GREEN;
console.log({ greens });

enum COLORS {
  YELLOW = "#ffff00",
  GRAY = "#800080",
}
COLORS.YELLOW;
