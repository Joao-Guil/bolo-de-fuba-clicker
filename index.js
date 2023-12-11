let cont = 0
let visor = document.getElementById("cont") 
let btn = document.getElementById("hate")

function clicar() {
    cont++;
    visor.innerText = "Clicks: " + cont;
}