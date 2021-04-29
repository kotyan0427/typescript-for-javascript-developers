export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const runMessage = super.run();
    return `${runMessage} ${this.speed}km`;
  }
}

const lion = new Lion("ライオン", 80);
console.log(lion.run());
// const lion = new Lion();
// console.log(animal.run());
// console.log(lion.run());
