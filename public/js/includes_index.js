// auth/noauth
var auth;

if ($('#user_info').html() == 'true'){
	auth = true;
}else{
	auth = false;
}

function loadMenu(){

	$.ajax({
       	type: 'GET',
       	url: '/menu',
		cache: false,
       	success: function(data)	{

       		if (data) {
       			$('.menuBtnSettings').empty().append(data);
       		}
		}
	});
}

function setupMenu() {

	if(auth == true) {

		$('.menuBtnSettings').attr('title', 'Menu');
		$('.menuBtnNotifications').tooltip();

		// LOGOUT
		$('#menuLogout').click(function() {

			$.ajax({	
				type: 'GET',
				url: 'user/logout',
				success: function (data) {
					alert('shiiiiiiit');
					$('#user_info').html('false');
					loadMenu();
				}
			});

		});

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

		NOTIFICATIONS
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

	} else if(auth == false) {

		$('.menuBtnSettings').attr('title', 'Login & Cadastro');

		// LOGIN
		$('#menuSettingsLogin').click(function() {

				$.ajax({	
						type: 'GET',
						url: 'user/login',
						success: function (data) {

								var tag = $('#modalLogin');

								if(tag.length > 0) {
									tag.remove();
								}

							$('#menu').append(data);
							$('#modalLogin').modal("show");
							$('#login_user').focus();

						}
						});

		});

		// CADASTRO
		$('#menuSettingsCadastro').click(function() {
			$('#modalCadastro').modal("show");
		});
		$('#login_novo').click(function() {
			$('#modalLogin').modal("hide");
			$('#modalCadastro').modal("show");
		});

		// MENU SETTINGS
		var menuSettings = $('#menuSettings-noauth');
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

	}

	$('.menuBtnSettings').tooltip();
	$('.menuBtnSell').tooltip();

}

$.getScript("/js/utils/device.min.js");

$.when(
    $.getScript("/js/vendor/bootstrap/modal.js"),
    $.getScript("/js/vendor/bootstrap/tooltip.js"),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
	setupMenu();
});


// $.getScript("/js/vendor/bootstrap/tooltip.js", function() {

	// if(auth == false) {
	// 	// $('.menuBtnSettings').attr('title', 'Login & Cadastro');
	// } else if (auth == true) {
	// 	// $('.menuBtnSettings').attr('title', 'Menu');
	// }

	// $('.menuBtnSettings').tooltip();
	// $('.menuBtnNotifications').tooltip();
	// $('.menuBtnSell').tooltip();
// });

// $.getScript("/js/vendor/bootstrap/modal.js", function() {

	// $('#modalLogin').modal("hide");
	// $('#modalCadastro').modal("hide");

	// // LOGIN
	// $('#menuSettingsLogin').click(function() {

	// 		$.ajax({	
	// 				type: 'GET',
	// 				url: 'user/login',
	// 				success: function (data) {

	// 						var tag = $('#modalLogin');

	// 						if(tag.length > 0) {
	// 							tag.remove();
	// 						}

	// 					$('#menu').append(data);
	// 					$('#modalLogin').modal("show");
	// 					$('#login_user').focus();

	// 				}
	// 				});

	// });

	// // LOGOUT
	// $('#menuLogout').click(function() {

	// 		$.ajax({	
	// 				type: 'GET',
	// 				url: 'user/logout',
	// 				success: function (data) {
	// 					alert('shiiiiiiit');
	// 					$('#user_info').html('false');
	// 					loadMenu();

	// 				}
	// 				});

	// });

	// // CADASTRO
	// $('#menuSettingsCadastro').click(function() {
	// 	$('#modalCadastro').modal("show");
	// });
	// $('#login_novo').click(function() {
	// 	$('#modalLogin').modal("hide");
	// 	$('#modalCadastro').modal("show");
	// });

	// if(auth == false) {       // --------------------------------- NO AUTH

		// $('.menuSettingsSVG').hide();
		// $('.menuLoginSignupSVG').show();
		// $('.menuBtnNotifications').hide();

		// var menuSettings = $('#menuSettings-noauth');

		// // MENU SETTINGS
		// $('.menuBtnSettings').click( function() {

		// 	if( menuSettings.hasClass('hidden') ) {
		// 		$('.menuBtnSettings').tooltip('destroy');
		// 		menuSettings.removeClass('hidden').addClass('open');
		// 		menuSettings.modal('show');
		// 		$('.modal-backdrop').css('opacity', 0).css('top', '60px');
				
		// 	} else if( menuSettings.hasClass('open') ) {
		// 		$('.menuBtnSettings').tooltip();
		// 		menuSettings.removeClass('open').addClass('hidden');
		// 		menuSettings.modal('hide');
		// 	}

		// 	$('.modal-backdrop').click(function() {
		// 		$('.menuBtnSettings').tooltip();
		// 		menuSettings.modal('hide');
		// 		menuSettings.removeClass('open').addClass('hidden');
		// 	});

		// });

	// } else if(auth == true) { // --------------------------------- AUTH

		// $('.menuSettingsSVG').show();
		// $('.menuLoginSignupSVG').hide();

		// var menuSettings = $('#menuSettings-auth');
		// var menuNotifications = $('#menuNotifications');

		// // MENU SETTINGS
		// $('.menuBtnSettings').click( function() {

		// 	if( menuSettings.hasClass('hidden') ) {

		// 		$('.menuBtnSettings').tooltip('destroy');
				
		// 		// close notifications
		// 		if(menuNotifications.hasClass('open')) {
		// 			$('.menuBtnNotifications').tooltip();
		// 			menuNotifications.removeClass('open').addClass('hidden');
		// 			menuNotifications.modal('hide');
		// 		}

		// 		menuSettings.removeClass('hidden').addClass('open');
		// 		menuSettings.modal('show');
		// 		$('.modal-backdrop').css('opacity', 0).css('top', '60px');
				
		// 	} else if( menuSettings.hasClass('open') ) {
		// 		$('.menuBtnSettings').tooltip();
		// 		menuSettings.removeClass('open').addClass('hidden');
		// 		menuSettings.modal('hide');
		// 	}

		// 	$('.modal-backdrop').click(function() {
		// 		$('.menuBtnSettings').tooltip();
		// 		menuSettings.modal('hide');
		// 		menuSettings.removeClass('open').addClass('hidden');
		// 	});

		// });

		// NOTIFICATIONS
		// $('.menuBtnNotifications').click( function() {

		// 	if( menuNotifications.hasClass('hidden') ) {

		// 		$('.menuBtnNotifications').tooltip('destroy');

		// 		// close settings
		// 		if(menuSettings.hasClass('open')) {
		// 			$('.menuBtnSettings').tooltip();
		// 			menuSettings.removeClass('open').addClass('hidden');
		// 			menuSettings.modal('hide');
		// 		}

		// 		menuNotifications.removeClass('hidden').addClass('open');
		// 		menuNotifications.modal('show');
		// 		$('.modal-backdrop').css('opacity', 0).css('top', '60px');
				
		// 	} else if( menuNotifications.hasClass('open') ) {
		// 		$('.menuBtnNotifications').tooltip();
		// 		menuNotifications.removeClass('open').addClass('hidden');
		// 		menuNotifications.modal('hide');
		// 	}

		// 	$('.modal-backdrop').click(function() {
		// 		$('.menuBtnNotifications').tooltip();
		// 		menuNotifications.modal('hide');
		// 		menuNotifications.removeClass('open').addClass('hidden');
		// 	});

		// });

	// }

// });

$.getScript("/js/utils/search.js");

// ---------- gritter
// $.getScript("/js/utils/jquery.gritter.min.js", function() {

// 	$('.menuBtnNotify').click( function() {
// 		$.gritter.add({
// 			title: 'Título da notificação',
// 			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ipsa, ducimus, tempora corporis tenetur a illo perspiciatis voluptate ex similique molestiae in obcaecati hic ut at. Aspernatur, quisquam quas ratione?'
// 		});
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