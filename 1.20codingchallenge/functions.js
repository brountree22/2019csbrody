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