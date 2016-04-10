
/*function enviarAdvertencia()
{

jQuery(".advertencia").hide();
}

$(document).ready(enviarAdvertencia);*/

//$(".advertencia").show("slow");


$(".spoiler span").hide();

$(".spoiler").append("<button> mostrar spoiler!</button>");
$(".spoiler button").click(function(){
$(".spoiler span").show();

$(this).remove();
})


function enviarAdvertencia()
{
	jQuery(".spoiler").hide().show("slow");
}
$(document).ready(enviarAdvertencia);