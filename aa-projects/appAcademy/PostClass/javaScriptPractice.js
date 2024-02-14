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
