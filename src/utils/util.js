// Escaped Unicode
// ∞ \u221e
// ² \u00B2
// √ \u221a
// × \u00d7
// ÷ \u00f7
// + \u002b
// - \u2212
// = \u003d
// ^ \0005e

export const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return `${num1} + ${num2} = ${+(num1 + num2)}`;
    case '-':
      return `${num1} - ${num2} = ${+(num1 - num2)}`;
    case '×':
      return `${num1} × ${num2} = ${+(num1 * num2)}`;
    case '÷':
      return num2 === 0
        ? `${num1} ÷ ${num2} = ∞`
        : `${num1} ÷ ${num2} = ${+(num1 / num2)}`;
    case '^':
      return `${num1} ^ ${num2} = ${Math.pow(num1, num2)}`;
    default:
      return;
  }
};

export const checkValid = ([...inputs]) => {
  return [...inputs]
    .map((input) => input.isValid)
    .every((value) => value === true);
};

export const checkIsNaN = ([...inputs]) => {
  return [...inputs].every((value) => !isNaN(value));
};

export const checkIsNull = ([...inputs]) => {
  return [...inputs].every((value) => value !== null);
};
