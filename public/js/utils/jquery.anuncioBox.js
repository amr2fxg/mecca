(function( $ ) {
 
	$.fn.anuncioBox = function( options ) {

		this.append(options);

		var settings = $.extend( {}, $.fn.anuncioBox.defaults, options );


		// plugin start
	    var total = settings.conteudo.length;
	    var colunas = $.fn.anuncioBox.resolution(settings.resolution);

	    $(this).children("li").remove();

	    // console.log("total: " + total);
	    // console.log("resolution: " + settings.resolution);
	    // console.log("colunas: " + colunas);

	    for (var i=0; i < total; i++) {
	    	
	    	var colPos;

		   	if( (i+1) % colunas == 0 ) {
	    		colPos = "last";
	    	} else {
	    		colPos = "";
	    	}

			this.append(
				'<li class="anuncioBoxOff col-' + colunas + ' ' + colPos + '">' + 
					'<a href="#">' +
					'<div class="row"><img src="i/' + settings.conteudo[i][1] + '"></div>' + 
					'<div class="row marT_15 padH_10 nome">' + settings.conteudo[i][0] + '</div>' + 
					'<div class="row padV_10">R$ 1.935,95</div>' + 
					// '<div class="row pad_15"><div class="pad_15 btn darkgrey hover-blue w100p">COMPRAR</div></div>' + 
					'</a>' +
				'</li>'
			);
				
		}

		// return this;

		return this.each( function() {
			$(this).children().mouseover( function() {
				$(this).removeClass("anuncioBoxOff").addClass("anuncioBoxOn");
			})
			$(this).children().mouseout( function() {
				$(this).removeClass("anuncioBoxOn").addClass("anuncioBoxOff");
			})
		});

	};

	// These are the defaults.
	$.fn.anuncioBox.defaults = {
		// conteudo: [["Erro","Produto não encontrado"]]
	};

	// Change resolution
	$.fn.anuncioBox.resolution = function(res) {
		var cols;
		if(res >= 1600) { cols = 6 };
		if(res >= 1440 && res < 1600) { cols = 5 };
		if(res >= 1280 && res < 1440) { cols = 4 };
		if(res >= 1024 && res < 1280) { cols = 3 };
		if(res >= 768  && res < 1024) { cols = 2 };
		if(res >= 480  && res < 768 ) { cols = 2 };
		if(res  < 480) { cols = 1 };
		return cols;
	}

 
}( jQuery ));