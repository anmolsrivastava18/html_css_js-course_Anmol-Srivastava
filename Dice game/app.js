/*
GAME RULES:

- The game has 2 players, playing in Rounds
- In each turn, player rolls two dices as many times as he/ she wishes. Each result gets added to the Round score.
- However, if the player rolls a 1 on any dice, the ROUND score resets to 0. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that,
  it's the next player's turn
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.

*/

document.addEventListener("DOMContentLoaded", function () {
    let diceNumber1, diceNumber2, scoresGlobal, roundScore, activePlayer, gamePlaying, diceArray1, diceArray2;
    let playerWins, maxScore;
    maxScore = 20;  // Setting the default maximum score


    function initializeGame(){
        gamePlaying = true;
        scoresGlobal = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        diceArray1 = [];
        diceArray2 = [];
        document.getElementById('score_set').value = '';
        document.querySelector('#dice_1').style.display = 'none';
        document.querySelector('#dice_2').style.display = 'none';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('#score-0').textContent = '0';
        document.querySelector('#score-1').textContent = '0';
        document.querySelector('#name-0').textContent = 'Player 1';
        document.querySelector('#name-1').textContent = 'Player 2';
    }


    function oneORHold(){
        roundScore = 0;
        document.querySelector('#dice_1').style.display = 'none';
        document.querySelector('#dice_2').style.display = 'none';
        document.querySelector('#current-' + (activePlayer % 2)).textContent = '0';
        activePlayer += 1;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceArray1 = [];
        diceArray2 = [];
    }


    function twoSixesCheck(diceNum, diceArr) {
        if (diceArr.length >= 2){
            if (diceArr[diceArr.length - 2] + diceArr[diceArr.length - 1] === 12){
                scoresGlobal[activePlayer % 2] = 0;
                document.querySelector('#score-' + (activePlayer % 2)).innerHTML = '0';
                oneORHold();
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }


    initializeGame();

    document.getElementById('score_set').addEventListener("input", function () {
        let input = Number(document.getElementById('score_set').value);
        maxScore = input > 0 ? input : maxScore;
    });

    document.querySelector(".btn-roll, .ion-ios-loop").addEventListener('click', function () {
        if (gamePlaying){
            diceNumber1 = Math.floor(Math.random() * 6) + 1;
            // diceNumber1 = 6;
            document.querySelector('#dice_1').src = diceNumber1 + '.png';
            document.querySelector('#dice_1').style.display = 'block';

            diceNumber2 = Math.floor(Math.random() * 6) + 1;
            // diceNumber2 = 6;
            document.querySelector('#dice_2').src = diceNumber2 + '.png';
            document.querySelector('#dice_2').style.display = 'block';

            diceArray1.push(diceNumber1);
            diceArray2.push(diceNumber2);

            if (twoSixesCheck(diceNumber1, diceArray1) || twoSixesCheck(diceNumber2, diceArray2)){
                // Nothing happens
            }
            else if (diceNumber1 === 1 || diceNumber2 === 1) {
                oneORHold();
            }
            else {
                roundScore += (diceNumber1 + diceNumber2);
                document.querySelector('#current-' + (activePlayer % 2)).textContent = roundScore;
            }
        }
    });

    document.querySelector('.btn-hold, .ion-ios-download-outline').addEventListener('click', function () {
        if (gamePlaying){
            scoresGlobal[activePlayer % 2] += roundScore;
            document.querySelector('#score-' + (activePlayer % 2)).innerHTML = scoresGlobal[activePlayer % 2].toString();
            if (scoresGlobal[activePlayer % 2] >= maxScore){
                playerWins = (activePlayer % 2) + 1;
                document.getElementById('name-' + (activePlayer % 2)).textContent = "Winner";
                document.querySelector('#dice_1').style.display = 'none';
                document.querySelector('#dice_2').style.display = 'none';
                document.querySelector('.player-' + (activePlayer % 2) + '-panel').classList.add('winner');
                document.querySelector('.player-' + (activePlayer % 2) + '-panel').classList.remove('active');
                gamePlaying = false;
            }
            else {
                oneORHold();
            }
        }
    });

    document.querySelector('.btn-new').addEventListener('click', function () {
        document.querySelector('.player-' + (activePlayer % 2) + '-panel').classList.remove('winner');
        initializeGame();
    });
});
