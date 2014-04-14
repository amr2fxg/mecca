// auth/noauth
var auth;
var cadastro = new Array();

function init() {

	if( $('#user_info').html() == 'true') {
		auth = true;
	} else {
		auth = false;
	}
}

init();

function loadMenu(){

	init();

	$.ajax({
       	type: 'GET',
       	url: '/menu',
		cache: false,
       	success: function(data)	{
       		if (data) {
       			$('#menu').empty().append(data);
       			setupMenu();
       		}
		}
	});
}

function setupMenu() {

	if(auth == true) {

		$('.menuBtnSettings').attr('title', 'Menu');
		$('.menuBtnNotifications').tooltip();

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

		//NOTIFICATIONS
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

	// LOGOUT
	$('#menuLogout').click(function() {
		$.ajax({	
			type: 'GET',
			url: 'user/logout',
			success: function (data) {
				$('#user_info').html('false');
				loadMenu();
			}
		});
	});
	} else if(auth == false) {

		$('.menuBtnSettings').attr('title', 'Login & Cadastro');

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

		// LOGIN
		$('#menuSettingsLogin').click( function() {
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
		$('#menuSettingsCadastro').click( function() {

			$.ajax({	
				type: 'GET',
				url: 'user/new',
				success: function (data) {
					var tag = $('#modalCadastro');

					if(tag.length > 0) {
						tag.remove();
					}

					$('#menu').append(data);
					$('#modalCadastro').modal("show");
					$('#signin_Email').focus();
				}
			});
		});

	}

	$('.menuBtnSettings').tooltip();
	$('.menuBtnSell').tooltip();

}

$.when(
    $.getScript("/js/vendor/bootstrap/modal.js"),
    $.getScript("/js/vendor/bootstrap/tooltip.js"),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
	setupMenu();
});

$.getScript("/js/utils/device.min.js");
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