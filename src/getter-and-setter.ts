export {};

// * owner
//   * 所有者
//   * 初期化時に設定可能
//   * 途中で変更不可
//   * 参照可能
// * secretNumber
//   * 個人番号
//   * 初期化時に設定可能
//   * 途中で変更可能
//   * 参照不可能
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Ken', 1234567890);
// card.owner = 'test';
console.log(card.owner);
// card.secretNumber;
card.secretNumber = 1111111111;
console.log(card.debugPrint());
console.log(card.secretNumber);