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
var originalTxt;
var visible;


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


		// console.log(event.which);

		if(event.which==27 || event.which==38){
			return false;
		}

		originalTxt = $('#s').val();

		
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
					            	$('#ss').val('');
					            	visible=false;
					            }
					            else{
						            
						            var oResults = $('#results ul li').toArray();

						            console.log(oResults);

						            oResults.forEach ( function(item) {

						            	var title = $(item).find('a').attr('title');
						            	var span = $(item).find('a').find('span');
						            	var bold = $(item).find('a').find('b');

						            	span.html( $('#s').val() );
						            	bold.html( title.replace(span.html(),''));
						            	
						            });

						            $("#results").show();
									$('#ss').val($("#results ul li:first-child").find('a').attr('title'));
									
									visible=true;

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
		        	$('#ss').val('');
		        	visible=false;
				}


   		}, 500);  // setTimeout 200 miliseconds to read element #s

	});  // input#s.keyup

    $('#s').keydown(function(e){ 


    	// prevent normal effect of TAB key when at #s, #results
    	if(e.which==9){
	    	e.preventDefault();
	    	$('#s').val($('#ss').val());
	    	originalTxt = $('#s').val();
    	}


    	// prevent normal effect of UP key when at #s, #results elements
    	if(e.which==38){
    		e.preventDefault();
    	}


    });


    $('#results').on('mouseover', function (){

		$('#results ul li a').removeClass('search_hover');
    });


    //arrow key navigation 	    
    $(document).keydown(function(e){ 

        //jump from search field to search results on DOWN arrow key 
        if (e.keyCode == 40 && visible) {  
            $("#s").blur(); 
              return false; 
        } 


        //hide search results on ESC 
        if (e.keyCode == 27) {  

            $('#results').empty();
            $('#results').hide();
            $('#ss').val('');
            $('#s').val(originalTxt);
            $('#s').focus();
            visible=false;


			var sObj = $('#s');
			sObj[0].setSelectionRange(sObj.val().length, sObj.val().length);			

            		if(mudou){
				    	$('#content').empty().append(originalHtml);
				    	mudou=false;
				    }

              return false; 
        } 

        //focus on search field on back arrow or backspace press 
        // if (e.keyCode == 37 || e.keyCode == 8) {  
        //     $("#s").focus(); 
        // } 

	}); 



	// Register keydown events on the whole document
	$(document).keydown(function(e) {
		

		switch(e.keyCode) { 
			// User pressed "up" arrow
			case 38:
				if(visible) navigate('up');
			break;

			// User pressed "down" arrow
			case 40:
				if(visible) navigate('down');
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
	
	// JBP - focus back on search field if up arrow pressed on top search result
	// if(direction == 'up' && currentSelection == 0) {
	// }
	

	if(direction == 'up' && currentSelection != -1) {

		currentSelection--;

		if(mudou){
	    	$('#content').empty().append(originalHtml);
	    	mudou=false;
	    }

	} else if(direction == 'up' && currentSelection == -1) {
		currentSelection = $("#results ul li").size() -1;
	}


	if (direction == 'down') {
		if(currentSelection != $("#results ul li").size() -1) {
			currentSelection++;
		} else if(currentSelection == $("#results ul li").size() -1) {
			currentSelection = -1;
		}
	}


	setSelected(currentSelection);
}

function setSelected(menuitem) {

	//JBP - get search result to place in search field on hover
	var title = $("#results ul li a").eq(menuitem).attr('title');
	
	//
	$("#results ul li a").removeClass("search_hover");

	
		if(menuitem >= 0){
			$("#results ul li a").eq(menuitem).addClass("search_hover");
			currentUrl = $("#results ul li a").eq(menuitem).attr("href");
			$("#s").val(title);
			$('#ss').val(title);

		}else{

			$("#s").val(originalTxt);
			$("#s").focus();

			var sObj = $('#s');
			sObj[0].setSelectionRange(sObj.val().length, sObj.val().length);			
		}

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

	        	console.log('Search Engine Error. Task Undone!');
	        }

	});

	// faz POST pra /busca com as palavras e retorna pro elemento #content
}