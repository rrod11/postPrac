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

let arr = [1, 1, 3, 2, 2, 1];
//         0  1  2  3  4  5

const result = arr.reduce(callback, {});

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
