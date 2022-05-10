let sumRows = (inputArray) => {
  let a1 = [];
  let a2 = [];
  let result = [];
  let len = inputArray.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) {
      a1.push(inputArray[i]);
    } else {
      a2.push(inputArray[i]);
    }
  }
  result.push(a1.reduce((a, b) => a + b, 0));
  result.push(a2.reduce((a, b) => a + b, 0));
  return result;
};
let inputArray = [60, 40, 55, 75, 64];
console.log("result: " + sumRows(inputArray));
