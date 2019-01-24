//starts with 1 consonant
function(userInput){

  var example1 = "buy";
  var letters = example1.split("");   //turns into an array
  var translation = [];
  var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];


  //starts with a vowel
  var word = "";
  var startsWithVowel = false;

  vowels.forEach(function(vowel) {
    if (vowel === letters[0]) {
      word = letters.join("") + "way"
      startsWithVowel = true;
    }
  });

// Starts with consonant
  if(!startsWithVowel){
    var shiftLetters = letters.shift();
    shiftLetters.join("").push("ay");
  }
  console.log(shiftLetters);

}
