$(window).resize(function () {

	var vpWidth = window.innerWidth;
	var pixelRatio = window.devicePixelRatio;

	$("#app").removeClass("l_1280").removeClass("l_1024").removeClass("l_768").removeClass("l_480");

	if( vpWidth >= 1280 ) {
		$("#app").addClass("l_1280");
	} else if( vpWidth >= 1024 && vpWidth < 1280 ) {
		$("#app").addClass("l_1024");
	} else if( vpWidth >= 768 && vpWidth < 1024 ) {
		$("#app").addClass("l_768");
	} else if( vpWidth < 768 ) {
		$("#app").addClass("l_480");
	}

	

	

	// $("#anuncios").anuncioBox( { resolution: vpWidth, conteudo: anuncioData } );

});

$(window).resize();