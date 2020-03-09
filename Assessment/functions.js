$('#1').click(
    function() {
        document.getElementById("7").style.backgroundColor = "orange";
    }
)
$('#2').click(
    function() {
        document.getElementById("7").style.backgroundColor = "purple"; 
    }
)
$('#3').click(
    function() {
        document.getElementById("7").style.backgroundColor = "maroon";
        document.getElementById("7").innerHTML = "3"
    }
)
$('#4').click(
    function() {
        document.getElementById("7").style.backgroundColor = "maroon";
        document.getElementById("7").innerHTML = "4"
    }
)

$('#5').click(
    function() {
        var number = Math.floor(Math.random() * 101);
        document.getElementById("7").innerHTML = "5" 
        document.getElementById("6").innerHTML = number

    }
)
$('#6').click(
    function() {
        document.getElementById("7").style.backgroundColor = "orange";
        document.getElementById("7").innerHTML = ""
    }
)

for (i = 1; i<=144; i++){
    document.createElement("minibox");
    /* 
    Here is where I left off. I had no problem with the six buttons and 
    the output box. But, after some research, I am still confused on the 
    method needed to create all of the grid boxes in the green field in
    the project. I have not learned this yet. 
    */
}
