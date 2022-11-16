//The factorial function:
function factorial(n) {
  let count = 1;
  let product = 1;
  while (count <= n) {
    product *= count;
    count++;
  }
  return product;
}

//The GCD function:
function GCD(num1, num2) {
  let rem = 1;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  if (num1 < num2) {
    let cup = num2;
    num2 = num1;
    num1 = cup;
  }
  if (num2 === 0) {
    return num1;
  }
  while (num1 >= num2 && rem != 0) {
    rem = num1 % num2;
    num1 = num2;
    num2 = rem;
    if (rem === 0) {
      rem = num1;
      break;
    }
  }
  return rem;
}
//The LCM function:
function LCM(num1, num2) {
  return (num1 * num2) / GCD(num1, num2);
}

//The toHexadecimal function:
function toHexadecimal(num) {
  let temp = "";
  let arr = ["F", "E", "D", "C", "B", "A"];
  while (num > 0) {
    let digit = num % 16;
    if (digit > 9) {
      digit = arr[15 - digit];
    }
    num = Math.floor(num / 16);
    temp += digit;
  }
  let result = "";
  let count = temp.length - 1;
  for (let i = count; count >= 0; count--) {
    result += temp[count];
  }
  return result;
}

module.exports = {
  factorial: factorial,
  GCD: GCD,
  LCM: LCM,
  toHexadecimal: toHexadecimal,
};
