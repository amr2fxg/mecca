$.getScript("/js/vendor/bootstrap/tooltip.js", function() {
	$('.menuBtnSettings').tooltip();
	$('.menuBtnNotifications').tooltip();
	$('.menuBtnSell').tooltip();
});

$.getScript("/js/vendor/bootstrap/modal.js", function() {

	// auth/noauth
	var auth = true;

	$('#modalLogin').modal("hide");
	$('#modalCadastro').modal("hide");

	// LOGIN
	$('#menuSettingsLogin').click(function() {
		$('#modalLogin').modal("show");
	});

	// CADASTRO
	$('#menuSettingsCadastro').click(function() {
		$('#modalCadastro').modal("show");
	});
	$('#login_novo').click(function() {
		$('#modalLogin').modal("hide");
		$('#modalCadastro').modal("show");
	});

	if(auth == false) {       // --------------------------------- NO AUTH

		$('.menuBtnNotifications').hide();

		var menuSettings = $('#menuSettings-noauth');

		// MENU SETTINGS
		$('.menuBtnSettings').click( function() {

			if( menuSettings.hasClass('hidden') ) {
				$('.menuBtnSettings').tooltip('destroy');
				menuSettings.removeClass('hidden').addClass('open');
				menuSettings.modal('show');
				$('.modal-backdrop').css('opacity', 0).css('top', '60px');
				
			} else if( menuSettings.hasClass('open') ) {
				$('.menuBtnSettings').tooltip();
				menuSettings.removeClass('open').addClass('hidden');
				menuSettings.modal('hide');
			}

			$('.modal-backdrop').click(function() {
				$('.menuBtnSettings').tooltip();
				menuSettings.modal('hide');
				menuSettings.removeClass('open').addClass('hidden');
			});

		});

	} else if(auth == true) { // --------------------------------- AUTH

		var menuSettings = $('#menuSettings-auth');
		var menuNotifications = $('#menuNotifications');

		// MENU SETTINGS
		$('.menuBtnSettings').click( function() {

			if( menuSettings.hasClass('hidden') ) {

				$('.menuBtnSettings').tooltip('destroy');
				
				// close notifications
				if(menuNotifications.hasClass('open')) {
					$('.menuBtnNotifications').tooltip();
					menuNotifications.removeClass('open').addClass('hidden');
					menuNotifications.modal('hide');
				}

				menuSettings.removeClass('hidden').addClass('open');
				menuSettings.modal('show');
				$('.modal-backdrop').css('opacity', 0).css('top', '60px');
				
			} else if( menuSettings.hasClass('open') ) {
				$('.menuBtnSettings').tooltip();
				menuSettings.removeClass('open').addClass('hidden');
				menuSettings.modal('hide');
			}

			$('.modal-backdrop').click(function() {
				$('.menuBtnSettings').tooltip();
				menuSettings.modal('hide');
				menuSettings.removeClass('open').addClass('hidden');
			});

		});

		// NOTIFICATIONS
		$('.menuBtnNotifications').click( function() {

			if( menuNotifications.hasClass('hidden') ) {

				$('.menuBtnNotifications').tooltip('destroy');

				// close settings
				if(menuSettings.hasClass('open')) {
					$('.menuBtnSettings').tooltip();
					menuSettings.removeClass('open').addClass('hidden');
					menuSettings.modal('hide');
				}

				menuNotifications.removeClass('hidden').addClass('open');
				menuNotifications.modal('show');
				$('.modal-backdrop').css('opacity', 0).css('top', '60px');
				
			} else if( menuNotifications.hasClass('open') ) {
				$('.menuBtnNotifications').tooltip();
				menuNotifications.removeClass('open').addClass('hidden');
				menuNotifications.modal('hide');
			}

			$('.modal-backdrop').click(function() {
				$('.menuBtnNotifications').tooltip();
				menuNotifications.modal('hide');
				menuNotifications.removeClass('open').addClass('hidden');
			});

		});

	}

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
// $.getScript("/js/utils/CSSPlugin.min.js");
// $.getScript("/js/utils/EasePack.min.js");
// $.getScript("/js/utils/TweenLite.min.js", function() {
	

// 	$('#announce_close').click( function() {
// 		var menu = $('#announceBar');
// 		TweenLite.to( menu, 0.5, { opacity:0, onComplete: announceComplete } );

// 		function announceComplete() {
// 			TweenLite.to( menu, 0.0001, { display:'none' } );
// 		}
// 	});


// });

// ---------- Socket Io
/*		var socket = io.connect(document.URL);

		socket.on('instantResult', function (data) {
			console.log('recebi:' + data.data);

			if(data){
				$('#results').html(data);
				$('#results').show();
			}

		}); */
