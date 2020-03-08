export {}


let profile: [string, number] = ['Ham', 43];

// 型の順序を指定しているためエラーになる。
// → 型 'number' を型 'string' に割り当てることはできません。
// profile = [43, 'Ham'];