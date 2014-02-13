(function( $ ) {
 
	$.fn.distribute = function( options ) {

		this.append(options);

		// These are the defaults.
	    var settings = $.extend({
	    	itemsize: 150
	    }, options);


	    var total = $(this).children().length;
	    var pW = this.width();
	    var qtyMax = Math.floor(pW / settings.itemsize);

	    // var childSize = $(':first', this.children()).width();
	    var space = (pW - ( settings.itemsize * total ) ) / ( total - 1 );


	    console.log("width: " + pW + " | total: " + total + " | qtyMax: " + qtyMax + " | space: " + space);

	    for (var i=0; i < total; i++) {
	    	$(':nth-child('+ i +')', this).css('width', settings.itemsize);
	    	$(':nth-child('+ i +')', this).css('height', settings.itemsize);
	    	$(':nth-child('+ i +')', this).css('float', 'left');
	    	$(':nth-child('+ i +')', this).css('display', 'inline');
	   		$(':nth-child('+ i +')', this).css('margin-right', space);
		}

		$(':last-child()', this).css('margin-right', 0);

		return this.each( function() {
			// $(this).find('.btn').mouseover( function() {
			// 	$(this).parent().parent().siblings().removeClass("chooseBoxOn").addClass("chooseBoxOff");
			// 	$(this).parent().parent().removeClass("chooseBoxOff").addClass("chooseBoxOn");
			// })
		});

	};

 
}( jQuery ));