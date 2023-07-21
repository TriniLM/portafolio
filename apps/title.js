var title = document.getElementById('title')

var contador = 0
var addNom = "";

function nombre(){
let letras = ['G','t','r','i','n','i','d','a','d',' ','D','e','v'];
let almacenar = letras[contador];
addNom += almacenar;
title.innerHTML = addNom + "_" ;
contador = contador + 1
if(contador >= letras.length){
    clearInterval(intervalo)
    title.innerHTML = addNom;
    contador = 0;
    addNom = ""
    }
}


//var intervalo = setInterval();
var intervalo = setInterval(nombre, 250)

title.addEventListener('click', ()=> {
    title.innerHTML = ""
  intervalo = setInterval(nombre, 250);
})