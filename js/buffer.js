/**
 * 
 */
function buffer_create(name,cost, pps_mod, displayat, image, id, target){
	this.cost=cost;
	this.pps_mod=pps_mod;
	this.displayat=displayat;
	this.display = false;
	this.name=name;
	this.image=image;
	this.active=false;
	this.target=target;
	
	this.id = id;
	
	console.log("Buffer "+this.name+" created.");
}