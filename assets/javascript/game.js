// ======================================================
// Global variables
// ======================================================
var wins = 0;
var losses = 0;
var totalScore = 0;
var score = 0;
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];
var randNum = [];
// ======================================================
// Game Initial state
// ======================================================
function gameInit() {
    var guessMax = 120;
    var guessMin = 19;
    var crystalMax = 12;
    var crystalMin = 1;
    var crystalNum1;
    var crystalNum2;
    var crystalNum3;
    var crystalNum4;
    score = 0;
    $("#scoreTotal").text(score);
    randNum = Math.floor(Math.random() * (+guessMax - +guessMin) + +guessMin);
    $("#randomNum").text(randNum);
    crystalNum1 = Math.floor(Math.random() * (+crystalMax - +crystalMin) + +crystalMin);
    crystalNum2 = Math.floor(Math.random() * (+crystalMax - +crystalMin) + +crystalMin);
    crystalNum3 = Math.floor(Math.random() * (+crystalMax - +crystalMin) + +crystalMin);
    crystalNum4 = Math.floor(Math.random() * (+crystalMax - +crystalMin) + +crystalMin);
    crystal1.push(crystalNum1);
    crystal2.push(crystalNum2);
    crystal3.push(crystalNum3);
    crystal4.push(crystalNum4);
}
document.body.onload = gameInit();
// ======================================================
// Game functions
// ======================================================
$("#crystal1").on("click", function () {
    score += parseInt(crystal1) + totalScore;
    $("#scoreTotal").text(score);
    checkIfWon();
})
$("#crystal2").on("click", function () {
    score += parseInt(crystal2) + totalScore;
    $("#scoreTotal").text(score);
    checkIfWon();
})
$("#crystal3").on("click", function () {
    score += parseInt(crystal3) + totalScore;
    $("#scoreTotal").text(score);
    checkIfWon();
})
$("#crystal4").on("click", function () {
    score += parseInt(crystal4) + totalScore;
    $("#scoreTotal").text(score);
    checkIfWon();
})

function checkIfWon() {
    if (score === randNum) {
        alert("you won")
        wins++;
        $("#wins").text(wins);
        gameInit();
    } else if (score > randNum) {
        alert("you lost!")
        losses++;
        $("#losses").text(losses);
        gameInit();
    }
}
