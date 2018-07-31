$(document).ready(function () {

    // set variables
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var crystalValue1 = 0;
    var crystalValue2 = 0;
    var crystalValue3 = 0;
    var crystalValue4 = 0;

    //define functions
    function getRandomNumber(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }

    function initializeGame() {
        randomNumber = getRandomNumber(19, 120);
        $("#current-random-number").text(randomNumber);
        crystalValue1 = getRandomNumber(1, 12);
        crystalValue2 = getRandomNumber(1, 12);
        crystalValue3 = getRandomNumber(1, 12);
        crystalValue4 = getRandomNumber(1, 12);
        playerScore = 0;
        $("#player-score").text(playerScore);
        console.log("current number is " + randomNumber);
        console.log("Crystal value 1 is " + crystalValue1);
        console.log("Crystal value 2 is " + crystalValue2);
        console.log("Crystal value 3 is " + crystalValue3);
        console.log("Crystal value 4 is " + crystalValue4);
        console.log("player score is " + playerScore);

    }

    function win() {
        wins++;
        $("#wins").text(wins);
        alert("You Win!");
        initializeGame();
    }

    function lose() {
        losses++;
        $("#losses").text(losses);
        alert("You Lose!");
        initializeGame();
    }


    //set-up at initial screen

    var randomNumber = getRandomNumber(19, 120);
    $("#current-random-number").text(randomNumber);
    var crystalValue1 = getRandomNumber(1, 12);
    $("#crystal-1").text(crystalValue1);
    var crystalValue2 = getRandomNumber(1, 12);
    $("#crystal-2").text(crystalValue2);
    var crystalValue3 = getRandomNumber(1, 12);
    $("#crystal-3").text(crystalValue3);
    var crystalValue4 = getRandomNumber(1, 12);
    $("#crystal-4").text(crystalValue4);
    $("#wins").text(wins);
    $("#losses").text(losses);
    console.log("current number is " + randomNumber);
    console.log("Crystal value 1 is " + crystalValue1);
    console.log("Crystal value 2 is " + crystalValue2);
    console.log("Crystal value 3 is " + crystalValue3);
    console.log("Crystal value 4 is " + crystalValue4);



// when a crystal is clicked

    $("#crystal-1").on("click", function () {
        playerScore = playerScore + crystalValue1;
        $("#player-score").text(playerScore);
        console.log("The player score is now " + playerScore)
        if (randomNumber === playerScore) {
            win();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }
        else if (randomNumber < playerScore) {
            lose();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }

    });

    $("#crystal-2").on("click", function () {
        playerScore = playerScore + crystalValue2;
        $("#player-score").text(playerScore);
        console.log("The player score is now " + playerScore)
        if (randomNumber === playerScore) {
            win();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }
        else if (randomNumber < playerScore) {
            lose();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }

    });

    $("#crystal-3").on("click", function () {
        playerScore = playerScore + crystalValue3;
        $("#player-score").text(playerScore);
        console.log("The player score is now " + playerScore)
        if (randomNumber === playerScore) {
            win();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }
        else if (randomNumber < playerScore) {
            lose();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }

    });

    $("#crystal-4").on("click", function () {
        playerScore = playerScore + crystalValue4;
        $("#player-score").text(playerScore);
        console.log("The player score is now " + playerScore)
        if (randomNumber === playerScore) {
            win();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }
        else if (randomNumber < playerScore) {
            lose();
            playerScore = 0;
            $("#player-score").text(playerScore);
            initializeGame();
        }

    });

});
