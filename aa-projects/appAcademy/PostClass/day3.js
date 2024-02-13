// O(n^2) quadratic time
// O(n) linear space
function firstAnagram(str1, str2) {
  let arr1 = str1.split(""),
    arr2 = str2.split("");

  for (let letter of arr1) {
    let index = arr2.indexOf(letter);
    if (index === -1) return false;
    arr2.splice(index, 1);
  }

  return !arr2.length;
}

//  O(n) linear time
//  O(1) constant space
//  Here, the intuitive answer to the space complexity is
//  O(n) because we're adding a separate key in the object
//  for each character. But if the keys in the object are single
//  characters, then how many different keys can we have?
//  How many different chars in the alphabet? A constant number
//  (26 + numbers and symbols for English alphabet).
function thirdAnagram(str1, str2) {
  let letterCounts1 = {},
    letterCounts2 = {};

  str1
    .split("")
    .forEach((e) => (letterCounts1[e] = (letterCounts1[e] || 0) + 1));
  str2
    .split("")
    .forEach((e) => (letterCounts2[e] = (letterCounts2[e] || 0) + 1));

  const haveSameCount = function (obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
      return Object.keys(obj1).every(
        (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
      );
    }
    return false;
  };
  return haveSameCount(letterCounts1, letterCounts2);
}

// O(n) linear time
// O(1) constant space (same logic as above)
function bonusAnagram(str1, str2) {
  let letterSums = {};

  // If we do the exact same subractions for each letter in
  // str2 as we do additions for str1, letter_sums will all be 0.
  str1.split("").forEach((e) => (letterSums[e] = (letterSums[e] || 0) + 1));
  str2.split("").forEach((e) => (letterSums[e] = (letterSums[e] || 0) - 1));

  // It's a zero-sum game!
  return Object.values(letterSums).every((sum) => sum === 0);
}
// O(n^2) time
// O(1) space
function quadraticBiggestFish(fishes) {
  for (let i = 0; i < fishes.length; i++) {
    let fish1 = fishes[i];
    let maxLength = true;
    for (let j = i; j < fishes.length; j++) {
      let fish2 = fishes[j];
      if (fish2.length > fish1.length) maxLength = false;
    }
    if (maxLength) return fish1;
  }
}

// O(n log n) time
// O(1) space
function nlognBiggestFish(fishes) {
  // sort the array longest to shortest
  fishes.sort((a, b) => b.length - a.length);
  //return the first element
  return fishes[0];
}
// O(n) time
// O(1) space
function linearBiggestFish(fishes) {
  let biggestFish = fishes[0];

  for (let fish of fishes) {
    if (fish.length > biggestFish.length) biggestFish = fish;
  }

  return biggestFish;
}

// linear octopus dance
// O(n) time
const tilesArray = [
  "up",
  "right-up",
  "right",
  "right-down",
  "down",
  "left-down",
  "left",
  "left-up",
];

function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    let tile = tilesArray[i];
    if (tile == direction) return i;
  }
}

// constant octopus dance
//use an object for constant lookup
// O(1) time
const tilesObj = {
  up: 0,
  "right-up": 1,
  right: 2,
  "right-down": 3,
  down: 4,
  "left-down": 5,
  left: 6,
  "left-up": 7,
};

function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}

//O(n^2) quadratic time
//O(1) constant space
function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) return true;
    }
  }
  return false;
}

//O(nlogn) linearithmic time
//O(n) linear space
function okayTwoSum1(arr, targetSum) {
  arr.sort();
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let currentSum = arr[i] + arr[j];
    if (currentSum > targetSum) {
      j -= 1;
    } else if (currentSum < targetSum) {
      i += 1;
    } else {
      return true;
    }
  }

  return false;
}

//O(nlogn) linearithmic time
//O(n) linear space
// another implementation using binary search
function okayTwoSum2(arr, targetSum) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = targetSum - num;
    let complement_idx = binarySearch(arr, complement);
    if (complement_idx != -1 && complement_idx != i) {
      return true;
    }
  }

  return false;
}
function binarySearch(array, target) {
  let lowerIdx = 0,
    upperIdx = array.length - 1,
    midIdx;

  while (lowerIdx <= upperIdx) {
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
    if (array[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else if (array[midIdx] > target) {
      upperIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }

  return -1;
}
//O(n) linear time
//O(n) linear space
function twoSum(arr, targetSum) {
  let complements = {};
  for (let num of arr) {
    let complement = targetSum - num;
    if (complements[complement]) return true;
    complements[num] = true;
  }

  return false;
}

//O(n) linear time
//O(n) linear space
// This can be easily adapted to also return the indices of the two numbers:
function twoSumIndices(arr, targetSum) {
  let complements = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let complement = targetSum - num;
    if (complements[complement]) {
      let complement_idx = complements[complement];
      return [i, complement_idx];
    }
    complements[num] = i;
  }
  return [];
}

//O(n^2) quadratic time
//O(n) linear space
function myMin1a(list) {
  let minNum = null;

  for (let num1 of list) {
    dupList = list.slice();
    dupList = dupList.filter((item) => item !== num1);
    if (dupList.every((item) => item > num1)) {
      minNum = num1;
    }
  }

  return minNum;
}

//O(n^2) quadratic time
//O(1) constant space
function myMin1b(list) {
  for (let i = 0; i < list.length; i++) {
    let num1 = list[i];
    let min = true;
    for (let j = 0; j < list.length; j++) {
      let num2 = list[j];
      if (i === j) continue;
      if (num2 < num1) min = false;
    }
    if (min) return num1;
  }
}

//O(n) linear time
//O(1) constant space
function myMin2(list) {
  let minNum = list[0];

  list.forEach(function (num) {
    if (num < minNum) minNum = num;
  });

  return minNum;
}

//O(n^3) cubic time
//O(n^3) cubic space
function largestContiguousSubsum1(array) {
  let subArrays = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      subArrays.push(array.slice(i, j + 1));
    }
  }

  let sumOfArrays = [];
  for (let elt of subArrays) {
    sumOfArrays.push(elt.reduce((a, b) => a + b));
  }
  return Math.max(...sumOfArrays);
}
