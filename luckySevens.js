let startingBet;
let rolls = 0;
let gameMoney;
let highestRolled;
let highestWon;

function rollDice() {
    rolls++;
    let diceRoll = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.Random() * 6) + 1);
    if (diceRoll === 7) {
        gameMoney = gameMoney + 4.00;
        if (gameMoney > highestWon) {
            highestWon = gameMoney;
            highestRolled = rolls;
        }
    }

    else {
        gameMoney = gameMoney - 1.00;
    }
}

function playGame() {
    startingBet = parseInt(document.getElementById("startBetNumber").value);
    highestWon = document.getElementById("startBetNumber").value;
    highestRolled = rolls;
    document.getElementById("startBetNumber").disabled = true;
    if (startBetNumber <= 0) {
        alert("You gotta have money to make money.  Please enter an amount greater than $0.00")
    } else {
        gameMoney = startingBet;

        while (gameMoney > 0) {
            rollDice();
        }

        document.getElementById("results").setAttribute("style","");
        document.getElementById("playButton").setAttribute("style", "display:none")
        document.getElementById("resultsStartingBet").innerHTML = '$${startingBet}';
        document.getElementById("resultsTotalRolls").innerHTML = '${rolls}';
        document.getElementById("resultsHighestWon").innerHTML = '$${highestWon}'
        document.getElementById("resultsHighestRolled").innerHTML = '${highestRolled}';
    }
}