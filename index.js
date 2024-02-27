/* Write a function to get the lowest, highest and average value in the array (with and without sort function).
Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

const findArray = function (arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return [`lowest: ${min}`, `highest: ${max}`, `average: ${sum / arr.length}`];
};

console.log(findArray([12, 5, 23, 18, 4, 45, 32]));

/* Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

const arrayOfWords = function (arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result += ` and ${arr[i]}`;
    } else {
      result += `${arr[i]}, `;
    }
  }
  return result;
};

console.log(arrayOfWords(["apple", "banana", "cherry", "date"]));

/* Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”] */

const splitString = function (arr) {
  let word = "";
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      word += arr[i];
    } else {
      result.push(word);
      word = "";
    }
  }
  result.push(word);
  return result;
};

console.log(splitString("hello world"));

/* Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

const sumArray = function (arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
};

console.log(sumArray([1, 2, 3], [3, 2, 1]));

/* Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/

const addElement = function (arr, newElement) {
  let isFound = false;
  let newArray = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newElement) {
      isFound = true;
    }
  }
  if (isFound) {
    return arr;
  } else {
    newArray.push(newElement);
    return newArray;
  }
};

console.log(addElement([1, 2, 3, 4], 4));

/* Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
*/

const removeOddNumber = function (array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
};

console.log(removeOddNumber([1, 2, 3, 4, 5, 6]));

/* Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
array can only contain 5 elements).
Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6]
*/

const insertIntegers = function (maxSize, integers) {
  let array = [];
  let number = "";
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] !== "," && integers[i] !== " ") {
      number += integers[i];
    } else if (number !== "") {
      array.push(Number(number));
      number = "";
    }
  }
  array.push(Number(number));
  let result = array.slice(0, maxSize);
  return result;
};

console.log(insertIntegers(4, "5, 10, 24, 3, 6, 7, 8"));

const insertIntegers2 = function (maxSize, ...int) {
  return int.splice(0, maxSize);
};

console.log(insertIntegers2(5, 1, 2, 3, 4, 5, 6));

/* Write a function that will combine 2 given array into one array
Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/

const combineArray = function (arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr2[i]);
  }
  return newArray;
};

console.log(combineArray([1, 2, 3], [4, 5, 6]));

/* Write a function to find duplicate values in an array
Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/

const duplicateArray = function (arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (seen[arr[i]] === 1) {
        duplicates.push(arr[i]);
      }
      seen[arr[i]]++;
    } else {
      seen[arr[i]] = 1;
    }
  }
  console.log(seen);
  return duplicates;
};

console.log(duplicateArray([1, 1, 1, 1, 1, 1, 2, 2]));

/* Write a function to find the difference in 2 given array
Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/

const findDifference = function (arr1, arr2) {
  let combine = arr1.concat(arr2);
  let seen = {};
  let res = [];

  for (let i = 0; i < combine.length; i++) {
    if (!seen[combine[i]]) {
      seen[combine[i]] = 1;
    } else {
      seen[combine[i]]++;
    }
  }

  for (let number in seen) {
    if (seen[number] === 1) {
      res.push(Number(number));
    }
  }
  return res;
};

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

/* Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []];
The function will return [1, undefined, “string”] */

const primitive = function (datas) {
  let res = [];

  for (let data of datas) {
    if (data === null) {
      res.push(data);
    } else if (typeof data !== "object") {
      res.push(data);
    }
    console.log(data);
  }
  return res;
};

console.log(primitive([1, [], undefined, {}, "string", {}, [], null]));

/* Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

const secondSmallest = function (num) {
  num.sort();
  return num[1];
};

/* Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/

const sumOfArray = function (arr) {
  let sum = 0;
  for (let i of arr) {
    if (typeof i === "number") {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfArray(["3", 1, "string", null, false, undefined, 2]));

/* Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
The function will return 40
*/

const sumDuplicates = function (arr) {
  let seen = {};
  let sum = 0;

  for (let i of arr) {
    if (!seen[i]) {
      seen[i] = 1;
    } else {
      seen[i]++;
    }
  }

  for (let num in seen) {
    if (seen[num] > 1) {
      sum += Number(num) * seen[num];
    }
  }

  console.log(seen);
  return sum;
};

console.log(sumDuplicates([10, 20, 40, 10, 50, 30, 10, 60, 10, 20, 20]));

/* Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win' */

const game = function (par) {
  let random = Math.random();
  let us = "";
  if (random < 0.3) {
    us = "rock";
  } else if (random < 0.6) {
    us = "paper";
  } else {
    us = "scissor";
  }

  console.log(us);

  if (par === us) {
    return "Draw";
  } else if (par === "rock" && us === "paper") {
    return "Lose";
  } else if (par === "rock" && us === "scissor") {
    return "Win";
  } else if (par === "paper" && us === "scissor") {
    return "Lose";
  } else if (par === "paper" && us === "rock") {
    return "Lose";
  } else if (par === "scissor" && us === "rock") {
    return "Lose";
  } else if (par === "scissor" && us === "paper") {
    return "Win";
  }
};

console.log(game("rock"));

const game2 = function (playerChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  console.log("Computer choice:", computerChoice);

  if (playerChoice === computerChoice) {
    return "Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
};

console.log(game2("paper"));
