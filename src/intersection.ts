export {};

type Pitcher = {
  thowingSpeed: number;
};

type Batter = {
  battiingAverage: number;
};

type TwoWayPlayer = Pitcher & Batter;

const SasakiRouki: Pitcher = {
  thowingSpeed: 163,
};

const NishiokaTsuyoshi: Batter = {
  battiingAverage: 0.346,
};

const OhTaniSyouhei: TwoWayPlayer = {
  thowingSpeed: 165,
  battiingAverage: 0.322,
};
