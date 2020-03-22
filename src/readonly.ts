export {}

class VisaCard {
  constructor(public readonly owner: string) {}
}

const card = new VisaCard('Ken');
console.log(card.owner);
// card.owner = 'K';
