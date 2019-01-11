// random number is generated to guess DONE
// random numbers are given to the crystals
// player clicks crystals and updates score
// if player goes above random number, they lose
// if player gets random number correct, they win

// Global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var score;
var crystal1 = [];
var crystal2 = [];
var crystal3 = [];
var crystal4 = [];
var randNum;


// Game Initial state
function gameInit() {
    var guessMax = 120;
    var guessMin = 19;
    var crystalMax = 12;
    var crystalMin = 1;
    var crystalNum1;
    var crystalNum2;
    var crystalNum3;
    var crystalNum4;
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
    console.log(crystal1);
    console.log(crystal2);

}
document.body.onload = gameInit();

$("#crystal1").on("click", function () {
    score = parseInt(crystal1) + totalScore;
    $("#scoreTotal").text(score);
});

$("#crystal2").on("click", function () {
    score = parseInt(crystal2) + totalScore;
    $("#scoreTotal").text(score);

})
