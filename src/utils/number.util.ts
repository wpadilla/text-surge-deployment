export const getPct = (value: number, total: number): number => {
  if (!total) {
    return 0;
  }
  return Math.floor(value * 100 / total);
};

/* equitableDivision: do an equitable division assigning the correct quantity to each numerator
* @param numerator: number to be divided
* @param denominator: quantity of portions to divide
* */
export function equitableDivision(numerator: number, denominator: number): number[] {

  const texterAssignmentsDivided: number[] = [];
  // generate an array according to the denominators
  Array.from(new Array(denominator)).forEach(() => {
    texterAssignmentsDivided.push(Math.ceil(numerator / denominator));
  });

  // calculate the number who rest in the divisions
  const rest = numerator - texterAssignmentsDivided.reduce((a, b) => a + b, 0);
  // consider if the number is negative
  const negative = rest < 0;

  let assignmentIndex = 0;

  Array.from(new Array(Math.abs(rest))).forEach((item, i) => {
    const index = i + 1;
    // parse to negative is needed
    const value = negative ? -index : index;

    if (assignmentIndex > texterAssignmentsDivided.length) {
      assignmentIndex = 0;
    }
    texterAssignmentsDivided[assignmentIndex] += value;

    assignmentIndex = assignmentIndex + 1;
  });

  return texterAssignmentsDivided;

}
