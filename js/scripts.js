var replaceVowels = function(string1) {
  var allLetters = string1.split('');
  var vowels = ["a", "e", "i", "o", "u"];
  for(var letterIndex = 0; letterIndex < allLetters.length; letterIndex += 1) {
    for(var vowelIndex = 0; vowelIndex < vowels.length; vowelIndex += 1) {
      if(allLetters[letterIndex] === vowels[vowelIndex]){
        allLetters[letterIndex] = '-';
      }
    };
  };
  return allLetters.join('')
};

$(document).ready(function(){
  $("#submitBtn").click(function(event){
    event.preventDefault();

    $("#puzzleoutput").text(replaceVowels($('#stringInput').val()));
    $(".form-group").slideUp();
  });
});
