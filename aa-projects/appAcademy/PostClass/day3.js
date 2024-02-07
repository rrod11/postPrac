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
