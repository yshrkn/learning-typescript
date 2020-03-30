export {};

let name: any = 'Ken';

let length = (name as string).length;
// let length = (<string>name).length; JSXと似ているため非推奨

// length = 'foo';
