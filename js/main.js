var praypoints = 0;

$( document ).ready(function() {
	
	
	
	$('#content').on('click', '.#btn_cross', function(evt) {
	    evt.preventDefault();
	    praypoints++;
	});
});

