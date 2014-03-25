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

//  iscroll
$.getScript("/js/vendor/iscroll/iscroll.min.js", function() {

	// $('body').on('touchmove', function(e){
 //        e.preventDefault();
 //    });

	// lastSearches Navigation
	$('.search_item').click(function() {

		$('#lastSearch1, #lastSearch2, #lastSearch3').addClass('hidden');
		$('#lastSearches #list li').removeClass('active');
		$(this).addClass('active');

		if( $(this).hasClass('lastSearch1') ) {
			$('#lastSearch1').removeClass('hidden');
		} else if( $(this).hasClass('lastSearch2') ) {
			$('#lastSearch2').removeClass('hidden');
		} else if( $(this).hasClass('lastSearch3') ) {
			$('#lastSearch3').removeClass('hidden');
		}

	});

    var scrollSimilar = new IScroll('#products-carousel', {
    	scrollX: true,
    	scrollY: false
	});

	var scrollLastSearch1 = new IScroll('#lastSearch1', {
		scrollX: true,
		scrollY: false
	});

	var scrollLastSearch2 = new IScroll('#lastSearch2', {
		scrollX: true,
		scrollY: false
	});

	var scrollLastSearch3 = new IScroll('#lastSearch3', {
		scrollX: true,
		scrollY: false
	});

    $(window).resize(function () {
	    setTimeout (function(){
	        scrollSimilar.refresh();
	        scrollLastSearch1.refresh();
	        scrollLastSearch2.refresh();
	        scrollLastSearch3.refresh();
	    }, 1000);
    });

});

// $.when(
//     $.getScript("/js/vendor/bootstrap/transition.js"),
//     $.getScript("/js/vendor/bootstrap/carousel.js"),
//     // $.getScript("/js/vendor/bootstrap-touch-carousel/bootstrap-touch-carousel.js"),
//     $.Deferred(function( deferred ){
//         $( deferred.resolve );
//     })
// ).done(function(){

// 	$('.carousel').carousel({
// 		interval: 9000
// 	});

// 	$('.setaEsq').click(function() {
// 		$('.carousel').carousel('prev');
// 	});
// 	$('.setaDir').click(function() {
// 		$('.carousel').carousel('next');
// 	});

// });