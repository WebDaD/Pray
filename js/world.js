/**
 * 
 */
function world_create(){
	this.praypoints = 0;
	this.points_per_click = 1;
	this.interval = 100; // 1/10 Second
	
	this.buffers = [];
	this.modules = [];
	this.achievements = [];
	
	//create array of buffer objects
	this.buffers.push(new buffer_create("Beliving",50,2,50,"believing.png","believing","click"));
	this.buffers.push(new buffer_create("Bible",100,5,100,"bible.png","bible","people"));
	
	//create array of module objects
	this.modules.push(new module_create("People",10,0.01,10,"people.png","people"));

	
	//create array of achievement objects
	
}
