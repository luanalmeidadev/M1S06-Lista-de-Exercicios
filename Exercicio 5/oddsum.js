export function oddSum(array) {
  let odd = array.filter(number => (number % 2 != 0));
  let result = 0;
  for (const number of odd) {
    result += number
  }
  return result;
}