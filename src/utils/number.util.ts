export const getPct = (value: number, total: number): number => {
  if (!total) {
    return 0;
  }
  return Math.floor(value * 100 / total);
}
