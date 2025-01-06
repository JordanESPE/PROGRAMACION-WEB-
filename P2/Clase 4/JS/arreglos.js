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


 //Agregar elementos dentro de un array 

 //push() agrega uno o mas elementos al final de un arreglo 

 let  p = [1,2,3,4]
p.push(5);
console.log(p);

//Si queremos agregar uno o varias elementos al principio del arreglo usamos el metodo unshift()

let u = [1,2,3,4]
u.unshift(5);
console.log(u);

//Si queremos agregar/eliminar un elemento en cualquier lugar del arreglo usamos el metodo splice()

let y = [1,2,3,4]
y.splice(1,0,5);
console.log(y);

//Podemos acceder a un elementos directamente  por su indice y modificarlo
let i = ['Maria','Juan','Pedro','Jose']
i[2]='Pepe';
console.log(i);

//Si deseamos modificar el arreglo de forma inmutable se puede utilizar el metodo map() => Crea un nuevo arreglo con los valores modificados
//let arregloMap = ['Azul', 'Amarillo', 'Rojo', 'Negro']

let arregloMap = [10,23,35,26]
let arregloNuevo = arregloMap.map(num => num===24 ? 5 : num);
console.log(arregloNuevo); 


//splice() tambien se puede utilizar 
let z = [1,2,3]
z.splice(1,1,5);
console.log(z);

//Eliminar elementos de un array
//pop() elimina el ultimo elemento del arreglo
let arregloE = ['Azul', 'Amarillo', 'Rojo', 'Negro']
arregloE.pop();
console.log(arregloE);

//shift() elimina el primer elemento de un array
arreglosS=['Azul', 'Amarillo', 'Rojo', 'Negro'];
arreglosS.shift();
console.log(arreglosS);

//Splice() para eliminar cualquier elemento de un arreglo

let arregloSP = ['Azul', 'Amarillo', 'Rojo', 'Negro', 'Morado', 'Gris']
arregloSP.splice(1,3);
console.log(arregloSP);