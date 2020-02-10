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

/*function clicked(thing){
    if (thing.indexOf("O") >= 0){
        return true;
    }
    else if (thing.indexOf("X") >= 0){
        return true;
    }
    else if (thing.indexOf("X") == -1){
        return false;
    }
    else if (thing.indexOf("O") == -1){
        return false;
    }
    else {
        console.log("oops");
    }
}*/

function xoro(thing) { 
    console.log(turn);
    //var id = thing.att("id")
    if (turn == "o"){
        if (thing.attr("clicke") == "false") {
            $(thing).text("O");
            thing.attr("clicke","true")
        console.log("o worked");
        }
        else {console.log("already clicked")}
    }
    else  {
        if (turn == "x") {
            if (thing.attr("clicke") == "false") {
                $(thing).text("X");
                thing.attr("clicke","true")
            console.log("X worked");
            }
            else {console.log("already clicked")}
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

 