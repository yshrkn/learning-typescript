export {}

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1992 };

let profile2: {
  name: string
} = { name: 'Ham' };

// 宣言していないキーの代入はエラー
// profile2 = { birthYear: 1992 };

profile2 = { name: 'Nimo' };
