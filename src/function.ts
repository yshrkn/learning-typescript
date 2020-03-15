export {};

function bim(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bim(1.73, 74));
