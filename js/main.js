
$( document ).ready(function() {
	
	var myWorld = new World();
	
	
	
	$('#content').on('click', '.#btn_cross', function(evt) {
	    evt.preventDefault();
	    myWorld.praypoints+=myWorld.points_per_click;
	});
});

function World(){
	this.praypoints = 0;
	this.points_per_click = 0;
	this.interval = 1000; //1 Second
	this.intervalID;
	
	this.run = run;
	function run(){
		//count modules-pp to praypoints
		$("#points").text(this.praypoints);
		
	}
	
	clearInterval(this.intervalID);
	this.intervalID = setInterval(function(){this.run();},this.interval);
}