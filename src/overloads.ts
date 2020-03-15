export {};

// signature
function double(value: number): number;
function double(value: string): string;

// 実装側
// signatureで宣言した型以外はコンパイルエラーになるため、想定外の型への処理を記述する必要はない
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}


console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); error!
