var Game = function(){
	console.log("instance of game created");
	this.currentNumber = 0;
	this.score = 0;
	this.probability = 0;
	this.probabilityScoore = 0;
	this.lifes = 3;

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

	this.generateNumber = function(maxNum){
		  return Math.floor((Math.random() * maxNum)+1);

	}
}

Game.prototype.start = function() {
  console.log("game started");

	this.currentNumber = this.generateNumber(100);
	this.nextNumber = this.generateNumber(100);

  console.log(currentNumber);
};

Game.prototype.gameStep = function(option)
{
	//var nextNumber = this.generateNumber(100);

	if(this.compare(option, this.nextNumber))
	{
		this.score ++;
		this.currentNumber = this.nextNumber;
		this.nextNumber = this.generateNumber(100);
		return 1;
	}
	else
	{
		this.lifes --;
		if(this.lifes > 0)
		{
		return 0;
		}
		else
		{
			return -1;
		}
	}

}
