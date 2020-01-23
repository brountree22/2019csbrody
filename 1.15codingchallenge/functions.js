// Challenge One

console.log("Challenge One");
var a = 3;
var b = 15;

function add(param1, param2){
    return param1 + param2;
}

console.log(a + " + " + b + " = " + add(a,b));

function mult(number1, number2){
    return number1 * number2;
}

console.log(a + " * " + b + " = " + mult(a,b));

function div(divisor, dividend){
    return dividend / divisor;
}

console.log(b + " / " + a + " = " + div(a,b))


// Challenge Two
console.log("Challenge Two");
//var m = 8;
//var h = 10;

function swoNumbers(m, h){
    for(var i=m; i<h; i++){
        console.log(i);
    }
}
swoNumbers(8,15);


// Challenge Three
console.log("Challenge Three");


function showNumbers(e, r, c){
    for(var i=e; i<r; i+c){
        console.log(i);
    }
}

showNumbers(3,12,4) 
 


 