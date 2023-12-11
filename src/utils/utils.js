export function convertToPositiveInteger(numberString) {
  return Math.floor(convertToPositive(numberString));
}

export function convertToPositive(numberString) {
  const number = parseFloat(numberString);
  if (isNaN(number)) {
    return null;
  }
  return Math.abs(number);
}
