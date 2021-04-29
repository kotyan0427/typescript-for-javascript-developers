export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "kotyan";
  static lastName: string = "sato";

  static work() {
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());

// let me = new Me();
// console.log(me);
