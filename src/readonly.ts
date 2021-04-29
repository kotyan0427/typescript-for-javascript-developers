export {};

class VisaCard {
  constructor(public owner: string) {}
}

let myVisaCard = new VisaCard("kotyan");
console.log(myVisaCard.owner);
// myVisaCard.owner = "sato";
