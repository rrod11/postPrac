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

function myForEach(array, cb) {
  for (let ele of array) {
    cb(ele);
  }
}
