'use strict';



let score = 20;
function game() {
    const secretNumber = Math.trunc(Math.random()*20+1);
    
    document.querySelector('.check').addEventListener('click', () => {
        const guessedNumber = Number(document.querySelector('.guess').value);
        // Until score reaches 0
        if(score > 1){
            // When there is no input
            if(!guessedNumber){
                document.querySelector('.message').textContent = '🙄 No number';
            }
            // When number is too low
            else if (guessedNumber < secretNumber) {
                document.querySelector('.message').textContent = '📉 Too low!';
                score--;
                document.querySelector('.score').textContent = score;
            }
            // When number is too high
            else if(guessedNumber > secretNumber) {
                document.querySelector('.message').textContent = '📈 Too High!';
                score--;
                document.querySelector('.score').textContent = score;
            }
            // When player wins
            else {
                document.querySelector('.message').textContent = '🎉 Correct Number!';
                document.querySelector('.score').textContent = score;
                // Highscore
                let highscore = Number(document.querySelector('.highscore').textContent);
                if(score > highscore){
                    highscore = score;
                }
                document.querySelector('.highscore').textContent = highscore;

                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
            }
        }
        // When score reaches 0
        else{
            document.querySelector('.message').textContent = '💥Game Over!'
            score=0;
            document.querySelector('.score').textContent = score;
        }
        
    });
}

function reset (){
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
}

game();

document.querySelector('.again').addEventListener('click', () => {
    reset();
});


