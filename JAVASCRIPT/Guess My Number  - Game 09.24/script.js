'use strict';


let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1; //between 0 and 1 // Changed to let beacuse we reasign it in function AGAIN 
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

        // GAME LOGIC

        document.querySelector('.check').addEventListener('click', function() {
            const guess = Number(document.querySelector('.guess').value);
            //Very important to add Number() because value is usually a string :D
            console.log(guess, typeof guess);

            //If there is no input
            if (!guess) {
                displayMessage('No Number!');

                // When player wins
            } else if (guess === secretNumber) {
                displayMessage('You guessed!');

                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = "30rem";
                document.querySelector('.number').style.color = 'red'

                // Secret number reveal
                document.querySelector('.number').textContent = secretNumber;
                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                }


                // when guess is wrong
            } else if (guess != secretNumber) {
                displayMessage(guess > secretNumber ? `Too high!` : `Too Low!`);
                score--;
                document.querySelector('.score').textContent = score;
                
                } else {
                    displayMessage('You lost the game');
                    document.querySelector('.score').textContent = 0;
                }
        });

        // AGAIN - Reseting game

        document.querySelector('.again').addEventListener('click', function() {
            score = 20; // Order matters - #1
            displayMessage("Start guessing...");
            document.querySelector('.number').textContent = '?';
            document.querySelector('.number').style.color = '#333';
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.score').textContent = score; // beacuse of You - #2
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.guess').value = '';
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            
        })