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
