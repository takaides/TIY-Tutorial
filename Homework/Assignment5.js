// Exercise 1
function addNumbers(numberA, numberB) {
  console.log(numberA + " + " + numberB);
  var sum = numberA + numberB;
  return sum;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

// Exercise 2
function yell(phrase){
  var text;
  text = phrase.toUpperCase(phrase);
  return text;
}

function yell10(phrase) {
  var text;
  text = phrase.toUpperCase(phrase);
  text = text.repeat(10);
  return text;
}

var someText = "howdy";

console.log(yell(someText));
console.log(yell10(someText));

// Exercise 3
function longest(a,b){
  var long;
  if (a.length > b.length) {
    console.log(a + " is longer than " + b);
    return a;
  } else {
    if (length.a < length.b) {
      console.log(b + " is longer than " + a);
      return b;
    } else {
      console.log(a + " and " + b + " are the same length");
      return undefined;
    }
  }
}
var array1 = [5,2,9,6];
var array2 = [1,2,3];
var str2 = "hello";

console.log(longest(array1,array2));
console.log(longest(someText,str2));

// Exercise 4
function isVowel(a){
  var vowels = ["a", "e", "i", "o", "u"];
  var tempChar = a.toLowerCase(a);
  var isVowel = false;
  var i = 0;
  if (a.length != 1) {
    tempChar = tempChar.substr(0,1);
  }
  while (vowels[i]) {
    if (vowels[i]==tempChar){
      isVowel=true;
      console.log(a + " is a vowel!");
      return isVowel;
    } else {
      i++;
    }
  }
  if (isVowel==false){
    console.log(a + " is not a vowel! :(");
    return isVowel;
  }
}

var charA = "a";
var charB = "B";

console.log(isVowel(charA));
console.log(isVowel(charB));
console.log(isVowel(someText));
