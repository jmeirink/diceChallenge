// Step 1 - Generate a random number between 1 - 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Step 2 - Use the random number you created in the last step to pick out a random dice image
// between dice1.png to dice 6.png, then place this image inside the left <img> element.
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
document.querySelector('.img1').src = "images/" + randomDiceImage1;

// Step 3 - Do the same for the right hand side image element.
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.querySelector('.img2').src = "images/" + randomDiceImage2;

// Step 4 - Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw
// depending on the dice values of player 1 (left) and player 2 (right).
if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!';
}
else if (randomNumber2 > randomNumber1) {
	document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
}
else {
	document.querySelector('h1').innerHTML = 'Draw!';
}
