//Arreglos

//Declaracion

const arr= new Array(10);
const arr1 = [];
console.log(arr);
const numeros = [1,2,3,4,5];
let colores = ["rojo","verde","azul"];

//Ejercicios

let videojuegos = ["Mario 3","Megaman","Soccer"];
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    function(){
        ()=>[]
        ['S','Peliculas']

    }

];
console.log(arregloCosas);
console.log(arregloCosas[3])

//metodos funcionales map,filter, reduce
 //map transofrma los elementos de un arreglo

 let numeross = [1,2,3,4,5,6,7,8];
 let cuadrados = numeross.map(num => num*num);
 console.log(cuadrados);

 //filter filtra los elementos que cumolen a un tipo de condicion
 let numerosFilter = [1,2,3,4,5,6,7,8];
 let pares =numerosFilter.filter(num=>num %2 ==0);
 console.log(pares);

 //reduce reduce los elementos a un solo valor como por ejemplo 
 
 let numerosReduce = [1,2,3,4,5,6,7,8];

 let maximo =numerosReduce.reduce((acumular, num) => (num>acumular ? num : acumular), numerosReduce[5]);
 console.log(maximo);

 //Ventajas 
 /*
 - Son ideales para trabajar con transformacion y manipulacion complejas de datos dentro de un array permitenun estilo
 de programacion funcional mas limpio y facil de leer
 */