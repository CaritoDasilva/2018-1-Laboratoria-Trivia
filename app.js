
function startGame() {
    document.getElementById("demo").innerHTML = "¡Comencemos!";
}

return comprobar()
function comprobar() {
    var question1 = document.formu.nombre.value;

    if (question1.toLowerCase() == "n") {
        document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No han egresado hombres</p>"
        "</div>";
    } else {
        document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No han egresado hombres</p>"
        "</div>";
    }
}

