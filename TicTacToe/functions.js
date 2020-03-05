var i = 5;
var player = "";
var turn = player;
var middleclicked = false;
var t = 0;
var pplayer = "";
var middleplayer = -1;

if (t >= 10){
    document.getElementById("texthere").innerHTML = "Tie!";
    $('#winmodal').modal('show');
}

$('.x').click(
    function(){
        i += 1;
        t = 1;
    }
);

$("blah").click(
    function(){
        t = 1;
    } 
)

function assign (player){   
    if ( (i % 2) == 0 ) {
        player = "x";
        i++; 
        t++; 
    }
    else {
        player = "o";
        i++;     
        t++;
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

function checkWin(boxclicked) {
    var rowclicked = $(boxclicked).attr("row");
    var collumnclicked = $(boxclicked).attr("collumn");
    var diagclicked = $(boxclicked).attr("diag")
    var wplayer = $(boxclicked).attr("p");
    var roww = $("[row="+rowclicked+"][p="+wplayer+"]");
    var coll = $("[collumn="+collumnclicked+"][p="+wplayer+"]");
    var diag = $("[diag="+diagclicked+"][p="+wplayer+"]");
    console.log(rowclicked,collumnclicked,wplayer);
    if (diagclicked == "3"){
        middleclicked = true;
        middleplayer = wplayer;
        console.log("set");
    }
    if (wplayer == 0){
        pplayer = "O";
    }
    else if (wplayer == 1){
        pplayer = "X";
    }
    console.log("wplayer = " + wplayer);
    console.log("pplayer = " + pplayer);
    console.log("middleclicked = " + middleclicked);
    if ((roww.length == 3) || (coll.length == 3) || ((diag.length >= 2) & (middleclicked == true) & (middleplayer == wplayer))) {
        console.log("Win activated");
        console.log(pplayer);
        document.getElementById("texthere").innerHTML = "Player " + pplayer + " Wins!";
        $('#winmodal').modal('show');
    }
}  

$('.box').click(    
    function(){
        if (t == 0){
            document.getElementById("texthere").innerHTML = "Please select a player to start!";
            $('#winmodal').modal('show');
        }
        else {
            assign(player);
            xoro($(this));
            checkWin(this);
        }
        console.log("t = " + t);
    }
)
