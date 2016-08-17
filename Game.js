var GameSettings = function(){
}

GameSettings.maxNumber = 100;
GameSettings.initialNumberOfLives = 1;


var Game = function()
{
	console.log("instance of game created");

	this.currentNumber = 0;
	this.score = 0;
	this.probability = 0;
	this.probabilityScore = 1;
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

	this.generateNumber = function()
	{
		  return Math.floor((Math.random() * GameSettings.maxNumber) + 1 );
	}

	this.calculateProbability = function()
	{
		var factor = 1;

		if(this.currentNumber < this.nextNumber)
		{
			factor = GameSettings.maxNumber - this.currentNumber;
		}
		else
		{
			factor = this.currentNumber;
		}

		this.probability =  factor/GameSettings.maxNumber * 100;
	}
}



Game.prototype.start = function() {
  console.log("game started");

	this.currentNumber = this.generateNumber();
	this.nextNumber = this.generateNumber();
	this.calculateProbability();

  console.log(currentNumber);
};

Game.prototype.gameStep = function(option)
{
	if(this.compare(option, this.nextNumber))
	{
		this.score ++;
		this.currentNumber = this.nextNumber;
		this.nextNumber = this.generateNumber();

		if(this.probability <= 10)
		{
			console.log("life awarded");
			this.lives ++;
		}

		this.probabilityScore = this.probabilityScore * this.probability / 100;
		this.calculateProbability();
		return 1;
	}
	else
	{
		if(this.lives > 0)
		{
		  	this.currentNumber = this.nextNumber;
		  	this.nextNumber = this.generateNumber();
				this.lives --;
				return 0;
		}
		else
		{
			return -1;
		}
	}
}
