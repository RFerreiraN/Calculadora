'use strict'

const pantalla = document.getElementById('pantalla');


function mostrar(valor){
   pantalla.value += valor; 
}

function total(){
    pantalla.value = eval(pantalla.value)
}

function cambiar(){
    pantalla.value = eval(pantalla.value)*-1;
}

function borrar(){
    pantalla.value = '';
}

function borrarUno(){
    pantalla.value = pantalla.value.slice(0,-1)
}

function porcentaje(){
    pantalla.value = eval(pantalla.value) * (0.01)
}