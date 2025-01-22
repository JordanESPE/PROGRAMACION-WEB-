function mostrarSaludo() {
    console.log("¡Hola, mundo!");
}

// Ejecutar la función cada 2 segundos (2000 ms)
const idIntervalo = setInterval(mostrarSaludo, 2000);

// Detener el intervalo después de 6 segundos
setTimeout(() => {
    clearInterval(idIntervalo); // Detener la repetición
    console.log("Se detuvo el saludo repetitivo.");
}, 6000);
