//Nuala's

//starts with 1 consonant
function(userInput){

  var userInputString = "swirl";
  var userInputArray = userInputString.split("");  //a //turns into an array
  var vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  var wentThroughOnce = false;

  //starts with a vowel
  var word = "";
  var startsWithVowel = false;

// This cycles through until starts with vowel is true
for (var i = 0; startsWithVowel; i++) {


// This decides if the first letter is a vowel
  vowels.forEach(function(vowel) {
    if (vowel === userInputArray[0]) {
      if (startswithVowel = false){
      }else{
        // {word = userInputArray.join("") + "way"
        startsWithVowel = true;
      }
    }

// Starts with consonant
  if(!startsWithVowel){
    var shiftLettersB = userInputArray.shift(); //b
    userInputArray[userInputArray.length] = shiftLettersB;

    wentThroughOnce = true;
  }

  if (wentThroughOnce){
  word = userInputArray.join("") + "ay";
  } else {
  word = userInputArray.join("") + "way";
  });
  });

  word =
});
    console.log(shiftLettersB);
    console.log(word);

    console.log(startsWithVowel);

    console.log(word);


}
