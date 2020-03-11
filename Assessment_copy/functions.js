$('.box').click(
    function() {
        $("#a7").css("background-color", $(this).css("background-color")); 
        $("#a7").css("color", $(this).css("color")); 
        $("#a7").text("")
    }
)

$('.maroonbox').click(
    function() {
        $("#a7").text($(this).text())
    }
)

$('#a5').click(
    function() {
        $("#a6").text(Math.floor(Math.random() * 101))
        $("#a7").text($(this).text())
    }
)

for (i = 1; i<=144; i++){
    ("#a8").append("<div class=...")

}