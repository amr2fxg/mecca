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

    var myScroll = new IScroll('#products-carousel', {
    	scrollX: true,
    	scrollY: false
	});

    $(window).resize(function () {
	    setTimeout (function(){
	        myScroll.refresh();
	    }, 500);
    });

	// console.log(myScroll.options);

	// var myScroll = new iScroll('products-carousel', {
	// 	snap: 'li',
	// 	momentum: false,
	// 	hScrollbar: false,
	// 	vScrollbar: false,
	// });

	// setTimeout(function () {
	// 	myScroll.refresh();
	// }, 0);
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