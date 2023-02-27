function getMaxSubSum(arr) {
  let sum = 0;
  let maxSubSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (maxSubSum < sum) maxSubSum = sum;
    if (sum < 0) sum = 0;
  }
  return maxSubSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); //== 5;
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //== 6;
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //== 11;
console.log(getMaxSubSum([-2, -1, 1, 2])); //== 3;
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //== 100;
console.log(getMaxSubSum([1, 2, 3])); //== 6;
