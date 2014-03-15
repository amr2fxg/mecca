
// ---------- General
// $.getScript("/js/utils/jstorage.min.js");
// $.getScript("/js/utils/resizeControl.js");
$.getScript("/js/vendor/bootstrap.js");
$.getScript("/js/utils/search.js");

// $("[rel='tooltip']").tooltip();


// ---------- gritter
// $.getScript("/js/utils/jquery.gritter.min.js", function() {

// 	$('.menuBtnNotify').click( function() {
// 		$.gritter.add({
// 			title: 'Título da notificação',
// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ipsa, ducimus, tempora corporis tenetur a illo perspiciatis voluptate ex similique molestiae in obcaecati hic ut at. Aspernatur, quisquam quas ratione?'
// 		});
// 	});

// });

// ---------- TweenLite
$.getScript("/js/utils/CSSPlugin.min.js");
$.getScript("/js/utils/EasePack.min.js");
$.getScript("/js/utils/TweenLite.min.js", function() {

	$('.notifications').click( function() {
		var menuNotifications = $('#menuNotifications');
		var menuSettings = $('#menuSettings');

		if( menuNotifications.hasClass('closed') ) {
			menuNotifications.removeClass('closed').addClass('open');
			TweenLite.to( menuNotifications, 0.5, { opacity:1 } );
			// close the other
			menuSettings.removeClass('open').addClass('closed');
			TweenLite.to( menuSettings, 0.5, { opacity:0 } );
		} else if( menuNotifications.hasClass('open') ) {
			menuNotifications.removeClass('open').addClass('closed');
			TweenLite.to( menuNotifications, 0.5, { opacity:0 } );
		}

	});

	$('.menuBtnSettings').click( function() {
		var menuSettings = $('#menuSettings');
		var menuNotifications = $('#menuNotifications');

		if( menuSettings.hasClass('closed') ) {
			menuSettings.removeClass('closed').addClass('open');
			TweenLite.to( menuSettings, 0.5, { opacity:1 } );
			// close the other
			menuNotifications.removeClass('open').addClass('closed');
			TweenLite.to( menuNotifications, 0.5, { opacity:0 } );
		} else if( menuSettings.hasClass('open') ) {
			menuSettings.removeClass('open').addClass('closed');
			TweenLite.to( menuSettings, 0.5, { opacity:0 } );
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

// ---------- Socket Io
/*		var socket = io.connect(document.URL);

		socket.on('instantResult', function (data) {
			console.log('recebi:' + data.data);

			if(data){
				$('#results').html(data);
				$('#results').show();
			}

		}); */
