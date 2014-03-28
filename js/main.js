var myInterval;
$( document ).ready(function() {
	
	
	var myWorld = new world_create;
	
	
	//Logic
	clearInterval(myInterval);
	myInterval = setInterval(function()
	{
		//GAMING:
		//add modulepoints to praypoints
		$.each(myWorld.modules, function(index,m){
			myWorld.praypoints+=m.addPoints();
		});
		
		//buffers: recalc points_per_click
		var cross_buff = 1;
		var mod_buffs = new Array();
		$.each(myWorld.buffers, function(index,b){
			if(b.active){
				if(b.target=="click"){ //targets cross-click
					cross_buff += b.pps_mod;
				} else { //targets module
					mod_buffs[b.target] += b.pps_mod;
				}
			}
		});
		myWorld.points_per_click = cross_buff;
		$.each(myWorld.modules, function(index,m){
			if(mod_buffs[m.id]!=undefined){
				m.buff_mod = mod_buffs[m.id] + 1;
			}
		});

		//check for achievements
		
		
		
		
		//DRAWING:
		//refresh point display
		$("#points").text(Math.floor(myWorld.praypoints));
		
		//refresh pps
		var pps = 0;
		$.each(myWorld.modules, function(index,m){
			pps+=m.addPoints();
		});
		$("#pps").text(Math.floor(pps * 100)/100);
		
		//draw modules
		$.each(myWorld.modules, function(index,m){
			if(!m.display){ //element not drawn yet
				if(myWorld.praypoints >= m.displayat){ //reached display allow
					$("#modules").append('<img src="img/'+m.image+'" alt="'+m.name+'" id="'+m.id+'" title="'+m.name+' ('+m.count+')"/>');
					m.display = true;
					console.log("Drew Module "+m.name);
				}
			}
		});
		
		//draw buffers
		$.each(myWorld.buffers, function(index,b){
			if(!b.display){ //element not drawn yet
				if(myWorld.praypoints >= b.displayat){ //reached display allow
					$("#modules").append('<img src="img/'+b.image+'" alt="'+b.name+'" id="'+b.id+'" title="'+b.name+'"/>');
					b.display = true;
					console.log("Drew Buffer "+b.name);
				}
			}
		});
		
	},myWorld.interval);
	
	
	//Main Button
	$('#content').on('click', '#btn_cross', function(evt) {
	    evt.preventDefault();
	    myWorld.praypoints+=myWorld.points_per_click;
	    console.log("Clicked Cross for "+myWorld.points_per_click+" to get "+myWorld.praypoints+" PP");
	});
	
	//module->click: count++
	$.each(myWorld.modules, function(index,m){
		$('#content').on('click', '#'+m.id, function(evt) {
		    evt.preventDefault();
		    var costs = m.realcost();
		    if(m.display &&  myWorld.praypoints >= costs){
			    m.count++;
			    myWorld.praypoints -= costs;
			    
			    //refresh display of count in icon
			    $('#'+m.id).attr("title", m.name+' ('+m.count+')');
			    console.log("Added Module "+m.name+" for "+costs+" to a total count of "+m.count);
		    }
		});
	});
	
	//buffer->click: buy
	$.each(myWorld.buffers, function(index,b){
		$('#content').on('click', '#'+b.id, function(evt) {
		    evt.preventDefault();
		    if(b.display &&  myWorld.praypoints >= b.cost){
			    b.active=true;
			    myWorld.praypoints -= b.cost;
			    
			    console.log("Added Buffer "+b.name+" for "+b.cost);
		    }
		});
	});
});