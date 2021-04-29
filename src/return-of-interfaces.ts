export {};

class Mahoutsukai {}

class Souryo {}

// class Jiro extends Mahoutsukai,Souryo{}

interface Kenja {
  ionazun(): void;
}

interface GodHand {
  arutemasord(): void;
}

class Taro implements Kenja, GodHand {
  ionazun(): void {
    console.log("イオナズン");
  }
  arutemasord(): void {
    console.log("アルテマソード");
  }
}

const taro = new Taro();
taro.arutemasord();
taro.ionazun();
