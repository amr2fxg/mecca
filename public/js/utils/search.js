/*
* Instant Search with arrow keys navigation
* Author:      Marco Kuiper (http://www.marcofolio.net/)
* Customizations by Fernando
*/

var timer;
var currentSelection = 0;
var currentUrl = '';
var flag;
var originalHtml;
var mudou;

/* 	$(document).keypress(function(e){
 			var s = $('input#s').val();
 			console.log(s);

 			//$('input#s').val() = s + e.which;  //e.keyCode
 			e.preventDefault();
 			
 	});  */

	//search button click event
	$('#btn_search').click(function() {
	    if ( $('#s').val().length > 1 ) {

	    //	window.location='busca/'+ $('#search').val();
		};	
	});

	// tecla pressionada no #s
	$('input#s').keyup( function (event) {

		if(!flag){
			flag=true;
			originalHtml = $('#content').html();
		}

		if(event.which==27){
			return false;
		}


		event.preventDefault();
		timer && clearTimeout(timer);
   		timer = setTimeout( function() {

		var str = $('#s').val();
		var palavras =  str.replace(/[\|&;\$%@"<>\(\)\+,]/g, ''); //arg.replace(/[|&;$%@"<>()+,]/g, "");
		
		//console.log(e.which);
		//console.log(palavras);

				if (palavras.length > 1){
					
					// socket.emit('instantSearch', palavras);
					
					$.ajax({
					        type: 'POST',
					        url: '/instant/',
					        //dataType: "json",
					        data: {palavras: palavras},
							cache: false,
            				timeout: 5000,
            				success: function (data, status) {
					            
					            $('#results').html(data);

					            if(!data) {
					            	$('#results').hide();
					            }
					            else{
						            $("#results").show();
					            }
					        },
					        error: function(err, status){

					        	console.log('Instant Search Error. Going home!');
					        }

					});

				}
				else
				{

		        	$('#results').empty();
		        	$('#results').hide();
				}

   		}, 500);  // setTimeout 200 miliseconds to read element #s


	});  // input#s.keyup


    //arrow key navigation 	    
    $(document).keydown(function(e){ 

        //jump from search field to search results on keydown 
        if (e.keyCode == 40) {  
            $("#s").blur(); 
              return false; 
        } 

        //hide search results on ESC 
        if (e.keyCode == 27) {  
            $("#results").hide();
            $("#s").focus();

            		if(mudou){
				    	$('#content').empty().append(originalHtml);
				    	mudou=false;
				    }

              return false; 
        } 

        //focus on search field on back arrow or backspace press 
        if (e.keyCode == 37 || e.keyCode == 8) {  
            $("#s").focus(); 
        } 

	}); 



	// Register keydown events on the whole document
	$(document).keydown(function(e) {
		switch(e.keyCode) { 
			// User pressed "up" arrow
			case 38:
				navigate('up');
			break;

			// User pressed "down" arrow
			case 40:
				navigate('down');
			break;
			
			// User pressed "enter"
			case 13:
				if(currentUrl != '') {
					window.location = currentUrl;
				}
			break;
		}
	});
	
	// Add data to let the hover know which index they have
	for(var i = 0; i < $("#results ul li a").size(); i++) {
		$("#results ul li a").eq(i).data("number", i);
	}
	
	// Simulate the "hover" effect with the mouse
	$("#results ul li a").hover(
		function () {
			currentSelection = $(this).data("number");
			setSelected(currentSelection);
		}, function() {
			$("#results ul li a").removeClass("search_hover");
			currentUrl = '';
		}
	);


function navigate(direction) {

	// Check if any of the menu items is selected
	if($("#results ul li .search_hover").size() == 0) {
		currentSelection = -1;
	}
	
	//JBP - focus back on search field if up arrow pressed on top search result
	if(direction == 'up' && currentSelection == 0) {
		$("#s").focus();

		if(mudou){
	    	$('#content').empty().append(originalHtml);
	    	mudou=false;
	    }
	}
	//

	if(direction == 'up' && currentSelection != -1) {
		if(currentSelection != 0) {
			currentSelection--;
		}
	} else if (direction == 'down') {
		if(currentSelection != $("#results ul li").size() -1) {
			currentSelection++;
		}
	}
	setSelected(currentSelection);
}

function setSelected(menuitem) {

	//JBP - get search result to place in search field on hover
	var title = $("#results ul li a").eq(menuitem).attr('title');
	$("#s").val(title);
	//

	$("#results ul li a").removeClass("search_hover");
	$("#results ul li a").eq(menuitem).addClass("search_hover");
	currentUrl = $("#results ul li a").eq(menuitem).attr("href");
	
	goSearch(title);
}

function goSearch(palavras) {
	
	$.ajax({
	        type: 'GET',
	        url: '/busca/',
	        //dataType: "json",
	        data: {palavras: palavras},
			cache: false,
			//timeout: 5000,
			success: function (data, status) {
	            
	            if(data){
		            $('#content').html(data);
		            mudou=true;
	            }
	            else{
	            }

	        },
	        error: function(err, status){

	        	console.log('Search EngineError. Task Undone!');
	        }

	});

	// faz POST pra /busca com as palavras e retorna pro elemento #content
}