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


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


function createBoard(){
	var gameBoard = document.getElementById('game-board');

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
		cardElement.addEventListener('click', isTwoCards)


		gameBoard.appendChild(cardElement);
	}
}



function isMatch(cardsInPlay){
	var isMatch = cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1];
	
	return isMatch;
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  var cardType = this.getAttribute('data-card');
  cardsInPlay.push(cardType);

  //show card image
  this.innerHTML = '<img src="' + cardType + '.png" alt="' + cardType +'" />';


  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
	

    // clear cards visually
    var allCards = document.getElementsByClassName('card');
    	for (var i = 0; i < allCards.length; i++) {
    		allCards[i].innerHTML = '';
    	}

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}


createBoard();