function countingLetters(phrase) {
  var lettersArray = phrase.split(" ").join("").split("");
  var countingObject = {};
  for (var i = 0; i < lettersArray.length; i++) {
    if (countingObject.hasOwnProperty(lettersArray[i])){
      countingObject[lettersArray[i]] += 1;
    }
    else {
      countingObject[lettersArray[i]] = 1;
    }
  }
  return countingObject;
}

console.log(countingLetters("lighthouse in the house"));