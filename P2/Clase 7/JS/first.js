// ---------------------------
// Declaración de Variables
// ---------------------------
// "var": Permite declarar variables de alcance global o local (dependiendo del contexto).
// "let": Declara variables limitadas al bloque en el que se definen.
// "const": Declara constantes cuyo valor no puede cambiar.

// Ejemplo de "var":
var nombre = "Ricardo"; // Variable global
var apellido = "Vargas";
var edad;
edad = 25;
console.log("Mi nombre es " + nombre + " " + apellido);
console.log("Mi edad es " + edad);

// Ejemplo de "let":
let x = 10;
let y = 15;
let suma = x + y;
console.log("La suma de x e y es: " + suma);

// Ejemplo de "const":
const PI = 3.14159;
console.log("El valor de PI es: " + PI);

// ---------------------------
// Tipos de Datos en JavaScript
// ---------------------------

// Tipo de dato String (cadena de texto):
let saludo = "Hola, mundo";
console.log("Tipo de dato de 'saludo':", typeof saludo); // string

// Tipo de dato Number:
let numero = 42;
console.log("Tipo de dato de 'numero':", typeof numero); // number

// Tipo de dato Boolean:
let esVerdadero = true;
console.log("Tipo de dato de 'esVerdadero':", typeof esVerdadero); // boolean

// Tipo de dato Object:
let persona = {
  nombre: "Ricardo",
  apellido: "Vargas",
  edad: 25
};
console.log("Tipo de dato de 'persona':", typeof persona); // object
console.log("Propiedades del objeto persona:", persona);

// Tipo de dato Array (un tipo especial de object):
let frutas = ["Manzana", "Banana", "Cereza"];
console.log("Tipo de dato de 'frutas':", typeof frutas); // object
console.log("Contenido del array frutas:", frutas);

// Tipo de dato Undefined:
let indefinido;
console.log("Tipo de dato de 'indefinido':", typeof indefinido); // undefined

// Tipo de dato Null (especial):
let nulo = null;
console.log("Tipo de dato de 'nulo':", typeof nulo); // object (peculiaridad de JavaScript)

// Tipo de dato Symbol:
let simbolo = Symbol("miSimbolo");
console.log("Tipo de dato de 'simbolo':", typeof simbolo); // symbol

// Tipo de dato BigInt:
let numeroGrande = BigInt(9007199254740991);
console.log("Tipo de dato de 'numeroGrande':", typeof numeroGrande); // bigint

// ---------------------------
// Operadores en JavaScript
// ---------------------------

// ---------------------------
// Orden de Operaciones Aritméticas
// ---------------------------
// En JavaScript, la precedencia de operadores determina el orden en que se evalúan las operaciones.
// De mayor a menor precedencia:
// 1. Paréntesis `()`
// 2. Exponenciación `**`
// 3. Multiplicación, División y Módulo `* / %`
// 4. Suma y Resta `+ -`

let resultado = (3 + 5) * 2 ** 3 / 4 % 5 - 1;
// Explicación paso a paso:
// (3 + 5) -> 8
// 2 ** 3 -> 8
// 8 * 8 -> 64
// 64 / 4 -> 16
// 16 % 5 -> 1
// 1 - 1 -> 0
console.log("Resultado:", resultado);

// ---------------------------
// Operadores de Asignación
// ---------------------------
// Permiten asignar valores a variables. Algunos comunes son:

let a = 10;
a += 5;     // a = a + 5 -> 15
a -= 3;     // a = a - 3 -> 12
a *= 2;     // a = a * 2 -> 24
a /= 4;     // a = a / 4 -> 6
a %= 5;     // a = a % 5 -> 1
console.log("Valor final de a:", a);

// ---------------------------
// Operadores de Comparación
// ---------------------------
// Usados para comparar valores. Devuelven `true` o `false`:

let b = "5";

// Igualdad (compara solo valores):
console.log("Igualdad (==):", a == b); // true

// Igualdad estricta (compara valores y tipos):
console.log("Igualdad estricta (===):", a === b); // false

// Desigualdad:
console.log("Desigualdad (!=):", a != b); // false

// Desigualdad estricta:
console.log("Desigualdad estricta (!==):", a !== b); // true

// Mayor, menor, mayor o igual, menor o igual:
console.log("Mayor que (>):", a > 3);   // true
console.log("Menor que (<):", a < 3);   // false
console.log("Mayor o igual (>=):", a >= 5); // true
console.log("Menor o igual (<=):", a <= 4); // false

// ---------------------------
// Operadores Lógicos
// ---------------------------
// Permiten combinar múltiples condiciones lógicas:

let esMayorDeEdad = true;
let tienePermiso = false;

// Operador AND (&&):
console.log("AND (&&):", esMayorDeEdad && tienePermiso); // false

// Operador OR (||):
console.log("OR (||):", esMayorDeEdad || tienePermiso); // true

// Operador NOT (!):
console.log("NOT (!):", !esMayorDeEdad); // false



// Ejemplo con rango:
let s = 12;
let valorMin = 0, valorMax = 12;
if (s >= valorMin && s <= valorMax) {
    console.log("El valor está dentro del rango");
} else {
    console.log("El valor está fuera del rango");
}

// ---------------------------
// Operadores Condicionales
// ---------------------------
// Permiten ejecutar diferentes bloques de código según una condición.

let edadUsuario = 18;

// "if-else" básico:
if (edadUsuario >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Operador ternario:
let mensaje = (edadUsuario >= 18) ? "Acceso permitido." : "Acceso denegado.";
console.log(mensaje);

// "if-else if-else" con múltiples condiciones:
let temperatura = 25;
if (temperatura > 30) {
  console.log("Hace calor.");
} else if (temperatura < 15) {
  console.log("Hace frío.");
} else {
  console.log("El clima es agradable.");
}

// ---------------------------
// Ejemplo Completo: Calculadora
// ---------------------------
// Usando operadores y control de flujo:

function calculadora(operacion, num1, num2) {
  let resultado;
  if (operacion === "suma") {
    resultado = num1 + num2;
  } else if (operacion === "resta") {
    resultado = num1 - num2;
  } else if (operacion === "multiplicacion") {
    resultado = num1 * num2;
  } else if (operacion === "division") {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Error: División entre cero.";
    }
  } else {
    resultado = "Operación no válida.";
  }
  return resultado;
}

console.log("Suma:", calculadora("suma", 10, 5));
console.log("División por cero:", calculadora("division", 10, 0));


//Conversion de Tipos

let minumero="20";
console.log(typeof minumero);

let minumero2=Number(minumero);
console.log(typeof minumero2);
console.log(minumero2);

let minumero3=parseInt(minumero);
console.log(typeof minumero3);
console.log(minumero3);

//ParseInt convierte un string a entero 
//Number: convierte un valor en un numero entero o flotante

console.log(parseInt("42px"));
console.log(parseInt(3.33254));
console.log(parseInt("1abc"));

console.log(Number("42px"));
console.log(Number(3.33266));
console.log(Number("abc"));

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

if(isNaN(minumero2)){
    console.log("NO es un numero");
}else{
    console.log("Es un numero");
}
console.log(isNaN(minumero2));
console.log(minumero2);

