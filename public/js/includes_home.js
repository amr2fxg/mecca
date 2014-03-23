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
	$('.follow').tooltip();
	$('.rating').tooltip();
	$('.qGeral').tooltip();
	$('.qNeg').tooltip();
	$('.qAte').tooltip();
	$('.qAnu').tooltip();
	$('.qNegC').tooltip();

});

// CAROUSEL: OFERTAS SIMILARES
$.when(
    $.getScript( "/js/vendor/bootstrap/transition.js" ),
    $.getScript( "/js/vendor/bootstrap/carousel.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

	$('.carousel').carousel({
		interval: 9000
	});

	$('.setaEsq').click(function() {
		$('.carousel').carousel('prev');
	});
	$('.setaDir').click(function() {
		$('.carousel').carousel('next');
	});
    
});