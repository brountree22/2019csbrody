var i = 5;
var player = "";
var turn = player;
var t = 0;
/*var board = [$('#0'),$('#1'),$('#2'),
             $('#3'),$('#4'),$('#5'),
             $('#6'),$('#7'),$('#8')];
             */

$('.x').click(
    function(){
        i += 1;
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
    return turn = player;
}  

function xoro(thing) { 
    //var id = thing.att("id")
    if (turn == "o"){
        if (thing.attr("clicke") == "false") {
            $(thing).text("O");
            thing.attr("clicke","true")
            thing.attr("p","0")
        console.log("o worked");
        }
        else {console.log("already clicked");i--}
    }
    else  {
        if (turn == "x") {
            if (thing.attr("clicke") == "false") {
                $(thing).text("X");
                thing.attr("clicke","true");
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

//for (var t = 1; t <= 9; t++){
$('.box').click(    
function(){
    assign(player);
    xoro($(this));
    //console.log(acrosstop)
    checkWin(this);
    t++
    }
)

var acrosstop = $("[row = 1]");
var acrossmiddle = $("[row = 2]");
var acrossbottom = $("[row = 3]");
var downa = $("[collumn = a]");
var downb = $("[collumn = b]");
var downc = $("[collumn = c]");
var checkingrow = [];

function checkWin(boxclicked) {
    var rowclicked = $(boxclicked).attr("row");
    var wplayer = $(boxclicked).attr("p");
    checkingrow = $("div[row="+rowclicked+"]").attr("clicke");
        if (wplayer == 0){
            var str = checkingrow[0] + checkingrow[1] + checkingrow[2]
            if (str == "truetruetrue"){
                alert("Player O Wins!")
            }
        }
        else if (wplayer == 1){
            //player x checking
        }
        else {
            console.log("not clicked yet");
        }
    
    //var yesno = $(checkingrow).val();

// I want it to select all of the <div> elements with attributes equal to the value of the variable rowclicked. (ln 75)
// Then, I want it to return an array of each selected option. (ln 76)
// If the returned array is equal to a winning array, 
// The game is won.

    console.log(rowclicked);
    console.log(checkingrow);
    //console.log(yesno);
}

 // https://api.jquery.com/val/
 // https://www.tutorialspoint.com/How-to-use-JavaScript-variables-in-jQuery-selectors