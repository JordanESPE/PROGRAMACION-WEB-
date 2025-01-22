/*-----------------------------------------------
                OBJETOS
-----------------------------------------------*/

// Características principales de los objetos en JS

// Claves y valores:
// Las claves son cadenas o símbolos (únicos).
// Los valores pueden ser de cualquier tipo: números, cadenas, funciones, otros tipos de objetos, etc.

// Dinamismo:
// Los objetos pueden modificarse en tiempo de ejecución (agregar, modificar o eliminar propiedades de un objeto).

// Nota especial:
// Dentro de los objetos se pueden incluir métodos.
// Los métodos son funciones asociadas a un objeto.

/*Objetos ==> propiedades y métodos */

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 25
}

console.log(persona);

// Incluir métodos en los objetos

let people = {
    name: 'Anthony',
    lastname: 'Morales',
    age: 22,
    fullname: function () {
        return this.name + ' ' + this.lastname;
    }
}

console.log(people.fullname());

const people2 = {
    name: 'Mary',
    lastname: 'Dalas',
    age: 33,
    saludo: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

console.log(people2.name);
people2.saludo();

// Otra forma de crear un objeto vacío y agregar propiedades posteriormente

const persona1 = new Object();
persona1.nombre = 'Maria';
persona1.apellido = 'Velez';
persona1.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
}

persona1.saludar(); 


//Esta forma permite crear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function() {
        console.log(`Hola desde prototipo, Soy ${this.nombre}`);
        
        
    }

}

const persona2 = Object.create(prototipoPersona);
persona2.nombre = 'carmen';
persona2.saludar();

class Persona {
    constructor(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

        
    }
    saludar(){
        console.log(`Hola desde clases, soy ${this.nombre}`);
    }
}

const persona3 = new Persona('Ana','Rios');
persona3.saludar();

//usando constructores

function Persona1(nombre, edad) {
    this.nombre = nombre; 
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola desde funciones, soy ${this.nombre}`);
    }
}

const persona4 = new Persona1('Luis', 28);
persona4.saludar(); 


//Manipulacion de Datosa propiedades de los objetos

//1, agregar o modificar propiedades

const persona5 = { 
    nombre:'Pedro'

};

persona5.edad = 24;
persona5.nombre = 'Martinez';
console.log(persona5);

//2. Eliminar propiedades

delete persona5.edad;
console.log(persona5);

//3. Iterar sobre las propiedades

for(nombrePropiedad in persona5){
    console.log(nombrePropiedad);
    console.log(persona5[nombrePropiedad]);

}

for(let clave in persona5){
    console.log(`${clave}: ${persona[clave]}`);

}
//Verificar propiedades 
console.log('nombre' in persona5);
console.log(persona5.hasOwnProperty('age'));



//Metodos Utiles para trabajar con Objetos
//Devuvle un array con las claves del objeto
console.log(Object.keys(persona5));

//Object.values devuevle un array con los valores del objeto

console.log(Object.values(persona5));

//Object.entries() devuelve un array de pares claves t valores
console.log(Object.entries(persona5));


//Object.assingn copia las propiedadesde un objeto a otro

const copia = Object.assign({},persona5);
console.log(copia);

//Object.freeze() congela un objeto para evitar modificaciones 

Object.freeze(persona5);

//Object.seat() permite modificar propiedades existentes pero no agregar o eliminar propiedades

Object.seal(persona5);
persona5.direccion = 'Quito';
console.log(persona5);


//Impresion de los valores de las propiedades de un objeto

let personaArray = Object.values(persona5);
console.log(personaArray);

let personaString = JSON.stringify(persona5);
//JSON ES UNA NOTACION, ES UN OBJETO

//Stringify es un convertir a cadena cada propuedad
console.log(personaString);

//Metodo Get en Objetos JS
//Metodos que se usan a manera de buenas practicas que permiten acceder y modificar dichos objetos

let personaGET = {
        nombre: 'Marco',
        apellido: 'Valdiviezo',
        email: 'eavaldiviezo',

        get nombreCompleto () {//No es una propiedad, ahora es un metodo get
            return this.nombre + ''+this.apellido;
            
        }
}

console.log(personaGET.nombreCompleto);

//Metodo Set en Objetos JS
//Set establecer o modificar losvalores de los atributos de los objetos

//validacion
let personaSET = {
         nombre: 'Marco',
        apellido: 'Valdiviezo',
        email: 'eavaldiviezo',
        edad:25,
        idioma: 'es',
        get lang(){
            return this.idioma.toUpperCase();
        },


        get nombreCompleto () {//No es una propiedad, ahora es un metodo get
            return this.nombre + ''+this.idioma;
            
        }
        


}
console.log(personaSET.lang);


let personaSET2 = {
    nombre: 'Marco',
   apellido: 'Valdiviezo',
   email: 'eavaldiviezo',
   edad:25,
   idioma: 'es',
   get lang(){
       return this.idioma.toUpperCase();
   },
   set lang(lang){
    this.idioma = this.lang.toUpperCase();

   },


   get nombreCompleto () {//No es una propiedad, ahora es un metodo get
       return this.nombre + ''+this.idioma;
       
   }
   


}
console.log(personaSET.lang);
console.log(personaSET2.lang);

//Constructores en JS

//Si se desean crear mas objetos del mismo tipo esto NO ES POSIBLE
//Es por ello que se crean los constructores
// Es una funcion especial que permite trabajar con objetos en JS

//Funcion COnstructora de Tipo Persona

function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

}

let padreFC = new PersonaFC('Juan','Sanchez','jsanchez@gmail.com');// La variable ya no es variable, ahora es un metodo que permtie crea un objeto de tipo persona
console.log(padreFC);

let madreFC = new PersonaFC('Emi','Gomez','ejgomez@gmail.com');// La variable ya no es variable, ahora es un metodo que permtie crea un objeto de tipo persona
console.log(madreFC);


padreFC.tel='5464564';
console.log(padreFC);
console.log(madreFC);


//Agregar una metodo a una funcionc constructora de objetos

console.log(padreFC);
console.log(madreFC);

function PersonaFCM(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}


let padreFC = new PersonaFCM('Juan','Sanchez','jsanchez@gmail.com');// La variable ya no es variable, ahora es un metodo que permtie crea un objeto de tipo persona
console.log(padreFC);

madreFC = new PersonaFCM('Emi','Gomez','ejgomez@gmail.com');// La variable ya no es variable, ahora es un metodo que permtie crea un objeto de tipo persona
console.log(madreFC);

//Uso de prototype

PersonaFCM.prototype.tel='0998887838383';
console.log(madreFC);


//uso del call

let personaCall1={
    nombre: 'Marco',
    apellido: 'Salas',
    email: 'eavaldiviezo',
    edad:25,
    idioma: 'es',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personaCall2={ 
    nombre :'Luis',  
apellido : 'Perez'
}


//El metodo que pertenece al objeto personaCall1 se lo asignamos al objeto personaCall2

console.log(personaCall1.nombreCompleto);
console.log(personaCall1.nombreCompleto.call(personaCall2));

//Como pasar parametros a un metodo call

let personaCallP1={
    nombre: 'Marco',
    apellido: 'Mangos',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let personaCallP2={
    nombre: 'Luis',
    apellido: 'Suarez'
}

console.log(personaCallP1.nombreCompleto('Lic', '099999999'));

console.log(personaCallP1.nombreCompleto.call(personaCallP2,'Ing','099999999'));


//Uso del metodo apply


let personaApplyP1={
    nombre: 'Marco',
    apellido: 'Mangos',
    nombreCompleto: function(){
       // return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
       return this.nombre + ' ' + this.apellido;
    }
}

let personaApplyP2={
    nombre: 'Luis',
    apellido: 'Suarez'
}

console.log(personaApplyP1.nombreCompleto());
console.log(personaApplyP1.nombreCompleto.apply(personaApplyP2));

let arreglo = ['Ing','09999999'];

console.log(personaApplyP1.nombreCompleto.apply(personaApplyP2,arreglo));


















