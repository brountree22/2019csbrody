var i = 5;
var player = "";
var turn = player;
var t = 0;
var middleclicked = false;
var pplayer = "";

$('.x').click(
    function(){
        i += 1;
    }
);

function assign (player){   
    if ( (i % 2) == 0 ) {
        player = "x";
        i++; 
        //t++ 
    }
    else {
        player = "o";
        i++;     
        //t++
    }
    return turn = player;
}  

function xoro(thing) { 
    if (turn == "o"){
        if (thing.attr("clicke") == "false") {
            $(thing).text("O");
            thing.attr("clicke","o")
            thing.attr("p","0")
        console.log("o worked");
        }
        else {console.log("already clicked");i--}
    }
    else  {
        if (turn == "x") {
            if (thing.attr("clicke") == "false") {
                $(thing).text("X");
                thing.attr("clicke","x");
                thing.attr("p","1")
            console.log("X worked");
            }
            else {console.log("already clicked");i--}
        }
        else {
            console.log("something went wrong making it x or o");
        }
    }
}

/*if (t==8){
    document.getElementById("texthere").innerHTML = "Tie!";
        $('#winmodal').modal('show');
        t = 0;
}*/

function checkWin(boxclicked) {
    var rowclicked = $(boxclicked).attr("row");
    var collumnclicked = $(boxclicked).attr("collumn");
    var diagclicked = $(boxclicked).attr("diag")
    if (diagclicked == "3"){
        middleclicked = true;
    }
    var wplayer = $(boxclicked).attr("p");
    var roww = $("[row="+rowclicked+"][p="+wplayer+"]");
    var coll = $("[collumn="+collumnclicked+"][p="+wplayer+"]");
    var diag = $("[diag="+diagclicked+"][p="+wplayer+"]");
    console.log(rowclicked,collumnclicked,wplayer);
    console.log(roww.length);
    if (wplayer == 1){
        pplayer = "O";
    }
    else if (wplayer = 0){
        pplayer = "X";
    }
    if ((roww.length == 3) || (coll.length == 3) || ((diag.length >= 2) & (middleclicked == true))) {
        console.log("Win activated");
        document.getElementById("texthere").innerHTML = "Player " + pplayer + " Wins!";
        $('#winmodal').modal('show');
        //t = 0;
    }
}  

$('.box').click(    
function(){
    assign(player);
    /*if (t == 0){
        document.getElementById("texthere").innerHTML = "Please select a player to start!";
    }*/
    xoro($(this));
    checkWin(this);
    }
)
