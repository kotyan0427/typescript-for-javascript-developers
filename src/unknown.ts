export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

console.log(numberAny + 10);

if (typeof numberUnknown === "number") {
  console.log(numberUnknown + 10);
}
