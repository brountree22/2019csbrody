//Challenge One
console.log ("Challenge One")

function centuryFromYear(year) {
    return Math.ceil (year/100)
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

//Challenge Two
console.log ("Challenge Two");

function reverse(message) {
    var rev = ""
    for (var i = message.length -1; i>=0; i--) {
        rev += message.charAt(i)
        
    }
    return rev
}

console.log(reverse("hello"));
console.log(reverse("good"));

//Challenge Three
console.log("Challenge Three");

function palindrome(word) {
    var rev = ""
    for (var i = word.length -1; i>=0; i--) {
        rev += word.charAt(i)
    }
    if (rev == word) {
        console.log("Yep it's a palindrome")
        return rev
    }
    else {
        console.log("Nope it's not a palindrome")
        console.log(word)
        return rev
    }
}

word = "brody"
console.log(palindrome(word))