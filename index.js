const rollDice = () => {
    let playerOne = rollDie();
    let playerTwo = rollDie();

    getWinner(playerOne, playerTwo);
    
    playerOne = getDice(playerOne);
    playerTwo = getDice(playerTwo);
    
    document.querySelector(".player-one").setAttribute("src", playerOne);
    document.querySelector(".player-two").setAttribute("src", playerTwo);
}

const rollDie = () => {
    let randomValue = Math.random();
    randomValue *= 6;
    randomValue++;
    randomValue = Math.floor(randomValue);
    return randomValue;
}

const getDice = rolledDie => {
    let dieImgPath;
    
    switch (rolledDie) {
        case 1:
            dieImgPath = "images/dice-1.png";
            break;
        case 2:
            dieImgPath = "images/dice-2.png";
            break;
        case 3:
            dieImgPath = "images/dice-3.png";
            break;
        case 4:
            dieImgPath = "images/dice-4.png";
            break;
        case 5:
            dieImgPath = "images/dice-5.png";
            break;
        case 6:
            dieImgPath = "images/dice-6.png";
            break;
        default:
            dieImgPath = "images/dice-1.png";
            break;
    }

    return dieImgPath;
}

const getWinner = (playerOneDie, playerTwoDie) => {
    if (playerOneDie > playerTwoDie) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (playerTwoDie > playerOneDie) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}