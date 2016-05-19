var Game = function(){
	console.log("instance of game created");
	this.currentNumber = 0;
	this.score = 0;
	this.probability = 0;
	this.probabilityScoore = 0;

	this.compare = function compare(option, nextNumber)
	{
		// 0 less, 1 more
		if(option === 0)
		{
				return nextNumber <= this.currentNumber;
		}
		else if(option === 1)
		{
				return nextNumber > this.currentNumber;
		}
		else
		{
		throw "not supported option";
		}
	}
}

Game.prototype.start = function() {
  console.log("game started");
  this.currentNumber = Math.floor((Math.random() * 100)+1);
  console.log(currentNumber);
};

Game.prototype.gameStep = function(option)
{
	var nextNumber = Math.floor((Math.random() * 100) + 1);

	if(this.compare(option, nextNumber))
	{
		this.score ++;
		this.currentNumber = nextNumber;
		return true;
	}
	else
	{
		return false;
	}

}
