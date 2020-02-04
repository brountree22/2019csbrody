var i = 2;
var player = 0

$('.start').click(
    function(){
        i += 1
    console.log(i)
    }
);

for (e=0;e=0;e=0){
    if ($('.box').click){
        console.log("idk")
    }
}

function assign (player){
    $(".box").click( 
        function (){
        if ( (i % 1) == 0 ) {
            var player = 1
            i++
            return player
        }
        else {
            var player = 2
            i++
            return player
        } 
    }   
    );
    console.log(player)
}

function xoro(thing) {  
    if (player == 1){
        document.getElementById(thing).innerHTML = X
    }
    else  {
        if (player ==2) {
            document.getElementById(thing).innerHTML = O
        }
        else {
            console.log("something went wrong making it x or o")
        }
    }
}

for (t = 1; t <= 9; t++){
    $('.box').click(
    function(){
        assign(player)
        xoro($(this))
        }
    );
}

 