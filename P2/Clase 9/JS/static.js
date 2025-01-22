/* INTRODUCCION 
class Producto{
    static contadorProductos = 0;
}
//Modificador denominado Static se utiliza para acceder directamente atraves de la clase
//Los metodos o propiedades estaticas (static) no requiere que se creen una instancia de la clase para ser utilizados

class Calculadora {
    //metodo Static
    static suma(a,b)
    {
        return a+b;
    }
}

//El acceso al metodo estatico directamente de la clase es asi

console.log(Calculadora.suma(5,3));

//No se puede acceder desde una instancia

const calc = new Calculadora();
console.log(calc.suma(5,3)); 
//En conclusion el modificador static en JS es una herramienta clave para definir funciones y propiedades 
//compartidas sin necesidas de crear algun tipo de instancia de una clase
*/
