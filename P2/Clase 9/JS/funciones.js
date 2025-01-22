//Funcion Declarada 

function miFuncion(a,b){
    console.log(arguments.length);
    console.log('la suma de dos numeros es: ' + (a+b));

}

miFuncion(2,3,4);

//La palabra return dentro de la funcion

function miReturn(a,b){
    return a+b;
}

let resultado = miReturn(4,5);

console.log(resultado);

//Funcion de Tipo Expresion
//Declararacion de una funcion que es igual a una expresion

let sumar = function (a,b) {return a*b};
res = sumar(2,4);

console.log(typeof sumar);
console.log(res);

//Funciones de tipo Self-Invoking
//Son funciones que se llaman a si mismas
//Funciones anonimas
//No son muy comunes pero pueden ser muy utiles en algunos casos

(function (a,b){
    console.log('Ejecutando la funcion: '+ (a+b));
}

)(3,4);

//Funciones Anonimas

setTimeout(function() {
    console.log('Hola desde una funcion anonima');
    
},4000);

const persona = {
    nombre: 'Diego',
    saludar() {
        return `Hola, soy ${this.nombre}`;
    },
    apellido: 'Sanches'
};

//Funciones Tipo Flecha (arrow functions)
//Se mantiene como una forma concisa de declarar funciones y es ampliamente usada

const sumarValores = (a,b) => a+b;
console.log(sumarValores(5,7));

const operaciones = {sumar: (a,b) => a+b, resta: (a,b)=>a-b,multiplicacion:(a,b)=> a*b, division:(a,b)=> a/b};
console.log(operaciones.sumar(2,3));
console.log(operaciones.resta(2,3));
console.log(operaciones.multiplicacion(2,3));
console.log(operaciones.division(2,3));








































