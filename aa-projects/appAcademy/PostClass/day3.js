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
