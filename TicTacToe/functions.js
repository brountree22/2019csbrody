

if (document.getElementById("sp1").click()) {

}

function tic() {
  document.getElementById("sp1").click(); 
}

function tac() {
  document.getElementById("sp1").click(); 
}

$('.color1').click(
    function tic (){
        var color = $(this).css("background-color")
        $('sp1').css("background-color",color)
    }
)