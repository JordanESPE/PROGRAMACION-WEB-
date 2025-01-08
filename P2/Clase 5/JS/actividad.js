/*Crea uan funcion declarada llamada calcularPromedio que recibe tres numeros como parametros y retorna 
su promedio

Declara una funcion expresada llamada determinarMayor que recibe dos numeros como parametros 
y retorne cual es el mayor de ellos

Crea una funcion flecha llamada esPar que recibe un numero y retorna true si el numero es par y false si no lo es

Escribe una funcion anonima autoejecutable que:

LLame a las funciones anteriores (CalcularPromedio, determinarMayor y esPar)
Use valores de ejemplo y muestre los resultados en consola

Reto: Agrega validaciones para asegurarar que los parametros son numeros antes de realizar las operaciones

Si algun parametro no es un numero, lanza un mensaje descriptivo de error
 */

function calcularPromedio(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.error('Error: Todos los parámetros de calcularPromedio deben ser números.');
        
    }
    return (a + b + c) / 3;
}


const determinarMayor = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error('Error: Ambos parametros de determinarMayor deben ser numeros.');
       
    }
    return a > b ? a : b;
};


const esPar = (num) => {
    if (typeof num !== 'number') {
        console.error('Error: El parametro de esPar debe ser un numero.');
        
    }
    return num % 2 === 0;
};


(function () {
  
    const num1 = 10;
    const num2 = 25;
    const num3 = 30;


    const promedio = calcularPromedio(num1, num2, num3);
    console.log(`El promedio de ${num1}, ${num2} y ${num3} es: ${promedio}`);

    const mayor = determinarMayor(num1, num2);
    console.log(`El mayor entre ${num1} y ${num2} es: ${mayor}`);

    const esParResultado = esPar(num3);
    console.log(`¿El numero ${num3} es par? ${esParResultado}`);
})();