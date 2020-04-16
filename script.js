var score, roundScore, activePlayer, isGamePlaying;

init();

document.querySelector('.dice').addEventListener('click', function () {
    if (isGamePlaying) {
        var dice, diceText;

        //1. Random Number
        dice = Math.floor(Math.random() * 6) + 1;
        switch (dice) {
            case 1:
                diceText = 'one';
                break;
            case 2:
                diceText = 'two';
                break;
            case 3:
                diceText = 'three';
                break;
            case 4:
                diceText = 'four';
                break;
            case 5:
                diceText = 'five';
                break;
            case 6:
                diceText = 'six';
                break;
        }

        //2. Update Dice
        document.querySelector('.img').firstChild.className = 'fas fa-dice-' + diceText;

        //3. Update Score
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPLayer();
            //document.querySelector('.player-0-panel').classList.remove('active');
            //ocument.querySelector('.player-1-panel').classList.add('active');
        }
    }
});

document.querySelector('.hold').addEventListener('click', function () {
    if (isGamePlaying) {
        //Add CURRENT score to GLOBAL score
        score[activePlayer] += roundScore;

        //Update the User Interface
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = '0';

        //Check if the player won
        if (score[activePlayer] >= 100) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('#player-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.img').firstChild.className = 'fas fa-square';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isGamePlaying = false;
        } else {
            nextPLayer();
        }
    }
});

function nextPLayer() {
    document.getElementById('current-' + activePlayer).textContent = '0';

    document.querySelector('.img').firstChild.className = 'fas fa-square';

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.new-game').addEventListener('click', init);

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('player-0').textContent = 'PLAYER 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
