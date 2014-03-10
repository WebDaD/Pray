	

$( document ).ready(function() {
	
	var myWorld = new World();
	
	clearInterval(myWorld.intervalID);
	myWorld.intervalID = setInterval(function(){myWorld.run();},myWorld.interval);
	
	
	$('#content').on('click', '#btn_cross', function(evt) {
	    evt.preventDefault();
	    myWorld.praypoints+=myWorld.points_per_click;
	    console.log("Clicked Cross for "+myWorld.points_per_click+" to get "+myWorld.praypoints+" PP");
	});
});

function World(){
	this.praypoints = 0;
	this.points_per_click = 1;
	this.interval = 100; // 1/10 Second
	this.intervalID;
	this.run = run;
	
	function run(){
		//count modules-pp to praypoints
		$("#points").text(this.praypoints);
	}
	
	
}