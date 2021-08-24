var dia1 = document.getElementById("dia1");
var dia2 = document.getElementById("dia2");
var dia3 = document.getElementById("dia3");

function exibeDiaUm() {
    if(dia1.className === "collapse") {
        dia1.className = "collapse show";
        dia2.className = "collapse";
        dia3.className = "collapse";
    } else {
        dia1.className = "collapse";
    }
}

function exibeDiaDois() {
    if(dia2.className === "collapse") {
        dia2.className = "collapse show";
        dia1.className = "collapse";
        dia3.className = "collapse";
    } else {
        dia2.className = "collapse";
    }
}

function exibeDiaTres() {
    if(dia3.className === "collapse") {
        dia3.className = "collapse show";
        dia2.className = "collapse";
        dia1.className = "collapse";
    } else {
        dia3.className = "collapse";
    }
}