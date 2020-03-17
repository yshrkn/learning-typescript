export {}

class Person {
  name: string;
  age: number;

  // constructor は何も返さないがvoidアノテーションは不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 27);
console.log(taro.profile());