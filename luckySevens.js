function rollDice() {
    let dice1 = (Math.floor(Math.random() * 6 ) + 1);
    let dice2 = (Math.floor(Math.random() * 6) + 1);
    return dice1 + dice2;
}

function playGame() {
    
    let startingBet = document.forms['luckySevens']['startingBet'].value;
    
    
    if (startingBet <= 0) {
        alert('Error: You need money to make money - Please enter an amount greater than $0.00.')
    }
    
    
    let gameMoney = Number(startingBet);
    let numberOfRolls = 0;
    let highestWon = Number(startingBet);
    let rollsAtHighest = 0;
        
    while (gameMoney > 0) {
        
        
        let sumOfDice = rollDice();
        
         numberOfRolls ++;
        
        if (sumOfDice === 7) {
            gameMoney += 4;
            
            if (gameMoney > highestWon) {
                highestWon = gameMoney;
                rollsAtHighest = numberOfRolls;
            }
        }
        else {
            gameMoney -= 1;
        }
    }

    if (startingBet > 0) {
        document.getElementById("starting-bet-value").innerText = "$" + parseFloat(Math.round(startingBet * 100) / 100).toFixed(2);
        
        document.getElementById("total-rolls").innerText = numberOfRolls;
        
        document.getElementById("highest-amount").innerText = '$' + parseFloat(Math.round(highestWon * 100) / 100).toFixed(2);
        
        document.getElementById("rolls-at-highest").innerText = rollsAtHighest;
        document.getElementById("submitButton").innerText = 'Play Again';
    }
    return false;
}
 
