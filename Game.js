var GameSettings = function(){
}

GameSettings.maxNumber = 100;
GameSettings.initialNumberOfLives = 3;


var Game = function()
{
	console.log("instance of game created");
	this.currentNumber = 0;
	this.score = 0;
	this.probability = 0;
	this.probabilityScore = 0;
	this.lives = GameSettings.initialNumberOfLives;

	this.compare = function compare(option, nextNumber)
	{
		// 0 less or equal, 1 more
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

	this.generateNumber = function(){
		  return Math.floor((Math.random() * GameSettings.maxNumber)+1);

	}
}

Game.prototype.start = function() {
  console.log("game started");

	this.currentNumber = this.generateNumber();
	this.nextNumber = this.generateNumber();

  console.log(currentNumber);
};

Game.prototype.gameStep = function(option)
{
	if(this.compare(option, this.nextNumber))
	{
		this.score ++;
		this.currentNumber = this.nextNumber;
		this.nextNumber = this.generateNumber();
		return 1;
	}
	else
	{
		if(this.lives > 0)
		{
				this.lives --;
				return 0;
		}
		else
		{
			return -1;
		}
	}
}
