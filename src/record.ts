export {};

type ChibalottePlayer = "Ogino" | "Fujioka" | "Tamura" | "Yasuda";

type PlayerData = {
  name: string;
  position: string;
};

const data: Record<ChibalottePlayer, PlayerData> = {
  Ogino: {
    name: "荻野",
    position: "外野手",
  },
  Fujioka: {
    name: "藤岡",
    position: "内野手",
  },
  Tamura: {
    name: "田村",
    position: "捕手",
  },
  Yasuda: {
    name: "安田",
    position: "内野手",
  },
};
