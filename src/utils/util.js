// Problem - How to display math symbols.
// solution 1 - using HTML symbol codes, entities, ASCII characters or Unicode.
//              Reference https://www.toptal.com/designers/htmlarrows/math/
//                        https://flaviocopes.com/javascript-unicode/
// solution 2 - using npm packages (e.g react-mathjax, react-katex)

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
        ? `${num1} \u{000F7} ${num2} = \u{0221E}`
        : `${num1} \u{000F7} ${num2} = ${+(num1 / num2)}`;
    case '^':
      return (
        <>
          {num1}
          <sup>{num2}</sup> = {Math.pow(num1, num2)}
        </>
      );
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

export const reset = ([...objs]) => {
  return [...objs].forEach((obj) => (obj.current.value = ''));
};
