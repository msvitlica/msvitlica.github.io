var Game = function(){
	console.log("instance of game created");
	this.currentNumber = 0;	
	this.score = 0;
}

Game.prototype.start = function() {
  console.log("game started");
  this.currentNumber = Math.floor((Math.random() * 100)+1); 
  console.log(currentNumber);
};

Game.prototype.more = function(){
	var nextNumber = Math.floor((Math.random() * 100)+1); 
	if(nextNumber > this.currentNumber){
		this.score ++;
		this.currentNumber = nextNumber;
		return true;
	}
	else
	{
		return false;
	}
}

Game.prototype.less = function(){
	var nextNumber = Math.floor((Math.random() * 100)+1); 
	if(nextNumber <= this.currentNumber){
		this.score ++;
		this.currentNumber = nextNumber;
		return true;
	}
	else
	{
		return false;
	}
	
}
