/**
 * 
 */
function module_create(name,basic_cost, pps, displayat, image, id){
	this.basic_cost=basic_cost;
	this.pps=pps;
	this.count=0;
	this.displayat=displayat;
	this.display = false;
	this.name=name;
	this.image=image;
	this.buff_mod=1;
	this.addPoints = function(){
		return((this.count*this.pps)*this.buff_mod);
	};
	
	this.realcost = function(){
		return(this.basic_cost + (this.count*10));
	};
	
	this.id = id;
	
	console.log("Module "+this.name+" created.");
}