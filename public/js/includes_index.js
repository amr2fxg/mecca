
// ---------- General
// $.getScript("/js/utils/jstorage.min.js");
// $.getScript("/js/utils/resizeControl.js");
$.getScript("/js/vendor/bootstrap/modal.js", function() {
	$('#login').modal("hide");
	$('#cadastro').modal("hide");
	$('#menuSettingsLogin').click(function() {
		$('#login').modal("show");
	});
	$('#menuSettingsCadastro').click(function() {
		$('#cadastro').modal("show");
	});
	$('#login_novo').click(function() {
		$('#login').modal("hide");
		$('#cadastro').modal("show");
	});
});

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
		var menuSettings_auth = $('#menuSettings-auth');
		var menuSettings_noauth = $('#menuSettings-noauth');

		if( menuNotifications.hasClass('closed') ) {
			menuNotifications.removeClass('closed').addClass('open');
			TweenLite.to( menuNotifications, 0.5, { opacity:1 } );
			// close menu auto or noauth
			menuSettings_noauth.removeClass('open').addClass('closed');
			TweenLite.to( menuSettings_noauth, 0.5, { opacity:0 } );
		} else if( menuNotifications.hasClass('open') ) {
			menuNotifications.removeClass('open').addClass('closed');
			TweenLite.to( menuNotifications, 0.5, { opacity:0 } );
		}

	});

	$('.menuBtnSettings').click( function() {
		var menuSettings_auth = $('#menuSettings-auth');
		var menuSettings_noauth = $('#menuSettings-noauth');
		var menuNotifications = $('#menuNotifications');

		if( menuSettings_noauth.hasClass('closed') ) {
			menuSettings_noauth.removeClass('closed').addClass('open');
			TweenLite.to( menuSettings_noauth, 0.5, { opacity:1 } );
			// close notifications
			menuNotifications.removeClass('open').addClass('closed');
			TweenLite.to( menuNotifications, 0.5, { opacity:0 } );
		} else if( menuSettings_noauth.hasClass('open') ) {
			menuSettings_noauth.removeClass('open').addClass('closed');
			TweenLite.to( menuSettings_noauth, 0.5, { opacity:0 } );
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
