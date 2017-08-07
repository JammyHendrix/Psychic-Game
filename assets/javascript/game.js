//If user picks letter correctly, the computer picks another letter
//If guesses left = 0 then the computer picks another letter
//store letters pressed on the screen

	

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var cpuLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var gameOver = false;
var lettersGuessed = [];

var computerGuess = cpuLetter[Math.floor(Math.random()*cpuLetter.length)];
		

		console.log(computerGuess);


	document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userGuess);

		if ((userGuess==computerGuess)) {
			gameOver = true;
			wins++;
			alert('Wins: ' + wins);

}		else {
		guessesLeft--;
		alert('Guess another Letter');
}
		if (guessesLeft==0) {
			gameOver = true;
			losses++;
			alert('You Lose');
		}
		
		var html = "<p>Guess what letter im thinking of</p>" + 
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>";


		document.querySelector('#game').innerHTML = html;

	};