var inputtedEquation = "";

$( "#myform" ).keyup(
    function(){
        inputtedEquation = $( this ).val();
        console.log("yep");
    }
)

function findAmounts(input) {

    document.getElementById("output").innerHTML = input;
}
        
$(".enter").click(
    function(){
        findAmounts(inputtedEquation);
    }
)

