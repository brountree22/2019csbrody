var i = 5;
var player = "";
var turn = player


$('.x').click(
    function(){
        i += 1;
    console.log(i);
    }
);

function assign (player){   
    if ( (i % 2) == 0 ) {
        player = "x";
        i++;  
    }
    else {
        player = "o";
        i++;     
    }
    console.log(player);
    return turn = player;
}  


function xoro(thing) { 
    console.log(turn);
    //var id = thing.att("id") 
    if (turn == "o"){
        $(thing).text("O");
        console.log("o worked");
    }
    else  {
        if (turn == "x") {
            $(thing).text("X");
            console.log("X worked");
        }
        else {
            console.log("something went wrong making it x or o");
        }
    }
}


//for (var t = 1; t <= 9; t++){
$('.box').click(    
function(){
    assign(player);
    xoro($(this));
    }
)

 