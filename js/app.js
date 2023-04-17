/*
Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

function numeroGenerado() {
    return Math.floor(Math.random() * 50) + 1;
    
    
}

let numeroMagico = numeroGenerado();
let intentos = 0;
let numeroIngresado = document.getElementById('numero');

function verificarNumero() {
    intentos++;

    if (intentos > 10) {
        alert("No tenes mas intentos");
        return;
    }
    
    if (numeroIngresado === numeroMagico) {
        alert("Adivinaste el numero");
   
    } else if (numeroIngresado > numeroMagico) {
        alert("El numero que ingresaste es mayor que el numero a adivinar");
    
    } else {
        alert("El numero que ingresaste es menor que el numero a adivinar");
    }
}