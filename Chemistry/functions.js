public enum element{
    H();
    He();
    Li();
    Be();
    B();
    C();
    N();
    O();
    F();

}

var inputtedEquation = "";

$( "input" ).keyup(
    function(){
        inputtedEquation = $( this ).val();
    })

function findAmounts(inputted) {
    
}
        
$("enter").click(
    function(){
        findAmounts(inputtedEquation);
    }
)

