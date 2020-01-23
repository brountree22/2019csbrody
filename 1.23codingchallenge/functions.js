//Challenge One
console.log("Challenge One");

var vowels = "aeiou"
var currentletter = "";
var letters = ""



function noVowels(message){    
    for (var i = 0; i < message.length; i++) {
        currentletter = message.charAt(i)
        if (currentletter == vowels.indexOf(message.charAt(i))){
            currentletter = ""
            i++
        }
        else {
            letters += currentletter
        }              
    }
return letters
}

message = "Hello, how are you";
console.log(noVowels(message));
console.log (vowels.indexOf(message.charAt(i)))