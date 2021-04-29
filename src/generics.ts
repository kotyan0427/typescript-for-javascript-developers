export {};

// function echo(value: number): number {
//   return value;
// }
//
// function echo(value: string): string {
//   return value;
// }

function echo<T>(value: T): T {
  return value;
}

console.log(echo<number>(123));
console.log(echo<string>("Hello"));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<string>("kotyan"));
console.log(new Mirror<number>(123));
console.log(new Mirror<boolean>(true));
