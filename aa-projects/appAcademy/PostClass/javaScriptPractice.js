function iterateThroughWord(word) {
  console.log(word);
  console.log(word[0]); // u
  console.log(word[word.length - 1]); // a

  for (let i = 0; i <= word.length - 1; i++) {
    console.log("index", i, "value", word[i]);
    /// dynamic changing i variable that is different each iteration
    //  we plug in each time to get the value at that index
  }
}

console.log(iterateThroughWord("umbrella"));

///// REVERSING A STRING
/// reverse a name
function reverseName(name) {
  let res = "";
  for (let i = name.length - 1; i >= 0; i--) {
    let letter = name[i];
    console.log("i", i, "letter", letter);
    res += letter;
    console.log(res);
  }
  return res;
}

console.log(reverseName("RODERICK"));

function pigLatinWord(word) {
  let vowels = "aeiou";
  if (vowels.includes(word[0])) {
    return word + "yay";
  }
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      let first = word.slice(i);
      let second = word.slice(0, i);
      return first + second + "ay";
    }
  }
}

function pigLatinWord(word) {
  let vowels = "aeiou";
  if (vowels.includes(word[0])) {
    return word + "yay";
  }
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      let firstPart = word.slice(i);
      let secondPart = word.slice(0, i);
      return firstPart + secondPart + "ay";
    }
  }
}

// hard coding the ATM example

let balance = 10;
// let balance = 20; // causes an error because balance is already defined
// balance = 20; // changes the value

//main function - the atm itself
function ATM(transaction, amount) {
  if (transaction === "Check Balance") {
    return checkBalance(balance);
  } else if (transaction === "Withdraw") {
    return (balance = withdraw(balance, amount));
  } else if (transaction === "Deposit") {
    return (balance = deposit(balance, amount));
  } else {
    console.log("Thats not it chief");
  }
}

function withdraw(initialBalance, requestedAmount) {
  if (requestedAmount > initialBalance) {
    console.log("insufficient Funds");
  } else {
    console.log("Dispending: ", requestedAmount);
    // balance -= requestedAmount;
    // return balance;
    initialBalance = initialBalance - requestedAmount;
    return initialBalance;
  }
}

function deposit(initialBalance, depositAmount) {
  console.log("Deposiing: $", depositAmount);
  initialBalance += depositAmount;
  console.log("your balance is now: $" + initialBalance);
}

// deposit(balance, 50);

// console.log(balance);
// withdraw(balance, 5);
// checkBalance(balance);

// console.log(checkBalance(balance)); // default return is undefined when running console.log
// checkBalance(balance); // returns the value in the function

// console.log completely inconsequential and only for the programmer; does nothing to the program
// ATM("Brain", 2);
// ATM("Check Balance");
// ATM("Deposit", 2);

/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array.forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

// function myForEach(array, cb) {
//   for (let ele of array) {
//     cb(ele);
//   }
// }

/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]
*******************************************************************************/

function myMap(array, cb) {
  let arr = [];
  for (let ele of array) {
    arr.push(cb(ele));
  }
  return arr;
}

/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {
  for (let i = 0; i < n; i++) {
    val = cb(val);
  }
  return val;
}

/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array.filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

function myFilter(array, cb) {
  let arr = [];
  for (let ele of array) {
    if (cb(ele)) {
      arr.push(ele);
    }
  }
  return arr;
}

/*******************************************************************************
Write a function `selectiveMap` that accepts an array and two callbacks as arguments.
The function should return a new array where elements are replaced with the results
of calling the second callback on the element only if calling the first callback
on the element results in true. If calling the first callback on an element results
in false, then the element should not be changed in the new array.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

function isEven(n) {
    return n % 2 === 0;
}

function isPositive(n) {
    return n > 0;
}

function square(n) {
    return n * n;
}

function flipSign(n) {
    return n * -1;
}

console.log(selectiveMap([8, 5, 10, 4], isEven, square));
// [ 64, 5, 100, 16 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isEven, flipSign));
// [ 10, -4, 7, -6, 2, -9 ]

console.log(selectiveMap([-10, 4, 7, 6, -2, -9], isPositive, square));
// [-10, 16, 49, 36, -2, -9]
*******************************************************************************/

function selectiveMap(array, selector, mapper) {
  let arr = [];
  for (let ele of array) {
    if (selector(ele)) {
      arr.push(mapper(ele));
    } else {
      arr.push(ele);
    }
  }
  return arr;
}

/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]
*******************************************************************************/

function reject(array, cb) {
  let arr = [];
  for (let ele of array) {
    if (!cb(ele)) {
      arr.push(ele);
    }
  }
  return arr;
}

/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

function mySome(array, cb) {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    let boolean = cb(el, i);
    if (boolean === true) {
      return true;
    }
  }
  return false;
}

/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

function count(array, cb) {
  let count = 0;
  for (let ele of array) {
    if (cb(ele)) {
      count++;
    }
  }
  return count;
}

/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

function chainMap(val, ...callbacks) {
  for (let cb of callbacks) {
    val = cb(val);
  }
  return val;
}

/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array.every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

function myEvery(array, cb) {
  for (let ele of array) {
    if (!cb(ele)) return false;
  }
  return true;
}

// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

// Constraints

// 1 ≤ a[i] ≤ 100
// 1 ≤ b[i] ≤ 100
// Sample Input 0

// 5 6 7
// 3 6 10
// Sample Output 0

// 1 1
// Explanation 0

// In this example:

// Now, let's compare each individual score:

// , so Alice receives  point.
// , so nobody receives a point.
// , so Bob receives  point.
// Alice's comparison score is , and Bob's comparison score is . Thus, we return the array .

// Sample Input 1

// 17 28 30
// 99 16 8
// Sample Output 1

// 2 1
// Explanation 1

// Comparing the  elements,  so Bob receives a point.
// Comparing the  and  elements,  and  so Alice receives two points.
// The return array is .

function compareTriplets(a, b) {
  let arr = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      arr[0] += 1;
    }
    if (a[i] < b[i]) {
      arr[1] += 1;
    }
  }
  return arr;
}

// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .
// Return

// long: the sum of all array elements
// Input Format

// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Output Format

// Return the integer sum of the elements in the array.

// Constraints

// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015
// Note:

// The range of the 32-bit integer is .
// When we add several integer values, the resulting sum might exceed the above range. You might need to use long int C/C++/Java to store such sums.

function aVeryBigSum(ar) {
  // Write your code here
  let sums = 0;
  for (let ele of ar) {
    sums += ele;
  }
  return sums;
}

/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

function andSelect(array, cb1, cb2) {
  let arr = [];
  for (let ele of array) {
    if (cb1(ele)) {
      if (cb2(ele)) {
        arr.push(ele);
      }
    }
  }
  return arr;
}

/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/

function exactly(array, num, cb) {
  let arr = [];
  for (let ele of array) {
    if (cb(ele)) {
      arr.push(ele);
    }
  }
  if (arr.length === num) {
    return true;
  }
  return false;
}

/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {
  let value;
  if (cb === undefined) {
    for (let ele of array) {
      if (value > ele || value === undefined) {
        value = ele;
      }
    }
    return value;
  } else {
    for (let ele of array) {
      if (value > cb(ele) || value === undefined) {
        value = cb(ele);
      }
    }
  }
  return value;
}

/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

function mapMutator(array, cb) {
  array.map((ele, i) => {
    array[i] = cb(ele, i);
  });
}

/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

let sentenceMapper = function (sentence, cb) {
  let words = sentence.split(" ");
  let newSentence = words.map(cb);
  return newSentence.join(" ");
};

/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

function suffixCipher(sentence, cipher) {
  let words = sentence.split(" ");
  const newSentence = words.map((word) => {
    for (let suffix in cipher) {
      if (word.endsWith(suffix)) {
        return cipher[suffix](word);
      }
    }
    return word;
  });
  return newSentence.join(" ");
}

/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function (array, cb1, cb2) {
  let arr = [];
  for (let ele of array) {
    if (
      (cb1(ele) === true && cb2(ele) === false) ||
      (cb1(ele) === false && cb2(ele) === true)
    ) {
      arr.push(ele);
    }
  }
  return arr;
};

/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/

function one(array, cb) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i)) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }
  return count === 1;
}

/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

function greaterCallbackValue(val, cb1, cb2) {
  let value;
  if (cb1(val) > cb2(val)) {
    value = cb1(val);
  } else {
    value = cb2(val);
  }
  return value;
}

/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

function none(array, cb) {
  for (let ele of array) {
    if (cb(ele)) {
      return false;
    }
  }
  return true;
}

/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
no more than `max` elements of the array that result in true when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false
*******************************************************************************/

function atMost(array, max, cb) {
  let arr = [];
  for (let ele of array) {
    if (cb(ele)) {
      arr.push(ele);
    }
  }
  if (arr.length > max) {
    return false;
  }
  return true;
}

/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.

Examples:

let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1
*******************************************************************************/

function firstIndex(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return i;
    }
  }
  return -1;
}

/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]
*******************************************************************************/

function alternatingMap(array, cb1, cb2) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      arr.push(cb1(array[i]));
    } else {
      arr.push(cb2(array[i]));
    }
  }
  return arr;
}

/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array.reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8
*******************************************************************************/

function mySimpleReduce(array, cb) {
  acc = array[0];
  for (let i = 1; i < array.length; i++) {
    acc = cb(acc, array[i]);
  }
  return acc;
}

/*
 Given the below array, write a function printNames that prints the
name of every object in the array.
*/

/*
// const users = [
//   {
//     name: "Gerald",
//     age: 23,
//     height: 68,
//   },
//   {
//     name: "Winnie",
//     age: 35,
//     height: 62,
//   },
//   {
//     name: "Peter",
//     age: 61,
//     height: 72,
//   },
// ];

// const printNames = (users) => {
//   //   for (let i = 0; i < users.length; i++) {
//   //     let obj = users[i];
//   //     if ("name" in obj) {
//   //       console.log(obj.name);
//   //     }
//   //   }
//   // };
//   for (let dub of users) {
//     console.log(dub.name);
//   }
//   //   for (let key of users) {
//   //     console.log(key.name);
//   //   }
// };

// printNames(users); // Gerald Winnie Peter
*/
/*
Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

HINT: use a for loop
*/
// function printObject(obj) {
//   for (let key in obj) {        // for in for objects.... for of for arrays
//     console.log(key + " - " + obj[key]);
//   }
// }

// let bootcamp = {
//   name: "App Academy",
//   color: "Red",
//   population: 120,
// };

// printObject(bootcamp); // prints
// // name - App Academy

/*
Given the object below, use Object.keys() to iterate through the object and
print all its values.
*/

// const obj = {
//   first: "1",
//   second: 2,
//   third: "three",
// };

// // let keys = Object.keys(obj);

// // for (let key of keys) {
// //   console.log(obj[key]);
// // }

// for (let key in obj) {
//   //   console.log(key);  /// prints the keys
// //   console.log(obj[key]); // prints the values
// }

/*
Given the object below, use Object.keys() to iterate through the object and
print the value if there are 3 or more "e"s shared between the key and value.
*/
const obj = {
  red: "circle",
  blue: "square",
  green: "hexagon",
};

// 1. we want to grab all the keys
// 2. create a counter variable
// 3. create a helper function that counts all e's
// 4. loop through keys
// 5. grab values using keys
// 6. use the helper function to add to our counter and check if the counter is greater than 3 each iteration

// function find3Es(obj) {
//   let keys = Object.keys(obj);
//   let counter = 0;
//   for (let key of keys) {
//     let value = obj[key];

//     counter += countEs(key);
//     counter += countEs(value);

//     if (counter >= 3) {
//       console.log(value);
//     }
//     counter = 0;
//   }
// }
// // => return a count

// function countEs(word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase() === "e") {
//       count++;
//     }
//   }
//   return count;
// }

// find3Es(obj); // hexagon

// Explicit Return
// we have to explicitly use the curly and the return keyword
// we do so whenever our statement cannot be done on one line

let addNums = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

// console.log(addNums(10, 5)); // 15

// Implicit Return
// we can omit the return keyword and "curlys"
//if our statement can be done in one line

let addNums2 = (num1, num2) => num1 + num2;

let show = {
  name: "star trek",
  series: ["tos", "tng", "ds9", "voy"],
  captains: {
    tos: "kirk",
    tng: "picard",
    ds9: "sisko",
    voy: "janeway",
  },
};

let keysArr = Object.keys(show);
// console.log(keysArr);

// now that we have an array of keys
//we can iterate through this array to get the values
for (let i = 0; i < keysArr.length; i++) {
  let key = keysArr[i];
  //   console.log("key", key);
  //   console.log("value", show[key]);
}

// get all the values
let valuesArr = Object.values(show);
// console.log(valuesArr);

//gets all entries
//returns a matrix with nested arrays, with the keys as the first index
//the value as the second index
let entryArr = Object.entries(show);
// console.log(entryArr);

/*
ADVANCED ARRAYS
    -arrays are just POJOs
    -
*/
let myArr = [5, 6, 7, 8];
//           0  1  2  3
let fakeArr = {
  0: 5,
  1: 6,
  2: 7,
  3: 8,
  length: 4,
  push: (val) => {
    fakeArr[fakeArr.length] = val;
    fakeArr.length += 1;
  },
  forEach: (cb) => {
    for (let i = 0; i < fakeArr.length; i++) {
      cb(fakeArr[i]);
    }
  },
};
let myCallBack = (element) => console.log(element);
// myArr.forEach(myCallBack);
// fakeArr.forEach(myCallBack);

// console.log(myArr); // [ 5, 6, 7, 8 ]
// console.log(fakeArr); // { '0': 5, '1': 6, '2': 7, '3': 8 }
// console.log(myArr[1]); // 6
// console.log(fakeArr[1]); // 6
// console.log(myArr.length); // 4
// console.log(fakeArr.length); // undefined if not an actual key in an object
// console.log(myArr.push(9)); // returns new length
// console.log(fakeArr.push(9)); // .push is not a function for objects have to manually add key or function
// myArr.push(9);
// fakeArr.push(9);
// console.log(myArr);
// console.log(fakeArr);

// const array1 = ["a", "b", "c"];

// array1.forEach(myCallBack); //for each needs a function to function

// expected output: 'a'
// expected output: 'b'
// expected output: 'c'

// forEach, map, filter,

/*
Given the array friends below, use the Array.forEach() method to iterate through each element and print the name and yearsOfFriendship properties stylized as "name: yearsOfFriendship years".
*/

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3,
  },
  {
    name: "Angela",
    yearsOfFriendship: 2,
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8,
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6,
  },
];

//forEach

friends.forEach((friends) => {
  let myStr = friends.name + ":" + " " + friends.yearsOfFriendship + " years";
  console.log(myStr);
});

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/

/*
Given the array friends below, use the Array.map() method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Then print the newly
mapped array.
*/

//map

let newArr = friends.map((friends) => {
  if (friends.yearsOfFriendship > 5) {
    return friends.name;
  }
  return null;
});

console.log(newArr);

//filter
//-callback returns true or false, if true include in new array
//-otherwise ignore it

let filteredArr = friends.filter((friends) => {
  if (friends.name[0] === "A" && friends.yearsOfFriendship > 5) {
    //   if (friends.yearsOfFriendship > 5) {
    return true;
  }
  return false;
});

console.log(filteredArr);

//find
//-essentially .includes but you specify the criteria with a callback
//-flexible .includes

//reduce
// let totalYears = friends.reduce((accummulator, friends) => {
//   return accummulator + friends.yearsOfFriendship;
// });
let totalYears = friends.reduce((accummulator, friends) => {
  if (typeof accummulator === "object") {
    return accummulator.yearsOfFriendship + friends.yearsOfFriendship;
  }
  return accummulator + friends.yearsOfFriendship;
});
console.log(totalYears);

/*
Given the following declaration of an object, obj below, declare values so
that the print statements output what is expected. Try using both dot and bracket notation.
*/
// const obj = {};

obj.object = {};
obj.boolean = false;
obj["numeric"] = 2;
obj["firstKey"] = "firstValue";

console.log(obj["firstKey"]); // firstValue
console.log(obj["numeric"]); // 2
console.log(obj["boolean"]); // false
console.log(obj["object"]); // {}

/*
Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.
*/

// const obj = {
//   first: "1",
// };

// delete obj["first"];
delete obj.first;

console.log(obj); // {}

/*
Write a function that accepts an object, obj, and a string, str and prints
the value from the object at the key str.
*/
// const obj = {
//   first: "1",
//   second: 2,
//   third: "three",
// };

const str = "first";

let variableAsKey = (obj, str) => {
  console.log(obj[str]);
};

variableAsKey(obj, str); // "1" (looks like 1 in terminal)
variableAsKey(obj, "second"); // 2

/*
Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.
*/
// let catBuilder = (name, color, toys) => {
//   //   let cat = {
//   //     name: name,
//   //     color: color,
//   //     toys: toys,
//   //   };
//   //   return cat;
//   let cat = {};
//   cat.name = name;
//   cat.color = color;
//   cat.toys = toys;
//   return cat;
// };

// console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

// console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

/*
In this practice, you will practice navigating objects that are nested within
an array. Given the below array, write a function printNames that prints the
name of every object in the array.
*/
// const users = [
//   {
//     name: "Gerald",
//     age: 23,
//     height: 68,
//   },
//   {
//     name: "Winnie",
//     age: 35,
//     height: 62,
//   },
//   {
//     name: "Peter",
//     age: 61,
//     height: 72,
//   },
// ];

// let printNames = (user) => {
//   //   for (let i = 0; i < user.length; i++) {
//   //     console.log(user[i].name);
//   //   }
//   //   for (let key of user) {
//   //     console.log(key.name);
//   //   }
//   //   for (let i = 0; i < user.length; i++) {
//   //     if ("name" in user[i]) {
//   //       console.log(user[i].name);
//   //     }
//   //   }
// };

// printNames(users);

/*
Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.

HINT: use a for loop
*/
// let bootcamp = {
//   name: "App Academy",
//   color: "Red",
//   population: 120,
// };

// function printObject(obj) {
//   for (let keys in obj) {
//     let val = obj[keys];
//     console.log(keys + " - " + val);
//   }
// }

// printObject(bootcamp); // prints
// // name - App Academy
// // color - Red
// // population - 120

/*
Given the object below, use Object.keys() to iterate through the object and
print all its values.
*/

// const obj = {
//   first: "1",
//   second: 2,
//   third: "three",
// };

// let val = Object.keys(obj);
// for (let key of val) {
//   console.log(obj[key]);
// }

// console.log(val);

// let arr = [1, 1, 3, 2, 2, 1];

// const result = arr.reduce(function (acc, value) {
//   if (acc[value]) {
//     acc[value]++;
//     // console.log("first return:", acc[value]++);
//   } else {
//     acc[value] = 1;
//     // console.log("else first return:", acc[value]);
//   }
// //   console.log("actual first return:", acc);
//   return acc;
// }, {});

// console.log(result);

// let arr = [1, 1, 3, 2, 2, 1];

// const result = arr.reduce(callback, {});

// function callback(acc, value) {
//   console.log(acc, value);
//   if (acc[value]) {
//     acc[value]++;
//   } else {
//     acc[value] = 1;
//   }
//   return acc;
// }

// console.log(result);

let arr1 = [1, 1, 3, 2, 2, 1];
//         0  1  2  3  4  5

const result = arr1.reduce(callback, {});

function callback(acc, elem, index, array) {
  console.log("------------------");
  console.log("Iteration: " + index);
  console.log("------------------");
  console.log(acc, elem, " at index " + index);
  if (acc[elem]) {
    acc[elem]++;
  } else {
    acc[elem] = 1;
  }
  console.log(acc, elem);
  return acc;
}

console.log("------------------");
console.log("Final Return Value");
console.log("------------------");
console.log(result);

/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  obj = {};
  return array.reduce(cb, obj);

  function cb(obj, ele) {
    if (obj[ele]) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
    return obj;
  }
}

/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
  let count = 0;
  for (let keys in appleObj) {
    if (keys.toLowerCase().includes("apple")) {
      count++;
    }
  }
  return count;
}

/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

// function keysInObject(obj) {
//   return Object.keys(obj);
// }
function keysInObject(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

/***********************************************************************
Write a function `setKeyInObject(obj, string, value)` that takes in three
parameters. The first parameter is an object, the second parameter will be a
string and the third parameter will be a value. Your job is to return the object
adding the second parameter as a key using the third parameter as its value.

Examples:

let obj = {}
setKeyInObject(obj, "apple", "yum"); // => {apple: "yum"}

let obj1 = {str: "hello"}
setKeyInObject(obj1, "num", 3); // => {str: "hello", num: 3}
***********************************************************************/

function setKeyInObject(obj, string, value) {
  obj[string] = value;
  return obj;
}

/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

// function valuesInObject(obj) {
//   return Object.values(obj);
// }
function valuesInObject(obj) {
  let arr = [];
  for (let item in obj) {
    arr.push(obj[item]);
  }
  return arr;
}

/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  let object = {};
  for (let obj of people) {
    const { name, score } = obj;
    if (object[name]) {
      object[name] += score;
    } else {
      object[name] = score;
    }
  }
  return object;
}

/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj = {};
  for (let letter of string) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}

/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let arr = [];
  arr.push(obj1[key]);
  arr.push(obj2[key]);
  return arr;
}

/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {
  for (let keys in obj) {
    if (keys.includes(key)) {
      return true;
    }
  }
  return false;
}

/* 01. `firstFruitObject()` - Return the first object in the fruits array

console.log(firstFruitObject(fruits));
// { genus: 'Malus', name: 'Apple', id: 6, family: 'Rosaceae', order:
// 'Rosales', nutritions: { carbohydrates: 11.4, protein: 0.3, fat: 0.4,
// calories: 52, sugar: 10.3 } }
*/

function firstFruitObject(fruits) {
  return fruits[0];
}

/* 02. `lastFruitObject()` - Return the last object in the fruits array

console.log(lastFruitObject(fruits));
// { genus: 'Citrullus', name: 'Watermelon', id: 25, family: 'Cucurbitaceae',
// order: 'Cucurbitales', nutritions: { carbohydrates: 8, protein: 0.6, fat:
// 0.2, calories: 30, sugar: 6 } }
*/

function lastFruitObject(fruits) {
  return fruits[fruits.length - 1];
}

/* 03. `indexFruitObject()` - Return one object at the given index from the
fruits array. The function should have two parameters, the array and the
index of the item.

console.log(indexFruitObject(17, fruits));
// { genus: 'Mangifera', name: 'Mango', id: 27, family: 'Anacardiaceae',
// order: 'Sapindales', nutritions: { carbohydrates: 15, protein: 0.82, fat:
// 0.38, calories: 60, sugar: 13.7 } };
*/

function indexFruitObject(index, fruits) {
  return fruits[index];
}

/* 04. `fruitNames()` - Return a list of all of the fruit names

console.log(fruitNames(fruits));
// [ 'Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Durian',
    'Fig', 'Gooseberry', 'Grapes', 'GreenApple', 'Guava', 'Kiwi', 'Lemon',
    'Lime', 'Lingonberry', 'Lychee', 'Mango', 'Melon', 'Orange', 'Papaya',
    'Passionfruit', 'Pear', 'Persimmon', 'Pineapple', 'Plum', 'Raspberry',
    'Strawberry', 'Tomato', 'Umbu', 'Watermelon' ];
*/

function fruitNames(fruits) {
  let arr = [];
  for (let fruit of fruits) {
    arr.push(fruit.name);
  }
  return arr;
}

/* 05. `getFruitKeys()` - Return a list of all of the keys for each fruit record.
NOTE: Call a function you previously wrote as a helper function.

// console.log(getFruitKeys(fruits));
// // [ 'genus', 'name', 'id', 'family', 'order', 'nutritions' ];
*/

function getFruitKeys(fruits) {
  return Object.keys(indexFruitObject(0, fruits));
}

/* 06. `getNutritionsKeys()` - Return a list of all of the keys within each
"nutritions" object.
NOTE: Can you use a different approach than what you used in the previous
problem? Can you use a helper function?

console.log(getNutritionsKeys(fruits));
// [ 'carbohydrates', 'protein', 'fat', 'calories', 'sugar' ];
*/

function getNutritionsKeys(fruits) {
  for (let fruit of fruits) {
    return Object.keys(fruit.nutritions);
  }
}

const fruits = require("../fruit-data");

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
  for (let fruit of array) {
    fruit[key] = value;
  }
  return array;
}

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
  let fruit = array[index];
  fruit[key] = value;
  return fruit;
}

/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
  for (let key of array) {
    key[newKey] = key[oldKey];
    delete key[oldKey];
  }
  return array;
}

/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
  const newIds = [];

  for (let i = 0; i < array.length; i++) {
    const newId = array[i].id.toString().padStart(6, "0");
    array[i].id = newId;
    newIds.push(newId);
  }

  return newIds;
}

console.log(updateIdValues(fruits));

/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {
  array.forEach((fruit) => {
    let nutrue = fruit.nutritions;
    delete nutrue[keyToDelete];
  });
  return array;
}

/***********************************************************************
Write a function `keyValueDuplicates(obj)` that takes an object as
an argument and returns an array containing all keys that are also
values in that object.

Examples:

obj1 = { orange: "juice", apple: "sauce", sauce: "pan" };
console.log(keyValueDuplicates(obj1)); // ["sauce"]

obj2 = { big: "foot", foot: "ball", ball: "boy", boy: "scout" };
console.log(keyValueDuplicates(obj2)); // ["foot", "ball", "boy"]

obj3 = { pizza: "pie", apple: "pie", pumpkin: "pie" };
console.log(keyValueDuplicates(obj3)); // []
***********************************************************************/

function keyValueDuplicates(obj) {
  let arr = [];
  for (let keys in obj) {
    if (Object.values(obj).includes(keys)) {
      arr.push(keys);
    }
  }
  return arr;
}

/***********************************************************************
Write a function `mostFrequentLetter(string)` that takes a
string as an argument and returns the character that appears the
most often. In case of a tie, you may return any of the characters.
The string will have at least one character.

Examples:

console.log(mostFrequentLetter("apple")); // "p"
console.log(mostFrequentLetter("banana")); // "a"
console.log(mostFrequentLetter("What about a longer string?")); // " "
***********************************************************************/

function mostFrequentLetter(string) {
  let obj = {};
  for (let letter of string) {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  let val = 0;
  let goal;
  for (let letter in obj) {
    if (obj[letter] > val) {
      val = obj[letter];
      goal = letter;
    }
  }
  return goal;
}

/*******************************************************************************
Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Example:

employees = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 40000 },
  { name: "Carol", salary: 60000 },
  { name: "Dan", salary: 70000 },
  { name: "Ellen", salary: 100000 },
];

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
*******************************************************************************/

function employeeRaises(employees) {
  let arr = [];
  for (let employee of employees) {
    if (employee.salary < 50000) {
      newSalary = employee.salary * 1.1;
      arr.push({ name: employee.name, salary: newSalary });
    }
  }
  return arr;
}

/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front. Use a tax percentage of 9%.

Hint: Look up `toFixed()` on MDN

Examples:

console.log(salesTax(30, 70)); // '$9.00'
console.log(salesTax(1.12, 2.23, 3.34, 4.45)); // '$1.00'
console.log(salesTax(4.99, 9.99, 19.99)); // '$3.15'
***********************************************************************/

const salesTax = (...prices) => {
  let sum = 0;
  for (let price of prices) {
    sum += price;
  }
  sum *= 0.09;
  return `$${sum.toFixed(2)}`;
};

/***********************************************************************
Write a function called `dynamicAdder(num)`. The dynamicAdder function will
return a new function that will allow us to create new separate custom
adding functions.


Look below to see how this function is invoked:

const addTwo = dynamicAdder(2); // returns a function
console.log(addTwo(5)); // 7

const addTen = dynamicAdder(10); // returns a function
console.log(addTen(5)); // 15

const addNinety = dynamicAdder(90); // returns a function
console.log(addNinety(5)); // 95
***********************************************************************/

function dynamicAdder(num) {
  return function adder(x) {
    return x + num;
  };
}

// // Given an array of numbers, return to me an object that contains the counts.
// // let arr = [1, 1, 3, 2, 2, 1]; // -> { '1': 3, '3': 1, '2': 2 }
// // input: an array of numbers
// // output: an object with the number being the key and the number of times that said number appears being the value
// //CONSTRAINT: HAVE TO USE REDUCE
// /////
// // STEPS
// // 1. WE NEED AN EMPTY OBJECT
// ////////////

// //2. WE NEED TO ITERATE THROUGH THE ENTIRETY OF THE ARRAY USING REDUCE
// // NEED TO INCORPORATE AN OBJECT TO BE THE RETURN VALUE OF THE REDUCE METHOD
// //2.1 WE NEED TO CHECK IF THE PRESENT NUMBER EXISTS INSIDE THE OBJECT WE CREATED
// //2.1A IF THE NUMBER DOES NOT EXIST WE NEED TO CREATE A KEY, BEING THAT SAID NUMBER, AND ASSIGN THE VALUE OF '1' TO IT
// //2.1B IF THE NUMBER DOES EXIST WE NEED TO INCREMENT THE VALUE BY 1 (++)
// //
// ////////////////////////
// //NO LONGER NEED 3 BECAUSE REDUCE RETURNS A SINGLE VALUE AND AN OBJECT QUALIFIES
// // 3. AFTER ITERATING THROUGHOUT THE ENTIRETY OF THE ARRAY WE NEED TO RETURN THE OBJECT

// //CREATING A REDUCE METHOD STEPS
//     // reduce should iterate through every element
//     //PARAMETERS: callback function
//     //output:a single value

//     //1. to make a loop that iterates through the entirety of the input

//     function reduce(cb){
//         for()
//     }
// // function returnNewObject(array) {
// //   const obj = {};
// //   for (let ele of array) {
// //     if (obj[ele]) {
// //       obj[ele]++;
// //     } else {
// //       obj[ele] = 1;
// //     }
// //   }
// //   return obj;
// // }

// function returnNewObject(array) {
//   obj = {};
//   return array.reduce(cb, obj);

//   function cb(obj, ele) {
//     if (obj[ele]) {
//       obj[ele]++;
//     } else {
//       obj[ele] = 1;
//     }
//     console.log(obj);
//     return obj;
//   }
// }

// let arr = [1, 1, 3, 2];
// console.log(returnNewObject(arr)); // -> { '1': 2, '2': 1, '3': 1 }

// const myReduce = (arr, cb, initialValue) => {
// let result = initialValue;
// for (let i = 0; i < arr.length; i++){
//     result = cb(result);
// }
// return result
// }

// console.log(returnNewObject(arr));

// console.log("I am an example\n" + "of an extremely long string");

// console.log(`I am an example
// of an extremely long string
// on multiple lines`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const items = [
  { name: "book", price: 100 },
  { name: "TV", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// const filteredItems = items.filter((item) => {
//   return item.price <= 100;
// });

// // console.log(items);
// // console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.price;
});

console.log(itemNames);

// const foundItem = items.find((item) => {
//   return item.name === "album";
// });

// // console.log(foundItem);

// items.forEach((item) => {
//   //   console.log(item.name);
// });

// const hasInexpensiveItems = items.some((item) => {
//   return item.price <= 10; // returns T/F if any item in the array meets the condition
// });

// // console.log(hasInexpensiveItems);

// const hasExpensiveItems = items.every((item) => {
//   return item.price >= 500; // return T/F if every item in the array meets the condition
// });

// // console.log(hasExpensiveItems);

// const total = items.reduce((currentTotal, item) => {
//   // the function then the paramater item
//   return item.price + currentTotal;
// }, 0); // starting currentTotal

// // console.log(total);

// const items2 = [1, 2, 3, 4, 5];

// const includesTwo = items2.includes(2); //returns T/F if the inputted value is preseht in the array

// console.log(includesTwo);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.
HINT: use a for loop
*/

// let printObject1 = (obj) => {
//   console.log(Object.entries(obj));
// };

// let printObject = (obj) => {
//   for (let item in obj) {
//     console.log(`${item} - ${obj[item]}`);
//   }
// };

// let blackClover = {
//   name: "Black Bulls",
//   color: "Black",
//   members: 15,
// };
// printObject1(blackClover); //prints
// // [
// //  ["name", "Black Bulls"],
// //  ["color", "Black"],
// //  ["members", 15],
// //];

// printObject(blackClover); //prints
// // [
// //  ["name", "Black Bulls"],
// //  ["color", "Black"],
// //  ["members", 15],
// //];////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Write a function printObject(obj) that prints out all key-value pairs of an object. The format should be key - value.
HINT: use a for loop
*/

// let printObject1 = (obj) => {
//   console.log(Object.entries(obj));
// };

// let printObject = (obj) => {
//   for (let item in obj) {
//     console.log(`${item} - ${obj[item]}`);
//   }
// };

// let blackClover = {
//   name: "Black Bulls",
//   color: "Black",
//   members: 15,
// };
// printObject1(blackClover); //prints
// // [
// //  ["name", "Black Bulls"],
// //  ["color", "Black"],
// //  ["members", 15],
// //];

// printObject(blackClover); //prints
// // [
// //  ["name", "Black Bulls"],
// //  ["color", "Black"],
// //  ["members", 15],
// //];

/*
Given the object below, use Object.keys() to iterate through the object and
print all its values.
*/

// const obj = {
//   first: "1",
//   second: 2,
//   third: "three",
// };

// let objKeys = (obj) => {
//   let key = Object.keys(obj);
//   for (let value of key) {
//     console.log(obj[value]);
//   }
// };

// objKeys(obj);

/*
Given the object below, use Object.keys() to iterate through the object and
print the value if there are 3 or more "e"s shared between the key and value.
*/

//Need a helper function to count the es in the values and keys
//need a counter
//need to iterate through the word
//need to increment count if e is found
// return the count
// need a main function to decide if there is 3 or more Es in the key value pair
// need to evaluate both key and value
// if sum of es in both >= 3 return value

// const obj = {
//   red: "circle",
//   blue: "square",
//   green: "hexagon",
//   yeller: "pallalelogram",
// };

// let eCounter = (word) => {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase() === "e") {
//       count++;
//     }
//   }
//   return count;
// };

// let find3Es = (obj) => {
//   for (let keys in obj) {
//     let values = obj[keys];
//     if (eCounter(keys) + eCounter(values) >= 3) {
//       console.log(values);
//     }
//   }
// };

// find3Es(obj);
// // console.log(eCounter("seventeen"));

/*
Write a function that accepts and object, obj, and uses Object.values to print all values in the object.
*/

// const obj = {
//   first: "1",
//   second: 2,
//   third: "three",
// };

// const printValues = (obj) => {
//   console.log(Object.values(obj));
// };

// printValues(obj);

/*
Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of the owners whose names are strictly longer than 5 characters and who own a "Honda".
Note: Use Object.entries to make your life easier!
*/
// const obj = {
//   Jacky: "Honda",
//   Ramon: "Kia",
//   Lexi: "Mercedes",
//   Eli: "Honda",
//   Bradley: "Honda",
//   Cecily: "BMW",
// };

//POLYS
// constraints: USE OBJECT.ENTRIES
//input: obj
//output: name of people with names longer than 5 characters who also own a honda
//STEPS
// w/o object.entries
//use for in to obtain keys.
//check keys to see if name is longer than 5
//if name is longer than 5 and the value it holds is 'honda'
//return name

//W/ USING OBJECT.ENTRIES
// capture return of object.entries in a variable
// iterate through the variable to check if name is longer than 5 characters
//check if value is equal to honda
//return name  if both are true

// let printOwners1 = (obj) => {
//   for (let key in obj) {
//     if (key.length > 5 && obj[key] === "Honda") {
//       console.log(key);
//     }
//   }
// };

// let printOwners = (obj) => {
//   let arr = Object.entries(obj);
//   for (let key of arr) {
//     if (key[0].length > 5 && key[1] === "Honda") {
//       console.log(key[0]);
//     }
//   }
// };

// printOwners1(obj); // Bradley
// printOwners(obj); // Bradley

/*
Given an object, obj, declare a method, printValues on obj that prints all unique values within the object.
*/

// const obj = {
//   Jacky: "Honda",
//   Ramon: "Kia",
//   Lexi: "Mercedes",
//   Eli: "Honda",
//   Bradley: "Honda",
//   Cecily: "BMW",
// };

// const printUniqueValues = (obj) => {
//   let arr = [];
//   for (let key in obj) {
//     if (!arr.includes(obj[key])) {
//       arr.push(obj[key]);
//       console.log(obj[key]);
//     }
//   }
//   return arr;
// };

// printUniqueValues(obj); // Honda Kia Mercedes BMW

/*
Given the function below that iterates through an object and prints all values
associated with keys that are vowels using Object.keys(), refactor the code
to use the for...in pattern to iterate through the object.

Key point here is to note how there are multiple ways to iterate through an
object that are interchangeable. Comment out the original function to run your refactored function.
*/

// const obj = {
//   a: "get",
//   b: "all",
//   c: "of",
//   d: "the",
//   e: "keys",
// };

// // const printValues = (obj) => {
// //   const vowels = ["a", "e", "i", "o", "u"];
// //   for (let key of Object.keys(obj)) {
// //     if (vowels.indexOf(key) >= 0) {
// //       console.log(obj[key]);
// //     }
// //   }
// // };

// const printValuesRefactored = (obj) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let key in obj) {
//     if (vowels.indexOf(key) >= 0) {
//       console.log(obj[key]);
//     }
//   }
// };

// // printValues(obj); // get values
// printValuesRefactored(obj); // get values

/*
Write a function includedInObject that accepts an object, obj, and a key
and returns true if that key exists on the object or false otherwise.
*/
// const obj = {
//   first: "1",
//   second: 2,
//   third: "three",
// };

// const includedInObject = (obj, key) => {
//   if (obj[key]) {
//     return true;
//   }
//   return false;
// };

// console.log(includedInObject(obj, "first")); // true
// console.log(includedInObject(obj, "second")); // true
// console.log(includedInObject(obj, "fourth")); // false

/*
Write a function valInObject that accepts an object, obj, and a value
The function should return true if that value is indeed a value in the object, or false otherwise.
*/

// const obj = {
//   item1: "jar",
//   item2: "pot",
//   item3: "spatula",
//   item3: "whisk",
// };

// const valInObject = (obj, val) => {
//   let values = Object.values(obj);
//   if (values.includes(val)) {
//     return true;
//   }
//   return false;
// };

// console.log(valInObject(obj, "jar")); // true
// console.log(valInObject(obj, "pot")); // true
// console.log(valInObject(obj, "cup")); // false
// console.log(valInObject(obj, "fork")); // false

/*
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common, return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.
// */
// const sentence = "What is the most common character in this sentence";

// const counter = (sentence) => {
//   let obj = {};
//   for (let letter of sentence) {
//     if (letter === " ") continue;
//     if (obj[letter]) {
//       obj[letter]++;
//     } else {
//       obj[letter] = 1;
//     }
//   }
//   let value = 0;
//   let goal;
//   for (let key in obj) {
//     if (obj[key] > value) {
//       value = obj[key];
//       goal = key;
//     }
//   }
//   return goal;
// };

// console.log(counter(sentence)); //  "t"

/*
Given the nested array of objects below, write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. If there is no second object, print null.
*/
// const nestedArr = [
//   [{ a: 1 }, { b: 2 }],
//   [{ c: 3 }, { d: 4 }, { e: 5 }],
//   [{ f: 6 }],
//   [{ g: 7 }, { h: 8 }],
// ];

// const getSecondObjValues = (arr) => {
//   for (let nest of arr) {
//     if (nest.length >= 2) {
//       console.log(Object.values(nest[1]));
//     } else {
//       console.log("null");
//     }
//   }
// };

// console.log(getSecondObjValues(nestedArr)); // 2 4 null 8

/*
Given an object that has other objects nested inside of it, write a function
that takes that object and returns all values that are at a depth of 2.
*/

// const printDepthOfTwo = (obj) => {
//   //   create a loop to iterate though each key within the object
//   for (let key in obj) {
//     //     if the value of the key is an object
//     if (typeof obj[key] === "object") {
//       //         create a loop to iterate through each key in the nested obj
//       for (subKey in obj[key]) {
//         //           if the value of the nested key IS an object
//         if (typeof obj[key][subKey] === "object") {
//           console.log(obj[key][subKey]);
//         } else {
//           console.log(obj[key][subKey]);
//         }
//       }
//     }
//   }
// };

// printDepthOfTwo(nestedObj); // cello dello fellow { h: "hello", i: "io" } jello

/*
Write a function named restSum that accepts all incoming parameters and sums them.
*/

// const restSum = (...num) => {
//   let sum = 0;
//   for (let number of num) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(restSum(3, 5, 6)); // => 14
// console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
// console.log(restSum(0)); // => 0

// const myReduce = (arr, cb, initialValue = null) => { // to figure out what the default initial
//   if(initialValue === null){                         // value was by passing in varius values
//     initialValue = arr[0]
//   } else {
//     initialValue = cb(initialValue, arr[0])
//   }

//   for(let i = 1; i < arr.length; i++){
//     initialValue = cb(initialValue, arr[i])
//   }

//   return initialValue
// }

// // TEST
// const testArr = [1, 1, 3, 2, 2, 1]
// const add = (acc, elem) => { return acc + elem }

// const result = myReduce(testArr, add, 0)
// console.log(result) // 10

// const result2 = myReduce(testArr, add, 5)
// console.log(result2) // 15

/*
Write a function named spreadItOut(array1, array2) that accepts two arrays and
uses spread operator syntax to return a single array.
*/

// const spreadItOut = (array1, array2) => {
//   return (newarr = [...array1, ...array2]);
// };

// console.log(spreadItOut([3, 5, 6], [1, 2, 3])); // => [3,5,6,1,2,3];
// console.log(spreadItOut([], [1, 2, 3])); // => [1,2,3];
// console.log(spreadItOut(["apple", "banana"], [1, 2, 3])); // => ["apple", "banana", 1, 2, 3];
/*
Write a function breakDownObj(obj) that takes in an object as a parameter
and returns an array containing:  all the keys from the object and all the
values of the object.

Hint: Use spread syntax to spread out elements into an array!
*/

// let object1 = { name: "Rupert", age: 5, speak: "Meow" };
// let object2 = { location: "NY", borough: "Brooklyn" };

// const breakDownObj = (obj) => {
//   return (newarr = [...Object.keys(obj), ...Object.values(obj)]);
// };

// console.log(breakDownObj(object1)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
// console.log(breakDownObj(object2)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]

/*
Given the array, arr, and object, obj, use rest and spread to clone them
into arrRest/arrSpread and objRest/objSpread respectively.
*/
// const arr = [1, "two", "3"];

// const obj = {
//   red: "circle",
//   blue: "square",
//   green: "hexagon",
// };

// let [...arrRest] = arr;
// let arrSpread = [...arr];
// let { ...objRest } = obj;
// let objSpread = { ...obj };

// console.log(arrRest); // [1, "two", "3"]
// console.log(arrSpread); // [1, "two", "3"]

// console.log(objRest); // { red: "circle", blue: "square", green: "hexagon" }
// console.log(objSpread); // { red: "circle", blue: "square", green: "hexagon" }

/*
Given obj below, use a combination of the spread and rest operator in a single
statement to create a clone objClone that removes the green key-value pair
and adds a yellow key with value pentagon.

Hint: As a side effect, you will end up creating a green variable with value
"hexagon".
*/

// const obj = {
//   red: "circle",
//   blue: "square",
//   green: "hexagon",
// };

// let { green, ...objClone } = { ...obj, yellow: "pentagon" };

// console.log(objClone); // { red: "circle", blue: "square", yellow: "pentagon" }
// console.log(green); // hexagon

/*
Given an object, write a function that returns the most
common character within the object. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common, return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.
*/

// const blackClover = {
//   asta: "Anti Magic",
//   yuno: "Wind Spirit",
//   charmy: "Gluttony",
//   yami: "Dark Magic",
//   julius: "Time Magic",
// };

// const objectCount = (obj) => {
//   let object = {};
//   for (let keys in blackClover) {
//     let blackCloverValues = blackClover[keys].toLowerCase();
//     for (let letter of blackCloverValues) {
//       if (letter === " ") continue;
//       if (object[letter]) {
//         object[letter]++;
//       } else {
//         object[letter] = 1;
//       }
//     }
//     for (let key of keys) {
//       if (object[key]) {
//         object[key]++;
//       } else {
//         object[key] = 1;
//       }
//     }
//   }
//   let value = 0;
//   let goal;
//   for (let index in object) {
//     if (object[index] > value) {
//       value = object[index];
//       goal = index;
//     }
//   }
//   return goal;
// };

// console.log(objectCount(blackClover));

/*
Given the array friends below, use the Array.forEach() method to iterate through each element and print the name and yearsOfFriendship properties stylized as "name: yearsOfFriendship years".

For example: "Albert: 3 years"
*/

// const friends = [
//   {
//     name: "Albert",
//     yearsOfFriendship: 3,
//   },
//   {
//     name: "Angela",
//     yearsOfFriendship: 2,
//   },
//   {
//     name: "Freddy",
//     yearsOfFriendship: 8,
//   },
//   {
//     name: "Agatha",
//     yearsOfFriendship: 6,
//   },
// ];

// friends.forEach((item) => {
//   console.log(`${item.name}: ${item.yearsOfFriendship} years`);
// });

/*
Given the array friends below, use the Array.map() method to map the
current array to an array of booleans representing whether or not the friend
has been friends with the user for more than 5 years. Then print the newly
mapped array.
*/

// const friends = [
//   {
//     name: "Albert",
//     yearsOfFriendship: 3,
//   },
//   {
//     name: "Angela",
//     yearsOfFriendship: 2,
//   },
//   {
//     name: "Freddy",
//     yearsOfFriendship: 8,
//   },
//   {
//     name: "Agatha",
//     yearsOfFriendship: 6,
//   },
// ];

// let newArr = friends.map((item) => {
//   return item.yearsOfFriendship > 5;
// });

// console.log(newArr); // [false, false, true, true];

/*
Given the array friends below, use the Array.filter() method to filter the array to only contain friends whose name starts with an "A" and who has been friends for over 5 years. Then print the filtered array.
*/

// const friends = [
//   {
//     name: "Albert",
//     yearsOfFriendship: 3,
//   },
//   {
//     name: "Angela",
//     yearsOfFriendship: 2,
//   },
//   {
//     name: "Freddy",
//     yearsOfFriendship: 8,
//   },
//   {
//     name: "Agatha",
//     yearsOfFriendship: 6,
//   },
// ];

// const filteredArr = friends.filter((item) => {
//   if (item.name[0] === "A" && item.yearsOfFriendship > 5) {
//     return item;
//   }
// });

// console.log(filteredArr);

/*
Should print:
[
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];
*/

/*
In this exercise, you will learn to use the Array.find() method which will be useful to know. The Array.find() method accepts a callback function that specifies the "find" condition(s) and returns the first element that satisfies the condition(s). Check out the documentation here.
Given the friends array below, use the Array.find() method to get the first friend whose name contains 3 or more vowels and print their name.
*/

// const friends = [
//   {
//     name: "Albert",
//     yearsOfFriendship: 3,
//   },
//   {
//     name: "Angela",
//     yearsOfFriendship: 2,
//   },
//   {
//     name: "Freddy",
//     yearsOfFriendship: 8,
//   },
//   {
//     name: "Agatha",
//     yearsOfFriendship: 6,
//   },
// ];

// const threeVowelFriend = friends.find((item) => {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   let items = item.name;
//   for (let letter of items) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   if (count >= 3) {
//     return item;
//   }
// });

// console.log(threeVowelFriend.name); // Angela

/*
Given the friends array, use the Array.reduce() method to get and print the sum of all the years of friendship with all the friends in the array.
*/

// const friends = [
//   {
//     name: "Albert",
//     yearsOfFriendship: 3,
//   },
//   {
//     name: "Angela",
//     yearsOfFriendship: 2,
//   },
//   {
//     name: "Freddy",
//     yearsOfFriendship: 8,
//   },
//   {
//     name: "Agatha",
//     yearsOfFriendship: 6,
//   },
// ];

// let totalYears = friends.reduce((acc, item) => {
//   return item.yearsOfFriendship + acc;
// }, 0);

// console.log(totalYears); // 19

// let colorCounter = (colorArr) => {
//   let obj = {};
//   for (let color of colorArr) {
//     if (obj[color]) {
//       obj[color]++;
//     } else {
//       obj[color] = 1;
//     }
//   }
//   return obj;
// };

// let arr1 = [
//   "asta",
//   "yuno",
//   "noelle",
//   "charmy",
//   "yami",
//   "yuno",
//   "asta",
//   "vanessa",
//   "asta",
//   "asta",
//   "yuno",
// ];
// let arr2 = [
//   "vanessa",
//   "noelle",
//   "charmy",
//   "yami",
//   "yami",
//   "charmy",
//   "vanessa",
//   "grey",
//   "grey",
//   "yami",
//   "charmy",
// ];
// console.log(colorCounter(arr1)); // { asta: 4, yuno: 3, noelle: 1, charmy: 1, yami: 1, vanessa: 1 }
// console.log(colorCounter(arr2)); // { vanessa: 2, noelle: 1, charmy: 3, yami: 3, grey: 2 }

// function addUniqueVal(object, key, value) {
//   if (!Object.values(object).includes(value)) {
//     object[key] = value;
//   }
//   return object;
// }

// let newbie = { name: "Asta", team: "blackBulls" };
// addUniqueVal(newbie, "weapon", "swords"); // => {name: "Willie", team: "blackBulls", weapon: "swords"}
// addUniqueVal(newbie, "join", "blackBulls"); // => {name: "Willie", team: "blackBulls", weapon: "swords"}
// console.log(newbie); // { name: "Asta", team: "blackBulls", weapon: "swords" }

// function duplicateCharMinCount(string, minCount) {
//   let obj = {};
//   let arr = [];
//   for (let letter of string) {
//     if (obj[letter]) {
//       obj[letter]++;
//     } else {
//       obj[letter] = 1;
//     }
//   }
//   for (let ele in obj) {
//     if (obj[ele] >= minCount) {
//       arr.push(ele);
//     }
//   }
//   console.log(arr);
// }
// duplicateCharMinCount("asta", 2); // ["a"]
// duplicateCharMinCount("noelle", 2); // ['e', "l"]
// duplicateCharMinCount("What about noele, asta, yami, yuno, and charmy?", 3); // ["a", "t", " ", 'o', 'y', 'n']

// function roster(list) {
//   return function (str) {
//     list.push(str);
//     console.log(list);
//   };
// }

// const blackBulls = [];
// const addToBlackBulls = roster(blackBulls);
// addToBlackBulls("asta"); // returns ['asta']
// addToBlackBulls("noelle"); // returns ['asta', 'noelle']
// console.log(blackBulls); // ['asta', 'noelle']

// const nums = [1, 2, 3, 4];
// pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

// const booleans = [true, false, true, false, true];
// pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

// function pickyMyMap(arr, cb) {
//   let array = [];
//   for (let ele of arr) {
//     if (cb(ele)) {
//       array.push(cb(ele));
//     }
//   }
//   return array;
// }
// const blackClover = [
//   { name: "Yami", age: "28", team: "Black Bull" },
//   { name: "Asta", age: "15", team: "Black Bull" },
//   { name: "Noelle", age: "15", team: "Black Bull" },
//   { name: "Yuno", age: "15", team: "Golden Dawn" },
// ];

// function filterUserProfiles(users, filter) {
//   let arr = [];
//   for (let ele of users) {
//     if (filter(ele)) {
//       arr.push(ele.name);
//     }
//   }
//   console.log(arr);
// }

// filterUserProfiles(blackClover, (user) => user.age > 20); // ["Yami"]
// filterUserProfiles(blackClover, (user) => user.team === "Black Bull"); // ["Yami", 'Asta', 'Noelle']

// const sentenceMaker = (...strings) => {
//   let arr = [];
//   for (let string of strings) {
//     arr.push(string);
//   }
//   console.log(arr.join(" ") + "!");
// };

// sentenceMaker("Hello", "Black Bulls"); // 'Hello Black Bulls!'
// sentenceMaker("I", "love", "the Black Bulls"); // 'I love the Black Bulls!'
// sentenceMaker(
//   "The",
//   "loud",
//   "asta",
//   "is",
//   "my",
//   "favorite",
//   "Black",
//   "Bull",
//   "character"
// ); // 'The loud asta is my favorite Black Bull character!'

// let hiddenCount = () => {
//   let count = 0;
//   function counter() {
//     count++;
//     return count;
//   }
//   return counter;
// };

// let dogs = ["Fido", "Bowser"];

// let [firstEl, secondEl] = dogs;

// console.log(firstEl);

// let company = {};
// company.name = "Pizza Place";
// console.log(company["name"]);

// function sayPuppy() {
//   const puppy = "Wolfie";
//   return puppy;
// }

// sayPuppy();

// console.log(puppy); // ????

// function bar() {
//   var rand = "abc";

//   if (true) {
//     const rand = "efg";
//   }
//   return rand;
// }

// console.log(bar()); // ???

let foo = function (n, cb) {
  console.log("vroom");
  for (let i = 0; i < n; i++) {
    cb();
  }
  console.log("skrrt");
};

foo(2, function () {
  console.log("swoosh");
});

/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  let cutest = 0;
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    if (cat.cuteness > cutest) {
      cutest = cat;
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: "Fluffy", cuteness: 9 },
  { name: "Princess", cuteness: 6 },
  { name: "Tiger", cuteness: 7 },
  { name: "Indie", cuteness: 5 },
];

/*

Fix the function `shouldRecycle` that determines if the item passed in can
or cannot be recycled.

If an item is plastic then it can be recycled and should return `Recycle Me!`
UNLESS its color is black. Black plastics should return `Currently, cannot be
recycled.`

If an item is made of aluminum or paper then it can be recycled and should
return `Recycle Me!`


*/

function shouldRecycle(item) {
  if (item.plastic && item.color !== "black") {
    return "Recycle Me!";
  } else if (item.color === "black" && item.plastic) {
    return "Currently, cannot be recycled.";
  } else if (item.aluminum) {
    return "Recycle Me!";
  } else if (item.paper) {
    return "Recycle Me!";
  }
  return "Cannot be recycled";
}

const waterBottle = {
  plastic: true,
  color: "clear",
  aluminum: false,
  paper: false,
};

console.log(shouldRecycle(waterBottle)); // 'Recycle Me!'

/*

Fix the function `shouldRecycle` that determines if the item passed in can
or cannot be recycled.

If an item is plastic then it can be recycled and should return `Recycle Me!`
UNLESS its color is black. Black plastics should return `Currently, cannot be
recycled.`

If an item is made of aluminum or paper then it can be recycled and should
return `Recycle Me!`


*/

function shouldRecycle(item) {
  if (item.plastic && item.color !== "black") {
    return "Recycle Me!";
  } else if (item.color === "black" && item.plastic) {
    return "Currently, cannot be recycled.";
  } else if (item.aluminum) {
    return "Recycle Me!";
  } else if (item.paper) {
    return "Recycle Me!";
  }
  return "Cannot be recycled";
}

const waterBottles = {
  plastic: true,
  color: "clear",
  aluminum: false,
  paper: false,
};

console.log(shouldRecycle(waterBottles)); // 'Recycle Me!'

const tomatoCan = {
  plastic: false,
  color: "red",
  aluminum: true,
  paper: false,
};

console.log(shouldRecycle(tomatoCan)); // 'Recycle Me!'

const saladContainer = {
  plastic: true,
  color: "black",
  aluminum: false,
  paper: false,
};

console.log(shouldRecycle(saladContainer)); // 'Currently, cannot be recycled.'

const styrofoamContainer = {
  plastic: false,
  color: "black",
  aluminum: false,
  paper: false,
};

console.log(shouldRecycle(styrofoamContainer)); // 'Cannot be recycled.'

/*

Fix the `feedPet` function. `feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.


*/

function feedPet(name) {
  const foods = [];
  return (food) => {
    foods.push(food);
    return `Fed ${name} ${foods}.`;
  };
}

const feedHydra = feedPet("Hydra");

console.log(feedHydra("bones")); // Fed Hyrda bones.
console.log(feedHydra("Hercules")); // Fed Hyrda bones, Hercules.

const feedHippogriff = feedPet("Hippogriff");

console.log(feedHippogriff("worms")); // Fed Hippogriff worms.
console.log(feedHippogriff("crickets")); // Fed Hippogriff worms, crickets.
console.log(feedHippogriff("chicken")); // Fed Hippogriff worms, crickets, chicken.

/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if you drank water 4 or more days in each calendar week.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks,
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days for every week in the calendar,
then return true. Otherwise, return false.


*/

function adequateWaterTracker(calendar) {
  let water;
  for (let week of calendar) {
    water = 0;
    for (let day of week) {
      if (day > 0) {
        water++;
      }
    }
    if (water < 4) {
      return false;
    }
  }
  return true;
}

// function adequateWaterTracker(calendar) {
//   let noWater = 0;
//   let water = 0;
//   for (let i = 0; i < calendar.length; i++) {
//     water = 0;
//     const week = calendar[i];
//     for (let j = 0; j < week.length; j++) {
//       const day = calendar[j];
//       if (day !== 0) {
//         water++;
//       } else {
//         noWater++;
//       }
//     }
//     if (water <= 3) {
//       return false;
//     }
//   }
//   return true;
// }

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true

const calendar4 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar4)); // false

const calendar5 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar5)); // true

/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

function sumToN(n) {
  let sum = 0;
  if (n < 0) return null;

  sum += n;
  return sumToN(n - 1) + sum;
}

/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  if (arr.length === 0) return 0;

  let sum = arr[0];

  return sumArray(arr.slice(1)) + sum;
}

/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

function iceCreamShop(flavors, favorite) {
  if (flavors.length === 0) return false;

  if (flavors[0] === favorite) return true;

  return iceCreamShop(flavors.slice(1), favorite);
}

/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end) {
  if (end <= start) {
    return [];
  }

  return [start].concat(range(start + 1, end));
}
console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []

const assert = require("assert");

const sumToN = require("../problems/01-sum-to-n");

describe("sumToN()", function () {
  it("should sum all the numbers from 0 to n", function () {
    assert.strictEqual(sumToN(5), 15);
    assert.strictEqual(sumToN(1), 1);
    assert.strictEqual(sumToN(9), 45);
    assert.strictEqual(sumToN(-8), null);
  });
});

/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

function reverse(str) {
  if (str.length === 0) return "";

  let fLetter = str[0];
  return reverse(str.slice(1)) + fLetter;
}

/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

function addToTwelve(arr) {
  if (arr.length < 2) return false;

  if (arr[0] + arr[1] === 12) return true;

  return addToTwelve(arr.splice(1));
}

/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {
  let i = 0;
  if (i < power) {
    return exponent(num, power - 1) * num;
  }
  if (i === power) return 1;
  if (i > power) {
    return (exponent(num, power + 1) * 1) / num;
  }
}

/***********************************************************************
Write a more advanced version of the recursive `exponent` function that
you just wrote. Instead of multiplying the base number by itself n power of
times, like you did previously, you will be squaring the results of the base
number raised to the power of half of n power.

The following is math, not JavaScript:

exponent(b, 0) // 1
exponent(b, 1) // b
exponent(b, n) // exponent(b, n / 2) ** 2             [for even n]
exponent(b, n) // b * (exponent(b, (n - 1) / 2) ** 2) [for odd n]

You will need to square the results of exponent(b, n / 2) and
(exponent(b, (n - 1) / 2).

Remember that you don't need to do anything special to square a number, just
calculate the value and multiply it by itself. So don't cheat and use
exponentiation in your solution.

Examples:

advancedExponent(2, 0); // 1
advancedExponent(2, 1); // 2
advancedExponent(2, 2); // 4
advancedExponent(2, 3); // 8
advancedExponent(2, 4); // 16
advancedExponent(2, 5); // 32
advancedExponent(2, 6); // 64
advancedExponent(2, 7); // 128
advancedExponent(2, 8); // 256
advancedExponent(2, 9); // 512
advancedExponent(2, 10); // 1024
advancedExponent(2, 11); // 2048
advancedExponent(2, 12); // 4096

For each of the examples above, figure out how many times your code should
be recursively calling `advancedExponent`. Find a way to visually see how many
times `advancedExponent` is being recursively called.
***********************************************************************/

function advancedExponent(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n % 2 === 0) {
    return advancedExponent(b, n / 2) ** 2;
    // let res = advancedExponent(b, n / 2) ** 2;
  } else if (n % 2 !== 0) {
    return b * advancedExponent(b, (n - 1) / 2) ** 2;
  }
}

debugger;
console.log(advancedExponent(2, 5)); // 32

/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

function fibonacci(n) {
  if (n === 1 || n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55

/***********************************************************************
Write a recursive function called `factorial` that takes an integer, `num`,
and returns the factorial of `num`. Assume the value of `num` is greater
than or equal to 1.

A factorial is the number get when multiplying a number by itself minus one
all the way down to 1 (but not 0)! We represent them with an exclamation
point, also sometimes called a "bang" in programming.

5! = 5 x 4 x 3 x 2 x 1 = 120

Examples:

factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
***********************************************************************/

function factorial(num) {
  if (num === 1) return 1;

  return factorial(num - 1) * num;
}

/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  if (arr.length === 0) {
    return [];
  } else if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  } else {
    return [arr[0]].concat(flatten(arr.slice(1)));
  }
}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

function isSorted(arr) {
  if (arr.length <= 1) {
    return true;
  }
  if (arr[0] > arr[1]) {
    return false;
  }
  return isSorted(arr.slice(1));
}

/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
  if (nums.length === 0) {
    return sorted;
  }
  let smallest = Math.min(...nums);
  sorted.push(smallest);
  let smallestIndex = nums.indexOf(smallest);
  nums.splice(smallestIndex, 1);
  return sort(nums, sorted);
}

/***********************************************************************
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:
let x = [ [1], [2, 3] ];
let y = x.slice();

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.

Examples:

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false

Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true
***********************************************************************/

function deepDup(arr) {
  const array = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      array.push(deepDup(ele));
    } else {
      array.push(ele);
    }
  }
  return array;
}

/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  if (arr.length === 0) {
    return [[]];
  } else {
    const lastElement = arr[arr.length - 1];
    const previousSubsets = subsets(arr.slice(0, -1));
    const newSubsets = previousSubsets.map((subset) => [
      ...subset,
      lastElement,
    ]);
    return previousSubsets.concat(newSubsets);
  }
};

console.log(subsets([])); // [[]]
console.log(subsets([1])); // [[], [1]]

/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

// const makeTree = (categories, parent) => {
//   // Your code here
// };
function makeTree(categories, parent = null) {
  const tree = {};
  let first = categories.filter((category) => category.parent === parent);

  first.forEach((category) => {
    tree[category.id] = makeTree(categories, category.id);
  });
  return tree;
}

/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  if (array.length === 1) {
    return [array];
  }

  const allPermutations = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const remainingElements = array.slice(0, i).concat(array.slice(i + 1));
    const permutationsOfRemaining = permutations(remainingElements);

    for (const permutation of permutationsOfRemaining) {
      allPermutations.push([currentElement, ...permutation]);
    }
  }

  return allPermutations;
}

// Test cases
console.log(permutations([1, 2])); // Output: [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])); // Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.
***********************************************************************/

function makeChange(target, coins = [25, 10, 5, 1]) {
  if (target === 0) {
    return [];
  }

  if (target < 0 || coins.length === 0) {
    return null;
  }

  const currentCoin = coins[coins.length - 1];
  const remainingCoins = coins.slice(0, -1);

  const withCurrentCoin = makeChange(target - currentCoin, coins);
  const withoutCurrentCoin = makeChange(target, remainingCoins);

  if (withCurrentCoin === null && withoutCurrentCoin === null) {
    return null;
  } else if (withCurrentCoin === null) {
    return withoutCurrentCoin;
  } else if (withoutCurrentCoin === null) {
    return [currentCoin, ...withCurrentCoin];
  } else {
    return withCurrentCoin.length <= withoutCurrentCoin.length
      ? [currentCoin, ...withCurrentCoin]
      : withoutCurrentCoin;
  }
}

// Test cases
console.log(makeChange(21)); // Output: [1, 10, 10]
console.log(makeChange(75)); // Output: [25, 25, 25]
console.log(makeChange(33, [15, 3])); // Output: [3, 15, 15]
console.log(makeChange(34, [15, 3])); // Output: null
console.log(makeChange(24, [10, 7, 1])); // Output: [7, 7, 10]

/***********************************************************************
**PROBLEM 1: findDuplicatesIterative (1 point)**
Write a function `findDuplicatesIterative`. The function should take an
inputArray (array) and return an array including all items from the inputArray
that appear more than once. However, the returned array must NOT have any
duplicates within it.

For example:

findDuplicatesIterative([ 5, 8, 8, 2, 3 ]);
// [ 8 ]
findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]);
// [ 8, 3 ] (only one 8; order of elements does not matter)
findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]);
// [ 'word', 'a' ] (order of elements does not matter)

A successful solution will pass the first mocha test.

**PROBLEM 2: findDuplicatesRecursive (1 point)**
Write a function `findDuplicatesRecursive`. The function should have the same
output as the first function, but MUST use recursion WITH a default parameter
to find the duplicates.

A successful solution will pass the second mocha test.

**PROBLEM 3: findDuplicatesNoDefault (1 point)**
Write a function `findDuplicatesNoDefault`. The function should have the same
output as the first two functions, but MUST use recursion to find the duplicates.
In addition, you MAY NOT use any default parameters in your solution. You should
only use a single parameter, the inputArray.

A successful solution will pass the third mocha test.

**PROBLEM 4: findDuplicatesChallenge (1 point)**
Write a function `findDuplicatesChallenge`. This function must use recursion,
similar to the second and third function. To pass the fourth mocha test, the
solution code must meet the following constraints:

- There must be NO loop within the function
  - You may NOT use FOR or WHILE loops
- There must be NO array looping methods
  - You may NOT use .map, .forEach, .filter, .find, .sort, or .includes

***********************************************************************/

/* PROBLEM 1. findDuplicatesIterative: Must solve with iteration, not recursion */

function findDuplicatesIterative(array) {
  let arr = [];
  let obj = [];
  for (let ele of array) {
    if (!obj.includes(ele)) {
      obj.push(ele);
    } else if (!arr.includes(ele)) {
      arr.push(ele);
    }
  }
  return arr;
}

// console.log(findDuplicatesIterative([5, 8, 8, 2, 3]));
// // [ 8 ]
// console.log(findDuplicatesIterative([5, 8, 8, 8, 2, 3, 3]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesIterative(["a", "word", "a", "another", "word"]));
// // [ 'word', 'a' ] (order of elements does not matter)

/* PROBLEM 2. findDuplicatesRecursive: Must solve with recursion */

// function findDuplicatesRecursive(array, i = 0, arr = [], dupe = []) {
//   if (array.length < i) return dupe;
//   let curr = array[i];
//   if (!arr.includes(curr)) {
//     arr.push(curr);
//   } else if (!dupe.includes(curr)) {
//     dupe.push(curr);
//   }
//   return findDuplicatesRecursive(array, i + 1, arr, dupe);
// }

function findDuplicatesRecursive(array, resArr = []) {
  if (!array.length) return resArr;
  let currEle = array.pop();
  if (array.includes(currEle) && !resArr.includes(currEle)) {
    resArr.push(currEle);
  }
  return findDuplicatesRecursive(array, resArr);
}

// console.log(findDuplicatesRecursive([5, 8, 8, 2, 3]));
// // [ 8 ]
// console.log(findDuplicatesRecursive([5, 8, 8, 8, 2, 3, 3]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesRecursive(["a", "word", "a", "another", "word"]));
// // [ 'word', 'a' ] (order of elements does not matter)

/* PROBLEM 3. findDuplicatesNoDefault: Must use recursion with no default parameters */

// function findDuplicatesNoDefault(array) {
//   if (array.length === 0) return dupe; // base case
//   let arr = []; // arr to keep track of what weve seen
//   let dupe = []; // arr to hold duplicates
//   if (!arr.includes(array[0])) {
//     // if tracker arr doesnt include 1st ele
//     arr.push(array[0]); //push 1st element
//   } else if (!dupe.includes(array[0])) {
//     //if dup arr doesnt include 1st ele
//     dupe.push(array[0]); // push ele to dupe array
//   } else {
//     return findDuplicatesNoDefault(array.slice(1)); // return array minus 1st ele
//   }
// }

function findDuplicatesNoDefault(array) {
  if (!array.length) return [];

  let dupes = [];
  let [first, ...rest] = array;
  let rescurse = findDuplicatesNoDefault(rest);
  if (rest.includes(first) && !rescurse.includes(first)) dupes.push(first);

  return dupes.concat(rescurse);
}

console.log(findDuplicatesNoDefault([5, 8, 8, 2, 3]));
// [ 8 ]
console.log(findDuplicatesNoDefault([5, 8, 8, 8, 2, 3, 3]));
// [ 8, 3 ] (only one 8; order of elements does not matter)
console.log(findDuplicatesNoDefault(["a", "word", "a", "another", "word"]));
// [ 'word', 'a' ] (order of elements does not matter)

/* PROBLEM 4. findDuplicatesChallenge: No for/while loops OR array looping methods */

// Your code here

/*
LOCAL TESTS: Run `node problems/find-duplicates.js` to run this node file,
and debug your code using console.logs.

MOCHA TESTS: Run `mocha` to run the mocha tests.
*/

// console.log(findDuplicatesIterative([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesChallenge([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesChallenge([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesChallenge([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

const readline = require("readline");

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What's up, doc? ", (answer) => {
//   console.log("you responded: " + answer);
//   rl.close();
// });

// // try to print 'DONE!' after the question
// console.log("DONE!");

rl1.question("What's up, doc? ", (answer) => {
  console.log("you responded: " + answer);
  rl.close();
  console.log("DONE!");
});

// ask question one
rl1.question("What's up, doc? ", (firstAnswer) => {
  console.log(firstAnswer + " is up.");

  // only after the user responds to question one, then ask question two
  rl.question("What's down, clown? ", (secondAnswer) => {
    console.log(secondAnswer + " is down.");
    rl.close();
  });
});

rl.question("What's up, doc? ", (firstAnswer) => {
  console.log(firstAnswer + " is up.");

  rl.question("What's down, clown? ", (secondAnswer) => {
    console.log(secondAnswer + " is down.");

    rl.question("What's left, Jeff? ", (thirdAnswer) => {
      console.log(thirdAnswer + " is left.");
      rl.close();
    });
  });
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}

// FUNCTION EXPRESSION
//- storing an anonymous function in a variable
//- we can alias the function with that variable weve stored in js

let sayHi = function () {
  console.log("Hi");
};

// sayHi();

// FUNCTION EXPRESSINO WITH FAT ARROW SYNTAX

let sayHi2 = () => console.log("DJ KHALED SCREAMS: ANOTHER ONE!!!");

// sayHi2();

// AN IFFE IS THE ANONYMOUS PORTION WRAPPED IN PARENTHESIS

//IIFE

(function () {
  console.log("HIIIIII");
})();

// FAT ARROW IFFE
let djK = (() => {
  return "DJ KHALED again screams: ANOTHER ONE!!!";
})();

//You can pass arguments to an IIFE
let sayGoodMorning = ((name) => {
  return `Good MOOOORRRNINNNNNG ${name}!!!!`;
})("Roderick");

//IIFE will only rrun the console.log  in the function ONCE!!

console.log(sayGoodMorning);
console.log(sayGoodMorning);
console.log(djK);
console.log(djK);

/*
!! HOISTING !!
    -- LET, CONST, VAR
        * var -> hoist the declaration but not the assignment, has a default value of undefined
        * let && const -> hoist the declaration, but does not have a value. returns an error if you try to access before initialization
    HOISTING WITH FUNCTIONS
*/

// function hoistVar() {
//   console.log(name);
//   var name = "Roddy";
// }

// //hoistVar(); // undefined

// function hoistConstAndLet() {
//   console.log(name);
//   // let name = 'Roddy'
//   const name = "Roddy";
// }

// hoistConstAndLet(); // ReferenceError: cannot access before initialization

//function declaration

// hoisted(); // prints hoisted
// function hoisted() {
//   console.log("hoisted");
// }

// console.log(hoisted()); // prints hoisted

// function dogParty() {
//   if (true) {
//     let dog = "Rupert";
//     const dog = "Fluffy";
//     var dog = "Poodle";
//   }

//   return dog;
// }

// console.log(dogParty()); // ???
function sayPuppy() {
  const puppy = "Wolfie";
  return puppy;
}

sayPuppy(); // "Wolfie"

function inner() {
  let str = "hello";
  return str;
}

function outer() {
  let test = inner();
  return test;
}

let result1 = outer();

result2 = inner();

console.log(result1 === result2); // ???

const readline = require("readline");

const rl11 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What's up, doc? ", (answer) => {
//   console.log("you responded: " + answer);
//   rl.close();
// });

// // try to print 'DONE!' after the question
// console.log("DONE!");

rl.question("What's up, doc? ", (answer) => {
  console.log("you responded: " + answer);
  rl.close();
  console.log("DONE!");
});

// ask question one
rl.question("What's up, doc? ", (firstAnswer) => {
  console.log(firstAnswer + " is up.");

  // only after the user responds to question one, then ask question two
  rl.question("What's down, clown? ", (secondAnswer) => {
    console.log(secondAnswer + " is down.");
    rl.close();
  });
});

rl.question("What's up, doc? ", (firstAnswer) => {
  console.log(firstAnswer + " is up.");

  rl.question("What's down, clown? ", (secondAnswer) => {
    console.log(secondAnswer + " is down.");

    rl.question("What's left, Jeff? ", (thirdAnswer) => {
      console.log(thirdAnswer + " is left.");
      rl.close();
    });
  });
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}

// THE PROBLEM
// Write a function named smoothieMachine that accepts any number of parameters, and a function. The return function will also accept any number of parameters and will return a string including all of the parameters of smoothieMachine and the return function.

// -WE NEED A FUNCTION THAT CAN ACCEPT AN UNKNOWN NUMBER OF PARAMETERS
// -FUNCTION NEEDS TO RETURN A STRING WITH ALL OF THE PARAMETERS

// - FIRST NEED A FUNC
// - SET IT UP AS A RECURSIVE FUNC
// - BASE CASE WILL BE THE CASE OF NO PARAMETERS BEING PASSED
// - RECURSIVE STEP WILL BE SLICING THE UNKNOWN PARAMATERS AT INDEX 1 AND RETURNING THE INDEX AT 0
// - RETURN WILL BE THE STRING INCLUDING ALL PARAMETERS

// const smoothieMachine = (...params) => {
//   //want to check if the parameters are strings
//   ingredients = params.filter((el) => typeof el === "string");
//   //create a closer to access the array created above in the return

//   return function (...addOn) {
//     // allows us to store smoothie machine into a variable and add on new components
//     let added = addOn.filter((ele) => typeof ele === "string");
//     // creates another array with the newly added ingredients
//     ingredients.push(...added);
//     //adds the newly added ingredients to the old ingredient array
//     if (ingredients.length === 0) {
//       // if the array that has been created doesnt contain anything we return the following statement
//       return `There are no ingredients in the smoothie`;
//     }
//     //otherwise return a statement that lists the ingredients seperated by and in a string
//     return `I'm having a smoothie with ${ingredients.join(" and ")}`;
//   };
// };
// let smoothie1 = smoothieMachine(); // returns a function
// console.log(smoothie1("milk")); // returns "I'm having a smoothie with milk"
// console.log(smoothie1("kale", "spinach")); // returns "I'm having a smoothie with milk and kale and spinach"
// console.log(smoothie1("honey", "pears", "berries")); // returns "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

// let smoothie2 = smoothieMachine("apples", "bananas", "berries"); // returns a function
// console.log(smoothie2("pineapple")); // returns "I'm having a smoothie with apples and bananas and berries and pineapple"

// let smoothie3 = smoothieMachine(); // returns a function
// console.log(smoothie3()); // returns "There are no ingredients in the smoothie!"
///////
function caesarCipher(string, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = [];
  if (string.length === 0) {
    return "";
  }
  let oldIdx = alphabet.indexOf(string[0]);
  let newIdx = oldIdx + num;
  let newChar = alphabet[newIdx % alphabet.length];
  newString.push(newChar);

  return newString.join("") + caesarCipher(string.slice(1), num);
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
//////
function rotate(arr, num) {
  if (num === 0) {
    return arr;
  }
  if (num > 0) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
    return rotate(arr, num - 1);
  } else {
    let firstEl = arr.shift();
    arr.push(firstEl);
    return rotate(arr, num + 1);
  }
}

let arr = ["a", "b", "c", "d", "e"];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

function countVowels(word) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

// function mostVowels(sentence, maxVowels = 0, wordWithMaxVowels = "") {
//   // Base case: If the sentence is empty, return the word with max vowels
//   if (!sentence) {
//     return wordWithMaxVowels;
//   }

//   // Separate the first word from the rest of the sentence
//   const wordEndIndex = sentence.indexOf(" ");
//   let currentWord, remainingSentence;
//   if (wordEndIndex !== -1) {
//     currentWord = sentence.slice(0, wordEndIndex);
//     remainingSentence = sentence.slice(wordEndIndex + 1);
//   } else {
//     currentWord = sentence;
//     remainingSentence = "";
//   }

//   // Count vowels in the current word
//   const vowelsCount = countVowels(currentWord);

//   // Update maxVowels and wordWithMaxVowels if needed
//   if (vowelsCount > maxVowels) {
//     maxVowels = vowelsCount;
//     wordWithMaxVowels = currentWord;
//   }

//   // Recursively call the function with the remaining sentence
//   return mostVowels(remainingSentence, maxVowels, wordWithMaxVowels);
// }

// // Example usage:
// const sentence = "Hello there, how are you today?";
// console.log(mostVowels(sentence)); // Output: "today"

// Write a function named dynamicDivider(divisor). When invoked the dynamicDivider function will intake a number to be used as a divisor and will then return a new function. The function returned by dynamicDivider will accept a number - and that number will then be divided by the divisor that was defined when the dynamicDivider was first invoked.

// Examples:

//POLYS
//input: number
//output: function that takes another number
//PLAN:
//- write skeleton of outer function
//- write skelton of inner function

function dynamicDivider(divisor) {
  return function (num) {
    return num / divisor;
  };
}

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 5000);

// setTimeout(() => {
//   console.log("third");
// }, 0);

// console.log("fourth");

// //first -> fourth -> third -> second

// // let bar = function (s) {
// //   return s.toLowerCase() + "...";
// // };

// // let foo = function (message, cb1, cb2) {
// //   console.log(cb1(message));
// //   console.log(cb2(message));
// // };

// // foo("Hey Programmers", bar, function (s) {
// //   return s.toUpperCase() + "!";
// // });

// let foo = function () {
//   console.log("hello");
//   return 42;
// };

// console.log(foo);

// function asyncy(cb) {
//   setTimeout(cb, 1000);
//   console.log("async");
// }

// function greet() {
//   console.log("hello!");
// }

// async(greet);

/*
WHAT IS THE EVENT LOOP
    *Consists of the call stack and the message queue
    *Event loop checks if the call stack is empty; if it is it'll dequeue any task within the message queue and push it onto the stack

CALL STACK - TRACKS THE CURRENT TASK IN PROGRESS
    *synchronous task
    *last in first out
    *add to stack - push
    *remove from the stack - pop
    *stack structure


    // Show global object  and all its methods
// console.log(global);

//setTimeout is a method on the global object
//we can access it like so
//but the developers have made it easy for use and we don't need to key into the global object
// * call the setTimeout passing this function and call it after 5 seconds
// function hello() {
//   console.log("hello");
// }
// global.setTimeout(hello, 5000);



// //after 1 second I want to pass to the console.log function the argument sup
// setTimeout(console.log, 1000, "sup");

// function time() {
//   console.log("time is up");
// }

// setTimeout(time, 4000);

// function sayHi(name) {
//   console.log(`hi ${name}`);
// }

// setTimeout(sayHi, 2500, "roddy");


// function sayHello(name1, name2) {
//   console.log(`hello ${name1} and ${name2}`);
// }

// setTimeout(sayHello, 2500, "roddy", "roderick");

// //anon callback
// setTimeout(
//   (name1, name2) => {
//     console.log(`hello + ${name1} and ${name2}`);
//   },
//   4000,
//   "rod",
//   "roddy"
// );


//make sure when passing arguments to a setTimeout you are either passing a function name or anonymous function itself
//* examples above

//! don't pass an invoked function to a settimeout
//* that would be passing the return value of a function to a callback
// setTimeout(sayHi(), 3000, "brady", "robert");
//[ERR_INVALID_CALLBACK] CALLBACK MUST BE A FUNCTION. RECIEVED UNDEFINED

// let timer = setTimeout(
//   (name) => {
//     console.log(`hello ${name}`);
//   },
//   1000,
//   "mocha"
// );



//we can use this timer variable which holds a timer object to prevent the code from running
// console.log(timer);
/*
//rcursion with timeoUt
//we want to print the number and use the number as the delay for a settimeout
*/

// * is this actually recursing
//** technically it is calling itself but no its not recursion */

//** PSEUDORECURSION */
function delayedPrinter(delayedArr) {
  if (!delayedArr.length) return;
  const currentDelay = delayedArr.shift();
  console.log(currentDelay);

  //setTimeout(cb function, delay in milliseconds, param1, param2)
  //delayedprinter(delaysarr)

  setTimeout(delayedPrinter, currentDelay, delayedArr);
  //**ALT SYNTAX USING ANON CALLBACK */
  //   setTimeout(
  //     () => {
  //       delayedPrinter(delayedArr);
  //     },
  //     currentDelay,
  //     delayedArr
  //   );
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];

// delayedPrinter(delaysArr);

//.forEach doesnt care about the order in which you send callsbacks to the node api
//* delays are sent to the message queue all at the same time

function delayedPrinter2(delaysArr) {
  let totalDelay = 0;
  delaysArr.forEach((delay) => {
    totalDelay += delay;
    setTimeout(() => {
      console.log(delay);
    }, totalDelay);
  });
}

// delayedPrinter2(delaysArr);

/*
//SET INTERVAL
    *The global set INTERVAL method repeatedly executes a function or specified piece of code with a fixed time delay between each call
    *The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout()
        *this value can be passed to clearInterval() to cancel the timeout
    *Syntax
        *setInterval(callbackFunction, delayInMilliseconds, param1, param2, paramN)

    !If youw want to convert from millisecond to seconds
        *just divide by a thousand
            *Ex: 5000ms -> 5s
    WHAT DOES A SETTIMEOUT RETURN?
        * This method returns an interval ID which uniquely identidies the interval, so you can remove it later by calling clearInterval

*/

function food(food1, food2) {
  console.log(`I ate ${food1} and ${food2}`);
}

// setInterval(food, 1000, "pizza", "fries");

// function timeMaker(count) {
//   let timer = setInterval(() => {
//     console.log(count);
//     count--;
//     if (count === 0) {
//       return clearInterval(timer);
//     }
//   }, 1000);
// }

// timeMaker(5);
const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`How many beers are on the wall?`, bottlesOfBeerOnTheWall);

function bottlesOfBeerOnTheWall(num) {
  //base case
  if (num === 0) {
    console.log(`Aint no bottles of beer on the wall.... 🦆`);
    return;
  }

  if (num > 1) {
    console.log(`${num} bottles of beer on the wall.... 🍺`);
  } else {
    console.log(`${num} bottle of beer on the wall.... 🍺`);
  }

  if (num > 1) {
    setTimeout(console.log, 1000, `${num} bottles of beer...`);
  } else {
    setTimeout(console.log, 1000, `${num} bottle of beer...`);
  }
  setTimeout(console.log, 2000, "");

  setTimeout(console.log, 3000, `Take one down and pass it around🍺`);

  // ternary => condition ? if true : if false

  num == 2
    ? setTimeout(
        console.log,
        4000,
        `${num - 1} bottle of beer on the wall.... 🍺`
      )
    : setTimeout(
        console.log,
        4000,
        `${num - 1} bottles of beer on the wall.... 🍺`
      );

  //recursive step and call
  setTimeout(bottlesOfBeerOnTheWall, 5000, num - 1);
}

// bottlesOfBeerOnTheWall(4);

// if ("") {
//   console.log("11");
// }

// let value;

// console.log(value);

console.log("hello"); // line 1
setTimeout(() => {
  console.log("third");
}, 0);
console.log("world"); // line 3

// console.log(sayGoodbye("Jeff"));

// const sayGoodbye = function (name) {
//   return `Goodbye ${name}`;
// };

/*
Write a function makeAnimalSound(animal, sound) that accepts two strings. Use
string interpolation to return a new string using both arguments.  See the
examples for more information.
*/

function makeAnimalSound(str1, str2) {
  return `${str1} goes ${str2}!`;
}

console.log(makeAnimalSound("cow", "moo")); // => "cow goes moo!"
console.log(makeAnimalSound("DUCK", "QUACK")); // => "DUCK goes QUACK!"

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`What's poppin slime`, (answerone) => {
//   console.log(`you responded: ${answerone}`);
//   rl.question(`And if they're tripping?`, (answertwo) => {
//     console.log(`you responded: ${answertwo} five`);

//     rl.close();
//     console.log(`IF YOU GOT EYES LOOK AT ME NOW...........`);
//     setTimeout(console.log, 5000, "BITCH!");
//   });
// });

const readline = require("readline");
const rl111 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Whats poppin slime?`, responseOne);

function responseOne(firstAnswer) {
  console.log(`${firstAnswer}`);
  rl.question(`And if they hating?`, responseTwo);
}

function responseTwo(secondAnswer) {
  console.log(`${secondAnswer} five`);
  rl.question(
    `I aint got time to shuck and jive! These niggas sweet as?`,
    responseThree
  );
}
function responseThree(thirdAnswer) {
  console.log(`${thirdAnswer}`);
  rl.question(`Ciroc and Sprite on a private?`, responseFour);
}
function responseFour(fourthAnswer) {
  console.log(`${fourthAnswer}`);
  rl.question(
    `Bitch, Ive been tight since guiding light, and my pockets?`,
    responseFive
  );
}
function responseFive(fifthAnswer) {
  console.log(`${fifthAnswer}`);
  rl.question(`And my diamonds?`, responseSix);
}

function responseSix(sixthAnswer) {
  console.log(`${sixthAnswer}`);
  rl.question(`And my mommas?`, responseSeven);
}
function responseSeven(seventhAnswer) {
  console.log(`${seventhAnswer}`);
  rl.question(`And my daddy?`, responseEight);
}
function responseEight(eigthAnswer) {
  console.log(`${eigthAnswer}`);
  rl.question(`You faggots scared cause im too?`, responseNine);
}
function responseNine(ninthAnswer) {
  console.log(`${ninthAnswer}`);
  rl.question(`Been here for a while I was like?`, responseTen);
}
function responseTen(tenthAnswer) {
  console.log(`${tenthAnswer}`);
  rl.question(`I puts it down, Im so?`, responseEleven);
}

function responseEleven(eleventhAnswer) {
  console.log(`${eleventhAnswer}`);
  rl.question(`If you got eyes look at me now?`, lastResponse);
}
function lastResponse(lastAnswer) {
  console.log(`${lastAnswer.toUpperCase().repeat(5)}`);
  rl.close();
}

const VOWELS = ["a", "e", "i", "o", "u"];
function mostFrequentVowel(words, counter = {}) {
  // function that accepts a string and default counter param
  if (words.length === 0) {
    // if string is empty
    let max = 0; // let the max number be  0
    let mostFrequent = ""; // let the most frequent vowel be an empty string
    for (let vowel in counter) {
      // iterate through the counter to check if a value exists
      if (counter[vowel] > max) {
        // if the value at that iteration is greater than the current max
        max = counter[vowel]; // max becomes the value at that vowel
        mostFrequent = vowel; // most frequent vowel becomes the vowel at the current iteration
      }
    }
    return mostFrequent; // return the most frequent vowel or an empty string
  }
  let word = words[0]; // set the variable word to be the word at the zeroth index
  for (let letter of word) {
    // iterate through each letter of the current word
    if (VOWELS.includes(letter)) {
      //checking if the current letter is a vowel
      if (counter[letter]) {
        //if it is a vowel check to see if it is present in the counter object
        counter[letter]++; //assuming it is increment the value by 1
      } else {
        // if the current letter is a vowel but not current in the object
        counter[letter] = 1; //create the value in object and set the value to equal 1
      }
    }
  }
  return mostFrequentVowel(words.slice(1), counter); //recursively call the string until no words remain
}

// function mostFrequentVowel(words, counter = {}) {
//   if (words.length === 0) {
//     let max = 0;
//     let mostFrequent = "";
//     for (let vowel in counter) {
//       if (counter[vowel] > max) {
//         max = counter[vowel];
//         mostFrequent = vowel;
//       }
//     }
//     return mostFrequent;
//   }
//   let word = words[0];
//   for (let letter of word) {
//     if (VOWELS.includes(letter)) {
//       if (counter[letter]) {
//         counter[letter]++;
//       } else {
//         counter[letter] = 1;
//       }
//     }
//   }
//   return mostFrequentVowel(words.slice(1), counter);
// }
// console.log(mostFrequentVowel(["dog", "cow", "pig", "chicken", "horse"])); // 'o'
// console.log(mostFrequentVowel(["dog", "cow", "pig", "chicken"])); // 'i' or 'o'
/*
Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.


// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
//counter = { i: 1, e: 1 }
// mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
// mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
// mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
// mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
// mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
// mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

*/

function printOuterNumsFirst(nums) {
  // accepts an array of numbers
  if (nums.length === 0) return; // if numbers array is empty just return value

  // extract the number from the beginning if the length of the array is even
  // else, extract from the end
  let num; // declaring num variable
  if (nums.length % 2 === 0) {
    // if the length of the array is even
    num = nums.shift(); // remove the first element and store in num variable
  } else {
    // if the length of the array is odd
    num = nums.pop(); // remove the last element and store it in the num variable
  }

  // print the extracted number
  console.log(num); // print the number stored

  // Make a recursive call with the modified nums array.
  printOuterNumsFirst(nums); //recursively call the modified nums array until empty
}
/*

printOuterNumsFirst([1, 2, 3, 4, 5, 6, 7, 8]);
// 1
// 8
// 2
// 7
// 3
// 6
// 4
// 5

printOuterNumsFirst([21, 4, 6, 93, 78]);
// 78
// 21
// 93
// 4
// 6

*/

function eliminateType(arr) {
  // take in an array
  return function (type) {
    // return a function that specifies a type
    return arr.filter((ele) => typeof ele !== type); // filter through each ele of the arr excluding the type provided
  };
}

/*

Examples:

const smallEliminate = eliminateType([1, 'one', 2, 'two', 3, 'three']);
smallEliminate('number'); // ['one', 'two', 'three']
smallEliminate('string'); // [1, 2, 3]

const eliminate = eliminateType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
eliminate('number'); // [undefined, 'world', { color: 'red' }, true, [4, 5], 'hello', false]
eliminate('object'); // [2, undefined, 'world', true, 3, 'hello', false]
*/

function printAndPause(nums) {
  if (nums.length === 0) return;
  let integer = nums[0];
  console.log(integer);
  return setTimeout(printAndPause, integer, nums.slice(1));
}

// printAndPause([200, 800, 700, 8000, 2100, 8800]);

/*
200
// pause 200ms
800
// pause 800ms
700
// pause 700ms
8000
// pause 8000ms
2100
// pause 2100ms
8800
// pause 8800ms
*/

/*
Square the value of every element in the array. Presume that you will only get numbers in the input array.
*/
function squared(input, arr = []) {
  if (input.length === 0) return arr;
  let num = input[0] ** 2;
  arr.push(num);
  return arr, squared(input.slice(1), arr);
}
function squared1(input) {
  return input.map((ele) => ele ** 2);
}
function squared2(input) {
  return input.map((ele) => Math.pow(ele, 2));
}
// const input = [1, 2, 3, 4, 5];
// //[1, 4, 9, 16, 25];
// console.log(squared(input));

/*
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
*/

// const input = [1, -4, 12, 0, -3, 29, -150];

function positiveSum(input) {
  let sum = 0;
  return input.filter((ele) => ele > 0).reduce((acc, ele) => acc + ele, 0);
}

// console.log(positiveSum(input));

/*
Calculate the mean values of the number elements from the input array.
*/

// const input = [12, 46, 32, 64];

// { mean: 38.5}

function meanAndMedian(input, obj = {}) {
  obj["mean"] = input.reduce((acc, ele) => ele + acc) / input.length;

  return obj;
}

// console.log(meanAndMedian(input));

/*
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

  **hag

*/
// const input = "George Raymond Richard Martin";

// expected output "GRRM";

function initial(name) {
  return name
    .split(" ")
    .map((ele) => ele[0])
    .join("");
}

// console.log(initial(input));

/*
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
*/

// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

//[13, 67, 54];

function ageDifference(input) {
  let ages = input.map((person) => person.age);
  return [
    Math.min(...ages),
    Math.max(...ages),
    Math.max(...ages) - Math.min(...ages),
  ];
}

// console.log(ageDifference(input));

/*
Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e
*/

// const input = "Every developer likes to mix kubernetes and javascript";

//"E3y d7r l3s to mix k8s and j9t"

function creation(word) {
  return word[0] + (word.length - 2) + word[word.length - 1];
}

function numeronyms(str) {
  return str
    .split(" ")
    .map((word) => (word.length >= 4 ? creation(word) : word))
    .join(" ");
}

// console.log(numeronyms(input));

/*
If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
*/
// function countDown(num) {
//   for (let i = num; i < 0; i--) {
//     return i;
//   }
// }

function factorial(num) {
  return new Array(num)
    .fill(null)
    .map((number, index) => index + 1)
    .reduce((acc, number) => acc * number, 1);
}
// const input = 6;
//720

// console.log(factorial(input));

/*
Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
*/
// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

//{
//    a: 1,
//    b: 1,
//    c: 2,
//    d: 2,
//    f: 2,
//    g: 1,
//  }

function count2DArray(array, obj = {}) {
  array.flat().map((ele) => (obj[ele] ? obj[ele]++ : (obj[ele] = 1)));
  return obj;
}

function count2DArray(array) {
  return array.flat().reduce((acc, ele) => {
    if (acc[ele]) {
      acc[ele]++;
    } else {
      acc[ele] = 1;
    }
    return acc;
  }, {});
}

// console.log(count2DArray(input));
/*
You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
*/

// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "David", scores: [100, 100, 100] },
// ];

//[
//  { name: 'Jack', average: 100 }
//]

function highAvg(arr) {
  return arr
    .map((student) => {
      let sum = student.scores.reduce((acc, num) => acc + num, 0);
      return { name: student.name, average: sum / student.scores.length };
    })
    .filter((student) => student.average > 90);
}

// console.log(highAvg(students));

/*
refactor a previous function you made to do a factorial sum
*/

function factorialSum(num) {
  return new Array(num)
    .fill(null)
    .map((number, index) => index + 1)
    .reduce((acc, number) => acc + number, 0);
}

// console.log(factorialSum(100));

/*
You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.
*/

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

// [
//  { category: 'Clothes', average: 55 },
//  { category: 'Electronics', average: 55 }
//]

function productCategory(products) {
  products.reduce((acc, product) => {
    let category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
}

// let productAverage = Object.keys(productCategory).map((category) => {
//     let sum = productCategory[category].reduce((acc, product) => {
//       acc + product, 0;
//       return { category: category, average: sum / productsByCategory[category].length};
//     });
//   }

// function sortAndReport() {
//   productAverage.filter((category) => category.average >= 50)
// }

// /* Use map to create a dictionary with category as the key
// and an array of products as the value */

// const productsByCategory = products.reduce((acc, product) => {
//   const category = product.category;
//   if (!acc[category]) {
//     acc[category] = [];
//   }
//   acc[category].push(product);
//   return acc;
// }, {});

// // Use map to calculate the average price for each category

// const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
//   const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
//   return { category: category, average: sum / productsByCategory[category].length };
// });

// // Use filter to only select categories with an average above a certain threshold

// const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

/*
This code is using JavaScript's reduce and map methods to process an array of products and group them by category, calculate the average price of each category, and then filter the categories that have an average price greater than 50.

It starts by using the reduce method on the array of products and an empty object as an initial accumulator. The callback function passed to reduce takes in two arguments: an accumulator object and the current product.

It assigns the product's category to a variable category, and checks if the accumulator object already contains a key for this category. If it doesn't, it creates a new key on the accumulator object with an empty array as its value. It then pushes the current product into the array of the corresponding category and returns the accumulator object.

In the end, productsByCategory will be an object where each key is a category name, and the value is an array of products that belong to that category.

Next, it uses Object.keys(productsByCategory) to extract the keys (category names) of the productsByCategory object and then map method to iterate over these keys and calculate the average price of products in each category. It calculates the sum of prices of all products in each category using reduce method and divides this sum with the number of products in that category.

Finally, it filters the categories that have an average price greater than 50 using filter method.


*/

// console.log(sortAndReport(products));

// function recursivePreserveType(array) {
//     return function (...str) {
//         function inner(newArr = array.slice()) {
//             if (newArr.length <= 0) return [];

//             let el = newArr.shift();

//             if (str.includes(typeof el)) {
//                 return [el, ...inner(newArr)];
//             }

//             return [...[], ...inner(newArr)]
//         }

//         return inner()
//     }

// }

// function dynamicSlice(start, end) {
//   if (start < 0) start = 0;
//   return function inner(arr, slice = []) {
//     if (end >= arr.length) end = arr.length;
//     // Base Case:
//     if (start == end) return slice;
//     slice.push(arr[start]);
//     start++;
//     return inner(arr, slice);
//   };
// }

// const slicer2 = dynamicSlice(2, 7);
// console.log(slicer2(["kittens", "puppies", "cats", "dogs"])); // prints [ 'cats', 'dogs' ]

// let goodbye;
// console.log(goodbye);

if ("banana") {
  console.log("h");
} else if ([]) {
  console.log("f");
} else if ("") {
  console.log("k");
} else {
  console.log("g");
}

console.log(sayHello("Jeff"));

function sayHello(name) {
  return `Hello ${name}`;
}

/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
  if (!code.length) return;
  let first = code.shift(); // takes the first element and removes it from the array
  if (first == 0) {
    console.log("beep");
    setTimeout(r2d2Speaks, 400, code);
  } else if (first == 1) {
    console.log("boop");
    setTimeout(r2d2Speaks, 800, code);
  }
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums, sorted = []) {
  if (nums.length === 0) return sorted;
  let i = smallestNum(nums);
  sorted.push(nums[i]);
  nums.splice(i, 1);
  return sort(nums, sorted);
}

function smallestNum(array) {
  let smalls = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smalls) {
      smalls = array[i];
    }
  }
  return array.indexOf(smalls);
}

/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

// function evenNumberRange(num1, num2) {
//   if (num1 >= num2) return []; // if number 1 is bigger than number 2 eturn empty arr
//   let arr = []; // create empty array
//   for (let i = num1; i <= num2; i++) { //iterate between numbers
//     if (i % 2 == 0) { //if number is even
//       arr.push(i); //push number
//     }
//   }
//   return arr;
// }

function evenNumberRange(num1, num2) {
  if (num1 > num2) return []; // if number 1 is bigger than number 2 eturn empty arr
  if (num1 % 2 == 0) {
    return [num1, ...evenNumberRange(num1 + 2, num2)];
  }
  //   num1++;
  return [num1 + 1, ...evenNumberRange(num1 + 2, num2)];
}

// console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
// console.log(evenNumberRange(22, 25)); // prints [22, 24]
// console.log(evenNumberRange(2, 0)); // prints []

/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Like the built in Array#slice, it should include the
		"start" index and exclude the "end" index. Do not use the built-in Array#slice method.

    If the start index is less than 0, the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
		slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(1, 3);
    console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

    const slicer2 = dynamicSlice(2, 7);
    console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

		const slicer3 = dynamicSlice(-10, 2);
    console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
*/

function dynamicSlice(start, end) {
  return function (array) {
    // return function
    let arr = []; //creating a copy array
    if (start < 0) {
      //if start is less than 0
      if (end > array.length) {
        //if end is larger than the array length
        return arr.push(...array); //return the array from start to end
      } else if (end <= array.length) {
        //if end isnt larger than the array length and the start is less than 0
        let newArr = array.splice(0, end); // create a copy of the array from index 0 and end-1 number of elements after
        return newArr; //return that copy
      }
    } else {
      //if start is 0 or larger
      return array.splice(start, end - 1); // return a new array from the start index to the index minus 1
    }
  };
}

const slicer = dynamicSlice(1, 3);
console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]
const slicer2 = dynamicSlice(2, 7);
console.log(slicer2(["kittens", "puppies", "cats", "dogs"])); // prints [ 'cats', 'dogs' ]
const slicer3 = dynamicSlice(-10, 2);
console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]

/***********************************************************************
Write a function called `preserveTypes` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept any number of strings that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified types.

Examples:

const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = preserveTypes([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ];
console.log(preserveFunc2('boolean', 'string', 'undefined')); // prints [ undefined, 'world', true, 'hello', false ]

*/

function preserveTypes(array) {
  return function (...types) {
    return array.filter((ele) => types.includes(typeof ele));
  };
}

// function preserveTypes(arr) {
//   return function (...types) {
//     return arr.filter((item) => types.includes(typeof item));
//   };
// }

/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/

// function recursivePreserveType(array) {
//   return function (type) {
//     array.filter((ele) => {
//       typeof ele === type;
//     });
//   };
// }

function recursivePreserveType(array) {
  return function checkType(str, sorted = [], copy = array.slice()) {
    if (!copy.length) return sorted;
    let firstEl = copy.shift();

    if (str === typeof firstEl) {
      sorted.push(firstEl);
    }

    return checkType(str, sorted, copy);
  };
}

/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
  if (!code.length) return;
  let first = code.shift(); // takes the first element and removes it from the array
  if (first == 0) {
    console.log("beep");
    setTimeout(r2d2Speaks, 400, code);
  } else if (first == 1) {
    console.log("boop");
    setTimeout(r2d2Speaks, 800, code);
  }
}

let code = [0, 1, 1, 0];

r2d2Speaks(code);

/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums, sorted = []) {
  if (nums.length === 0) return sorted;
  let i = smallestNum(nums);
  sorted.push(nums[i]);
  nums.splice(i, 1);
  return sort(nums, sorted);
}

function smallestNum(array) {
  let smalls = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smalls) {
      smalls = array[i];
    }
  }
  return array.indexOf(smalls);
}

/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

// function evenNumberRange(num1, num2) {
//   if (num1 >= num2) return []; // if number 1 is bigger than number 2 eturn empty arr
//   let arr = []; // create empty array
//   for (let i = num1; i <= num2; i++) { //iterate between numbers
//     if (i % 2 == 0) { //if number is even
//       arr.push(i); //push number
//     }
//   }
//   return arr;
// }

function evenNumberRange(num1, num2) {
  if (num1 > num2) return []; // if number 1 is bigger than number 2 eturn empty arr
  if (num1 % 2 == 0) {
    return [num1, ...evenNumberRange(num1 + 2, num2)];
  }
  //   num1++;
  return [num1 + 1, ...evenNumberRange(num1 + 2, num2)];
}

// console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
// console.log(evenNumberRange(22, 25)); // prints [22, 24]
// console.log(evenNumberRange(2, 0)); // prints []

/* Dynamic Slice

    Write a function that accepts two numbers, and returns another function that accepts an array.
    The new function, when invoked, should return a copy of a portion of the array between the indices of
    the arguments passed to the first function. Like the built in Array#slice, it should include the
		"start" index and exclude the "end" index. Do not use the built-in Array#slice method.

    If the start index is less than 0, the returned function should slice from the beginning of the array.
    Similarly if the end index is greater than the length of the array, the returned function should
		slice up to the end of the array. See below for examples.

    const slicer = dynamicSlice(1, 3);
    console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

    const slicer2 = dynamicSlice(2, 7);
    console.log(slicer2(['kittens', 'puppies', 'cats', 'dogs'])); // prints [ 'cats', 'dogs' ]

		const slicer3 = dynamicSlice(-10, 2);
    console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]
*/

function dynamicSlice(start, end) {
  return function (array) {
    // return function
    let arr = []; //creating a copy array
    if (start < 0) {
      //if start is less than 0
      if (end > array.length) {
        //if end is larger than the array length
        return arr.push(...array); //return the array from start to end
      } else if (end <= array.length) {
        //if end isnt larger than the array length and the start is less than 0
        let newArr = array.splice(0, end); // create a copy of the array from index 0 and end-1 number of elements after
        return newArr; //return that copy
      }
    } else {
      //if start is 0 or larger
      return array.splice(start, end - 1); // return a new array from the start index to the index minus 1
    }
  };
}

// const slicer = dynamicSlice(1, 3);
// console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]

const slicer2 = dynamicSlice(2, 7);
console.log(slicer2(["kittens", "puppies", "cats", "dogs"])); // prints [ 'cats', 'dogs' ]
const slicer3 = dynamicSlice(-10, 2);
console.log(slicer3([99, 40, 131, 8])); // prints [ 99, 40 ]

function dynamicSlice(start, end) {
  return function (array) {
    // return function
    let arr = []; //creating a copy array
    if (start < 0) {
      //if start is less than 0
      if (end > array.length) {
        //if end is larger than the array length
        return arr.push(...array); //return the array from start to end
      } else if (end <= array.length) {
        //if end isnt larger than the array length and the start is less than 0
        let newArr = array.splice(0, end); // create a copy of the array from index 0 and end-1 number of elements after
        return newArr; //return that copy
      }
    } else {
      //if start is 0 or larger
      return array.splice(start, end - 1); // return a new array from the start index to the index minus 1
    }
  };
}
// const slicer = dynamicSlice(1, 3);
// console.log(slicer([0, 1, 2, 3])); // prints [ 1, 2 ]
// const slicer2 = dynamicSlice(2, 7);
// console.log(slicer2(["kittens", "puppies", "cats", "dogs"])); // prints [ 'cats', 'dogs' ]
// const slicer3 = dynamicSlice(-10, 2);

/***********************************************************************
Write a function called `preserveTypes` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept any number of strings that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified types.

Examples:

const preserveFunc = preserveTypes([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = preserveTypes([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ];
console.log(preserveFunc2('boolean', 'string', 'undefined')); // prints [ undefined, 'world', true, 'hello', false ]

*/
function preserveTypes(array) {
  return function (...types) {
    return array.filter((ele) => types.includes(typeof ele));
  };
}

// function preserveTypes(arr) {
//   return function (...types) {
//     return arr.filter((item) => types.includes(typeof item));
//   };
// }

/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/

// function recursivePreserveType(array) {
//   return function (type) {
//     array.filter((ele) => {
//       typeof ele === type;
//     });
//   };
// }

function recursivePreserveType(array) {
  return function checkType(str, sorted = [], copy = array.slice()) {
    if (!copy.length) return sorted;
    let firstEl = copy.shift();

    if (str === typeof firstEl) {
      sorted.push(firstEl);
    }

    return checkType(str, sorted, copy);
  };
}

// # Single Responsibility Principle (SRP) & DRY (Don't Repeat Yourself)

// SRP refers to the idea that a function or class or method should be responsible
// for just as much functionality as is necessary...no more, no less.

// ## Single Responsibility Principle: Do one thing and do it well

// Following the guidelines of SRP sets up easier to read code that just makes more
// sense.

// ## DRY - Don't Repeat Yourself

// Making code that is more readable and more reusable should be every programmer's
// goal. By taking a critical look at your code and identifying places where you
// may have identical logic repeated throughout and creating smaller, more reusable
// functions or methods to contain that logic, allows you to write code that other
// programmers will be able to follow more closely and accurately, leading to
// maintainable code.

// The opposite of DRY coding is, of course, WET. We Enjoy Typing.

// calculator.js

/*
Option A: Assigning an object to the module.exports property

*/

const operations = ["+", "-", "*"];

function add(num1, num2) {
  // ...
}

function subtract(num1, num2) {
  // ...
}

function multiply(num1, num2) {
  // ...
}

module.exports = {
  // only add, subtract, and operations gets exported from this file
  add,
  subtract,
  operations,
};

// The above is shorthand for below
// module.exports = {
//   add: add,
//   subtract: subtract,
//   operations: operations
// };

/*
Option B: Set properties on the module.exports object
*/

const operationing = ["+", "-", "*"];

function adding(num1, num2) {
  // ...
}

function subtracting(num1, num2) {
  // ...
}

function multiplying(num1, num2) {
  // ...
}

// set the add, subtract, and operations properties on the module.exports object

module.exports.adding = adding;
module.exports.subtracting = subtracting;
module.exports.operationing = operationing;

/*
Option C: The exports shortcut
 */

const operationed = ["+", "-", "*"];

function added(num1, num2) {
  // ...
}

function subtracted(num1, num2) {
  // ...
}

function multiplied(num1, num2) {
  // ...
}

// set the add, subtract, and operations properties on the exports object
exports.added = added;
exports.subtracted = subtracted;
exports.operationed = operationed;
/*
Exporting a single item from a module
*/

const operationer = ["+", "-", "*"];

function adder(num1, num2) {
  // ...
}

function subtracter(num1, num2) {
  // ...
}

function multiplyer(num1, num2) {
  // ...
}

// set module.exports to the operations function instead of an object
module.exports = operationer;

// class Person {
//   constructor(firstName) {
//     this.firstName = "Caleb";
//   }

//   greet() {
//     console.log(`${this.firstName} says hello!`);
//   }
// }

/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  let cutest = 0;
  let i = 0;

  while (i < cats.length) {
    const cat = cats[i];
    if (cat.cuteness > cutest) {
      cutest = cat;
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: "Fluffy", cuteness: 9 },
  { name: "Princess", cuteness: 6 },
  { name: "Tiger", cuteness: 7 },
  { name: "Indie", cuteness: 5 },
];
debugger;
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }

/*

Fix the function `shouldRecycle` that determines if the item passed in can
or cannot be recycled.

If an item is plastic then it can be recycled and should return `Recycle Me!`
UNLESS its color is black. Black plastics should return `Currently, cannot be
recycled.`

If an item is made of aluminum or paper then it can be recycled and should
return `Recycle Me!`


*/

function shouldRecycle(item) {
  if (item.plastic && item.color !== "black") {
    return "Recycle Me!";
  } else if (item.color === "black" && item.plastic) {
    return "Currently, cannot be recycled.";
  } else if (item.aluminum) {
    return "Recycle Me!";
  } else if (item.paper) {
    return "Recycle Me!";
  }
  return "Cannot be recycled";
}

const waterBottle = {
  plastic: true,
  color: "clear",
  aluminum: false,
  paper: false,
};

debugger;

console.log(shouldRecycle(waterBottle)); // 'Recycle Me!'

// Adds up positive integers from 1-n

// function addNums(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // Adds up values of addNums(1) through addNums(n)

// function addManyNums(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     // for (let j = 1; j <= i; j++) {
//     sum += addNums(i);
//     // sum += j;
//     // }
//   }
//   return sum;
// }

// const [addNums, addManyNums] = require("./phase-1");
// // Runs `addNums` in 10 increasing increments

// function addNums10(increment) {
//   let arr = [];
//   for (let i = 1; i <= 10; i++) {
//     // if (i === 0) continue;
//     arr.push(addNums(i * increment));
//   }
//   return arr;
// }

// // Runs `addManyNums` in 10 increasing increments

// function addManyNums10(increment) {
//   let arr = [];
//   for (let i = 0; i <= 10 * increment; i += increment) {
//     if (i === 0) continue;
//     arr.push(addManyNums(i));
//   }
//   return arr;
// }

const [addNums, addManyNums] = require("./phase-1");
// Runs `addNums` in 10 increasing increments
function addNums10Timing(increment) {
  let arr = [];
  for (let i = 0; i <= 10 * increment; i += increment) {
    if (i === 0) continue;
    startTimer = Date.now();
    arr.push(addNums(i));
    endTimer = Date.now();
    console.log(endTimer - startTimer);
  }
  return arr;
}
// Runs `addManyNums` in 10 increasing increments

function addManyNums10Timing(increment) {
  let arr = [];
  for (let i = 0; i <= 10 * increment; i += increment) {
    if (i === 0) continue;
    startTimer = Date.now();
    arr.push(addManyNums(i));
    endTimer = Date.now();
    console.log(endTimer - startTimer);
  }
  return arr;
}

n = 1000;
console.log(`addNums(${n}): `);
console.time("timer1");
addNums10Timing(10000000);
