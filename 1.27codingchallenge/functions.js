//Challenge One
console.log("Challenge One");

 var currentletter = "";
 var final = ""

function everyOther(message, x) {
    for (var i = 0; i < message.length; i+x) {
        currentletter = message.charAt(i);
        final += currentletter
    }
return final
}

var x = 3
message = "supercalifragilisticexpialidocious"
console.log(everyOther(message, x))