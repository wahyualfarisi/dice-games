//INIT GLOBAL VAR
var scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //Display to round
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        //roll dice 1 & dice 2
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //update score 
        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add current score to score value
        scores[activePlayer] += roundScore;
        //update to UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check score if WIN
        if (scores[activePlayer] > 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            //add class winner and active
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //Update to UI to 0 
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    //change class active with class list toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //change style display none 
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';


}


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //display none to dice1 && dice 2
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    //add values 0 to player 1 && player 2 score 
    document.getElementById('score-0').textContent = scores[0];
    document.getElementById('score-1').textContent = scores[1];

    //add value 0 to player 1 && player 2 current score 
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    //add Name To player 1 && 2 
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //remove class winner and active 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //add class active again 
    document.querySelector('.player-0-panel').classList.add('active');

}