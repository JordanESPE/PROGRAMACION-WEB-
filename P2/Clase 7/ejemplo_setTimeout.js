const promesa = new Promise((resolve, reject) => {
    // Hacer algo asincrónico
    let exito = true; // Simulación de éxito o fracaso
    if (exito) {
        resolve("Operación exitosa"); // Si todo va bien
    } else {
        reject("Ocurrió un error"); // Si algo falla
    }
});
