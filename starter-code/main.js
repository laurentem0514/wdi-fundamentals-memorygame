var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo || cardThree === cardFour){
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}*/


var numberOfCards = 4;


function createBoard(numberOfCards){
	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < numberOfCards; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
	}
}

createBoard(numberOfCards);
