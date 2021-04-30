export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "kotyan",
  age: 24,
};

me.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;

const friend: YomitoriSenyoProfile = {
  name: "Yoshio",
  age: 40,
};
