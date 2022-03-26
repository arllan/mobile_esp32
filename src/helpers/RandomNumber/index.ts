export function randomNumber() {
  return String(Math.random() * (10000 - 1) + 1);
}

export function randomToString(max: number, min: number) {
  return String(Math.random() * (max - min) + min);
}
