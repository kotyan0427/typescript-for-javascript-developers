export {};

type Mojiretsu = string;

type Profile = {
  name: string;
  age: number;
};

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example1: {
  name: string;
  age: number;
} = {
  name: "kotyan",
  age: 24,
};

const example2: Profile = {
  name: "kotyan",
  age: 24,
};

type Profile2 = typeof example1;
