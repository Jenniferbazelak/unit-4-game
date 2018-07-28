
// set variables
var wins = 0;
var losses = 0;
var crystalValue = 0;
var playerScore = 0;
var crystalValue1 = 0;
var crystalValue2 = 0;
var crystalValue3 = 0;
var crystalValue4 = 0;

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

function initializeGame() {
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
    console.log("current number is " + randomNumber);
    console.log("Crystal value 1 is " + crystalValue1);
    console.log("Crystal value 2 is " + crystalValue2);
    console.log("Crystal value 3 is " + crystalValue3);
    console.log("Crystal value 4 is " + crystalValue4);
    var playerScore = 0;
    $("#player-score").text(playerScore);

}

initializeGame()

$(".crystal").on("click", function () {
    var randomNumber = $("#current-random-number").val();
    var playerScore = $("#player-score").val();
    var crystalValue = $(this).val();
    playerScore= (playerScore + crystalValue)
    if (randomNumber > playerScore) {
        $("#player-score").text(crystalValue + playerScore);
    }
    else if (randomNumber === playerScore) {
        wins++;
        $("#wins").text(wins);
        initializeGame();
    }
    else if (randomNumber < playerScore) {
        loses++;
        $("losses").text(losses);
        initializeGame();
    }
})
