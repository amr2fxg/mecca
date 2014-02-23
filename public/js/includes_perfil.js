// ---------- Produtos
$.getScript("/js/utils/jquery.anuncioBox.js", function() {

	var anuncioData = [
	["Celular Motorola", "produtoA.png"],
	["Iphone 5 16gb NOVO", "produtoB.png"],
	["www.mundomecca.com.br", "produtoC.png"],
	["Regular", "produtoD.png"],
	["Ruim", "produtoE.png"],
	["Excelente", "produtoA.png"],
	["Muito Bom", "produtoB.png"],
	["Bom", "produtoC.png"],
	["Regular", "produtoD.png"],
	["Ruim", "produtoE.png"]
	];

	$("#anuncios").anuncioBox( { resolution: window.innerWidth, conteudo: anuncioData } );

});

// ---------- userStats Graph
$.when(
	$.getScript("/js/utils/jquery.enumerable.js"),
	$.getScript("/js/utils/raphael.js"),
	$.getScript("/js/utils/jquery.tufte-graph.js"),
	$.getScript("/js/includes/userStats.js"),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
    // ---------- userStats
	$('#user_stats').load("/userStats");
});


$("#viewList").click( function() {
	if( $(this).css("opacity") == 1 ) {
		TweenLite.to( this, 0.5, { alpha: 0.5 } );
	} else if ( $(this).css("opacity") == 0.5 ) {
		TweenLite.to( this, 0.5, { alpha: 1 } );
	}
});