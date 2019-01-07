var luke = $("#luke");
var rey = $("#rey");
var kylo = $("#kylo");
var phasma = $("#phasma");
// ==========================================================
// Character Objects
// ==========================================================
luke = {
    hp: 120,
    attack: 8,
    increase: 8
}
rey = {
    hp: 100,
    attack: 15,
    increase: 15
}
kylo = {
    hp: 180,
    attack: 5,
    increase: 5
}
phasma = {
    hp: 150,
    attack: 20,
    increase: 20,
}

$("#luke").click(function () {
    $("#luke").appendTo("#userCharacter");
    // Rey
    $("#rey").appendTo("#enemies");
    $("#rey").attr("id", "enemyRey");
    $("#enemyRey").click(function () {
        $("#enemyRey").appendTo("#defender");
    })
    // Kylo
    $("#kylo").appendTo("#enemies");
    $("#kylo").attr("id", "enemyKylo");
    $("#enemyKylo").click(function () {
        $("#enemyKylo").appendTo("#defender");
    })
    // Phasma
    $("#phasma").appendTo("#enemies");
    $("#phasma").attr("id", "enemyPhasma");
    $("#enemyPhasma").click(function () {
        $("#enemyPhasma").appendTo("#defender");
    })
});

$("#rey").click(function () {
    $("#luke").attr("id", "enemyLuke");

    $("#rey").appendTo("#userCharacter");
    $("#luke").appendTo("#enemies");
    $("#kylo").appendTo("#enemies");
    $("#phasma").appendTo("#enemies");
});
$("#kylo").click(function () {
    $("#luke").attr("id", "enemyLuke");

    $("#kylo").appendTo("#userCharacter");
    $("#luke").appendTo("#enemies");
    $("#rey").appendTo("#enemies");
    $("#phasma").appendTo("#enemies");
});
$("#phasma").click(function () {
    $("#luke").attr("id", "enemyLuke");

    $("#phasma").appendTo("#userCharacter");
    $("#luke").appendTo("#enemies");
    $("#rey").appendTo("#enemies");
    $("#kylo").appendTo("#enemies");
});
// user picks Character
// other characters become enemies
// user picks defender and attacks
// attack button takes HP from both characters
// users attack strength goes up
