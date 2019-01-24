//starts with 1 consonant
function(userInput){

  var example1 = "swirl";
  var splitLetters = example1.split("");  //a //turns into an array
  var translation = [];
  var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];


  //starts with a vowel
  var word = "";
  var startsWithVowel = false;

for (var i = 0; !startsWithVowel; i++) {

  vowels.forEach(function(vowel) {
    if (vowel === splitLetters[0]) {
      word = splitLetters.join("") + "way"
      startsWithVowel = true;
    }
  });

// Starts with consonant
  if(!startsWithVowel){
    var shiftLetters = splitLetters.shift(); //b
    splitLetters[splitLetters.length] = shiftLetters;
    word = splitLetters.join("") + "ay";
    console.log(word);

  }

  console.log(startsWithVowel);
  console.log(shiftLetters);
  console.log(word);
}}
