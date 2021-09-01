/*
    Question.
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
*/

const nums = [1,2,3, 2,3,4,5,6,7,8];
const target = 10;
const numObj = {};
// Solution
for (let i = 0; i < nums.length; i++) {
//   if (target - nums[i] in numObj) {
  if (numObj[target - nums[i]]) {
    console.log([numObj[target - nums[i]], i]);
    return [numObj[target - nums[i]], i];
  } else {
    numObj[nums[i]] = i;
  }
}
