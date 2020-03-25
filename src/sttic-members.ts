export {}

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Ken';
  static lastName: string = 'Yoshihara';

  static work() {
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript?`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());