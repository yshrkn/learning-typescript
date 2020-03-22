export {};

// constructor にアクセス修飾子付きで引数を指定することで初期化処理を自動でしてくれる
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Ken', 27);
console.log(me);
