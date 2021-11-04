export const addtion = (num1, num2) => {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

export const subtraction = (num1, num2) => {
  return `${num1} - ${num2} = ${num1 - num2}`;
};

export const multiplication = (num1, num2) => {
  return `${num1} × ${num2} = ${num1 * num2}`;
};

export const division = (num1, num2) => {
  if (num2 === 0) return `${num1} ÷ ${num2} = \u221e`;
  return `${num1} ÷ ${num2} = ${+(num1 / num2).toFixed(3)}`;
};

export const checkValid = (inputs) => {
  console.log(inputs);
  return inputs.map((input) => input.isValid).every((value) => value === true);
};
