//Challenge One
console.log("Challenge One");

var vowels = "aeiou";
var currentletter = "";
var letters = "";

function noVowels(message){    
    for (var i = 0; i < message.length; i++) {
        currentletter = message.charAt(i)
        if (vowels.indexOf(currentletter) >= 0 ){
            currentletter = ""
        }
        else {
            letters += currentletter;
        }              
    }
return letters
}

message = "Hello, how are you";
console.log(noVowels(message));
