export {}

function error(message: string): never {
  throw new Error(message);
}

try {
  error('test');
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;

// never型を返す関数のみが格納が可能
let bar: never = error('only me.');
