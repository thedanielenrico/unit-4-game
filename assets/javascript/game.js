var luke = $("#luke");
var rey = $("#rey");
var kylo = $("#kylo");
var phasma = $("#phasma");


luke = {
    hp: 120,
    attack: 8
}
rey = {
    hp: 100,
    attack: 15
}
kylo = {
    hp: 180,
    attack: 20
}
phasma = {
    hp: 150,
    attack: 5
}
console.log(luke.hp);
$("#luke").click (function() {
    alert("You clicked luke");
});
$("#rey").click (function() {
    alert("You clicked rey");
});
$("#kylo").click (function() {
    alert("You clicked kylo");
});
$("#phasma").click (function() {
    alert("You clicked phasma");
});
// user picks Character
// other characters become enemies
// user picks defender and attacks
// attack button takes HP from both characters
// users attack strength goes up
