var i = 2;

$('.start').click(
    i += 1
)

function assign (player){
    if (document.getElementById("box").click()) {
        if ( (i & 1) == 0 ) {
            player = 1
            i++
        }
        else {
            player = 2
            i++
        }    
    }
}


$('.box').click(assign(player));

if (player == 1){
    //get the html element and put an o in it
}
else  {
    if (player ==2) {
        //get the html element and put an x in it
    }
    else {
        console.log("something went wrong making it x or o")
    }
}
//do something like make it a loop idk and have it do stuff on the click