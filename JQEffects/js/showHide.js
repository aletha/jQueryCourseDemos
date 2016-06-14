$(document).ready(function(){
var $showLink = $(".showLink");
$showLink.on("click",function(){
	$("#moreless").toggle()
	$showLink.hide();
	$hideLink.show();
	event.preventDefault();
})
var $hideLink = $(".hideLink");
$hideLink.on("click",function(){
	$("#moreless").toggle()
	$hideLink.hide();
	$showLink.show();
	event.preventDefault();
})
})
function showHide() {
	if ($("#moreless")) {
		if (!$("#moreless-show").is(":hidden")) {
			$("#moreless-show").hide();
			$("#moreless").show();
		}
		else {
			$("#moreless-show").show();
			$("#moreless").hide();
		}
		
	}
}