var i = undefined;
var player = "";
var turn = player;
var t = 0;

$('.x').click(
    function(){
        i += 0;
    }
);

$('.o').click(
    function(){
        i=3
    }
)

$('.reset').click(

)

function assign (player){   
    if ( (i % 2) == 0 ) {
        player = "x";
        i++;  
    }
    if ((i%2)==1){
        player = "o";
        i++;     
    }
    else{
        alert("Click a button to start please!!")
    }
    return turn = player;
}  

function xoro(thing) { 
    if (turn == "o"){
        if (thing.attr("clicke") == "false") {
            $(thing).text("O");
            thing.attr("clicke","o")
            thing.attr("p","O")
        console.log("o worked");
        }
        else {console.log("already clicked");i--}
    }
    else  {
        if (turn == "x") {
            if (thing.attr("clicke") == "false") {
                $(thing).text("X");
                thing.attr("clicke","x");
                thing.attr("p","X")
            console.log("X worked");
            }
            else {console.log("already clicked");i--}
        }
        else {
            console.log("something went wrong making it x or o");
        }
    }
}

$('.box').click(    
function(){
    assign(player);
    if (player)
    xoro($(this));
    checkWin(this);
    t++
    }
)

function checkWin(boxclicked) {
    var rowclicked = $(boxclicked).attr("row");
    var collumnclicked = $(boxclicked).attr("collumn");
    var wplayer = $(boxclicked).attr("p");
    var roww = $("[row="+rowclicked+"][p="+wplayer+"]");
    var coll = $("[collumn="+collumnclicked+"][p="+wplayer+"]");
    console.log(rowclicked,collumnclicked,wplayer);
    console.log(roww.length)
    if (roww.length == 3){
        alert("Player " + wplayer + " Wins!")
    }
    if (coll.length == 3){
        alert("Player " + wplayer + " Wins!")
    }
}