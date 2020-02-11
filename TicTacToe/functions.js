var i = 5;
var player = "";
var turn = player;
var t = 0;
var board = [document.getElementById('.1'),document.getElementById('.2'),document.getElementById('.3'),
             document.getElementById('.4'),document.getElementById('.5'),document.getElementById('.6'),
             document.getElementById('.7'),document.getElementById('.8'),document.getElementById('.9')];

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
            $(thing).text(" O");
            thing.attr("clicke","true")
        console.log("o worked");
        }
        else {console.log("already clicked");i--}
    }
    else  {
        if (turn == "x") {
            if (thing.attr("clicke") == "false") {
                $(thing).text(" X");
                thing.attr("clicke","true")
            console.log("X worked");
            }
            else {console.log("already clicked");i--}
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
    console.log(acrosstop)
    checkWin();
    t++
    }
)

var acrosstop = board[0] = board[1] + board[2];
var acrossmiddle = board[3] + board[4] + board[5];
var acrossbottom = board[6] + board[7] + board[8];

function checkWin() {
    if (acrosstop = "ooo"){
        alert("O wins!")
    }
    else{
        console.log(acrosstop);
    }
}



 