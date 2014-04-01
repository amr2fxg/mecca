// LAST PRODUCT INFO BOX
$('#seller_info').hide();

$('#product_info .min').click(function() {

	if( $('#seller_info').hasClass('hidden') ) {
		$('#seller_info').removeClass('hidden');
	}

	$('#product_info').hide();
	$('#seller_info').show();
});
$('#seller_info .min').click(function() {
	$('#seller_info').hide();
	$('#product_info').show();
});

//  Tooltips
$.getScript("/js/vendor/bootstrap/tooltip.js", function() {
	// info box produto
	$('.follow').tooltip();
	$('.loja').tooltip();
	$('.rating').tooltip();
	// info box loja
	$('.stats').tooltip();
	$('.qGeral').tooltip();
	$('.qNeg').tooltip();
	$('.qAte').tooltip();
	$('.qAnu').tooltip();
	$('.qNegC').tooltip();

});


$.when(
    $.getScript("/js/vendor/iscroll/iscroll.min.js"),
    $.getScript("/js/vendor/bootstrap/popover.js"),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
	// Popovers
	$("[data-toggle='popover']").popover({
		trigger: 'hover',
		placement: 'bottom',
		container: 'body',
		html: true,
		delay: { show: 200, hide: 50 }
	});
	
	// iScroll
	// lastSearches Navigation
	$('.search_item').click(function() {

		$('#lastSearch1, #lastSearch2, #lastSearch3').addClass('invisible');
		$('#lastSearches #list li').removeClass('active');
		$(this).addClass('active');

		if( $(this).hasClass('lastSearch1') ) {
			$('#lastSearch1').removeClass('invisible');
		} else if( $(this).hasClass('lastSearch2') ) {
			$('#lastSearch2').removeClass('invisible');
		} else if( $(this).hasClass('lastSearch3') ) {
			$('#lastSearch3').removeClass('invisible');
		}

	});

	function createIScroll(wrapper, objName) {
    	var total = 0;
	    $(wrapper).css('width', $(wrapper).parent().width() );
	    $(wrapper + ' .scroller ul li').each( function(index) { total += $(this).width() + parseInt( $(this).css("margin-right").replace('px','') ); });
	    $(wrapper + ' .scroller').css('width', total);

    	if( $('html').hasClass('desktop') == true) {
			window[objName] = new IScroll(wrapper, { scrollX: true,	scrollY: false });
    	} else if( $('html').hasClass('desktop') == false) {
    		window[objName] = new IScroll(wrapper, { scrollX: true,	scrollY: false,	eventPassthrough: true,	preventDefault: false });
    	}

    	window[objName].on('beforeScrollStart', function() {
    		$("[data-toggle='popover']").popover('hide');
    		$("[data-toggle='popover']").popover('disable');
    	});

    	window[objName].on('scrollEnd', function() {
   			$("[data-toggle='popover']").popover('enable');
    	});
    }

    function refreshIScroll(wrapper, obj) {
    	obj.destroy();
    	createIScroll(wrapper, obj);
    }

    createIScroll('#similarProducts', 'similarProducts');
    createIScroll('#lastSearch1', 'lastSearch1');
    createIScroll('#lastSearch2', 'lastSearch2');
    createIScroll('#lastSearch3', 'lastSearch3');
    createIScroll('#anunciosDestaqueResults', 'anunciosDestaque');


    $(window).resize(function () {
	    setTimeout (function(){
	        refreshIScroll('#similarProducts', similarProducts);
	        refreshIScroll('#lastSearch1', lastSearch1);
	        refreshIScroll('#lastSearch2', lastSearch2);
	        refreshIScroll('#lastSearch3', lastSearch3);
	        refreshIScroll('#anunciosDestaqueResults', anunciosDestaque);
	    }, 200);
    });
	
});