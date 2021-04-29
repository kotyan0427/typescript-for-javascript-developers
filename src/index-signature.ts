export {};

let profile: {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
} = {
  name: "kotyan",
  underTwenty: false,
};

profile.name = "kotyan";
profile.age = 24;
profile.nationality = "日本";

console.log(profile);
