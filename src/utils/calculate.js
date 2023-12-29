export function calculate(number1, number2, operator) {
  switch (operator) {
    case '+':
      return Number(number1) + Number(number2);
      break;
    case '-':
      return Number(number1) - Number(number2);
      break;
    case 'X':
      return Number(number1) * Number(number2);
      break;
    case '%':
      return Number(number1) / Number(number2);
      break;
  }
}