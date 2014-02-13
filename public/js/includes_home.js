// ---------- distribute
$.getScript("js/utils/distribute.js", function() {
	$("#categories").find("ul").distribute();
	$("#last_searches").find("#results").distribute();
});

$('#last_product').click( function() {
	$("#content").empty().load("perfil.html");
	$(window).resize();
});