function sumar(a, b, callback) {
    console.log(`Sumando ${a} y ${b}...`);
    const resultado = a + b; // Realizamos la suma
    callback(resultado); // Llamamos al callback con el resultado
}

function mostrarResultado(resultado) {
    console.log(`El resultado es: ${resultado}`);
}

// Aquí llamamos a la función 'sumar' y le pasamos 'mostrarResultado' como callback
sumar(3, 5, mostrarResultado);
