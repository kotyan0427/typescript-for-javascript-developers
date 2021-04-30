export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = MyPick;
type MyPick = {
  [P in "name" | "weight"]: DetailProfile[P];
};

type MyOmit = Pick<DetailProfile, "name" | "weight">;
type SmallProfile = Omit<DetailProfile, "height">;
