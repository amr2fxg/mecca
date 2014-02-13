
// ---------- General
$.getScript("js/utils/jstorage.min.js");
$.getScript("js/utils/resizeControl.js");

// ---------- gritter
$.getScript("js/utils/jquery.gritter.min.js", function() {

	$('.menuBtnNotify').click( function() {
		$.gritter.add({
			title: 'TÃ­tulo da notificaÃ§Ã£o',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ipsa, ducimus, tempora corporis tenetur a illo perspiciatis voluptate ex similique molestiae in obcaecati hic ut at. Aspernatur, quisquam quas ratione?'
		});
	});

});

// ---------- TweenLite
$.getScript("js/utils/CSSPlugin.min.js");
$.getScript("js/utils/EasePack.min.js");
$.getScript("js/utils/TweenLite.min.js", function() {

	$('.menuBtnAcc').click( function() {
		var menuAcc = $('#menuAcc');

		if( menuAcc.hasClass('closed') ) {
			menuAcc.removeClass('closed').addClass('open');
			TweenLite.to( menuAcc, 0.5, { opacity:1 } );
		} else if( menuAcc.hasClass('open') ) {
			menuAcc.removeClass('open').addClass('closed');
			TweenLite.to( menuAcc, 0.5, { opacity:0 } );
		}

	});

	$('#announce_close').click( function() {
		var menu = $('#announceBar');
		TweenLite.to( menu, 0.5, { opacity:0, onComplete: announceComplete } );

		function announceComplete() {
			TweenLite.to( menu, 0.0001, { display:'none' } );
		}
	});


});


