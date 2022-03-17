function convert2DArrayTo1DArray(array) {
  return array.flat().sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

var arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 2, 3],
  [4, 5, 6],
];
var arr2 = [
  [1, 4, 6],
  [7, 8, 10],
  [2, 6, 9],
  [3, 7, 13],
  [1, 5, 12],
];

const output1 = convert2DArrayTo1DArray(arr1);
const output2 = convert2DArrayTo1DArray(arr2);

console.log("Output 1: ", output1);
console.log("Output 2: ", output2);
