console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

var cards = ["queen","queen","king","king"];
var cardsInPlay = []; 

var checkForMath = function () {
	if (cardsInPlay [0] === cardsInPlay [1]) {
	console.log("You Found A Match!");
	} else { 
		console.log("Sorry, try again.");
}
};


var flipCard = function(cardId) {
	console.log("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if(cardsInPlay.length === 2) {
		checkForMath ();
	}
};





flipCard(0);
flipCard(2);