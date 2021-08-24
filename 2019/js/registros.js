var dia1 = document.getElementById("dia1");
var dia2 = document.getElementById("dia2");
var dia3 = document.getElementById("dia3");

var item_dia1 = document.getElementById('item-dia1')
var item_dia2 = document.getElementById('item-dia2')
var item_dia3 = document.getElementById('item-dia3')

function exibeDiaUm() {
    if(dia1.className === "collapse") {
        dia1.className = "collapse show";
        dia2.className = "collapse";
        dia3.className = "collapse";

        item_dia1.className = "col-sm-4 text-lg-center active"
        item_dia2.className = "col-sm-4 text-lg-center"
        item_dia3.className = "col-sm-4 text-lg-center"
    } 
}

function exibeDiaDois() {
    if(dia2.className === "collapse") {
        dia2.className = "collapse show";
        dia1.className = "collapse";
        dia3.className = "collapse";
        
        item_dia1.className = "col-sm-4 text-lg-center"
        item_dia2.className = "col-sm-4 text-lg-center active"
        item_dia3.className = "col-sm-4 text-lg-center"
    }
}

function exibeDiaTres() {
    if(dia3.className === "collapse") {
        dia3.className = "collapse show";
        dia2.className = "collapse";
        dia1.className = "collapse";
        
        item_dia1.className = "col-sm-4 text-lg-center"
        item_dia2.className = "col-sm-4 text-lg-center"
        item_dia3.className = "col-sm-4 text-lg-center active"
    }
}