export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "Wow";
  }
}

class Tiger extends Animal {
  cry() {
    return "Wow";
  }
}
