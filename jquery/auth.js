jQuery(document).ready(function($) {
	$('.login').click(function(event) {
		event.preventDefault();
		if($('#user')[0].value == 'admin' && $('#pass')[0].value == '12345'){
			$('#login').css('display','none');
			$('body').css('background', '#ffffff');
			$('.container').css('display', 'table');
			
		}
		else{
			alert("mk sai cmnr");
		}
	});
});