var dia1 = document.getElementById("dia1");
var dia2 = document.getElementById("dia2");
var dia3 = document.getElementById("dia3");

function exibeDiaUm() {
    if(dia1.style.display === "none") {
        dia1.style.display = "block";
        dia2.style.display = "none";
        dia3.style.display = "none";
    } else {
        dia1.style.display = "none";
    }
}

function exibeDiaDois() {
    if(dia2.style.display === "none") {
        dia2.style.display = "block";
        dia1.style.display = "none";
        dia3.style.display = "none";
    } else {
        dia2.style.display = "none";
    }
}

function exibeDiaTres() {
    if(dia3.style.display === "none") {
        dia3.style.display = "block";
        dia2.style.display = "none";
        dia1.style.display = "none";
    } else {
        dia3.style.display = "none";
    }
}