

//Sistema de Ventas
//Creacion de Clase Producto
class Producto{
    static contadorProductos = 0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos;// el ++ es para que primero incremente y luego asigne
        this._nombre = nombre;
        this._precio = precio;

}

 get idProducto(){
     return this._idProducto;
 }
 get nombre(){
     return this._nombre;
 }

 set nombre(nombre){
        this._nombre = nombre;
 }

 get precio(){
     return this._precio;
 }

 set precio(precio){
     this._precio = precio;
 }

 toString(){
     return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
 }

}

/*Probando*/

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Vestido', 300);
console.log(producto1.toString());
console.log(producto2.toString());

//Creacion de Clase Orden

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(){
        this._idOrder = ++Orden.contadorOrdenes;
        this._productos=[];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrder;
    }  
    agregarProducto(producto){
        //Verificar si no hemos superado el maximo de productos existentes
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //otra sintaxis
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('No se pueden agregar mas productos a la orden');

    } 

}

calcularTotal(){
    let totalVenta = 0;
    for(let producto of this._productos){
        totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio;
    }
    return totalVenta;
}

mostrarOrden(){
    let productosOrden = '';
    for(let producto of this._productos){
        //productosOrden += producto.toString() + ' ';
        productosOrden += '\n{ ' + producto.toString() + ' }';
    }
    console.log(`Orden: ${this._idOrder} Total: $ ${this.calcularTotal()} Productos: ${productosOrden}`);
}


}


let producto3 = new Producto('laptop', 200);
let producto4 = new Producto('pantalla', 300);

let orden1 = new Orden();
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);

orden1.mostrarOrden();

let orden2 = new Orden();   //Creamos el segundo objeto de tipo Orden   
let producto5 = new Producto('Teclado', 50); 
orden2.mostrarOrden(); 

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);

/* 1. Stock Disminuya

   2. Nueva propiedad en la clase producto que aplique descuento por categoria
   //por ejemplo los productos de la categoria Electronica deben tener un descuento del 10 %, cada categoria debe tener un descuento en especifico, crea 3 categorias. muestra el impuesto y el total al calcular el total de la venta
   
   3.Aplicacion de Impuestos
   //Implementar un metodo calcularImpuesto en la clase orden para que agregue un impuesto
   // del 16 % al total calculado, cada categoria creada debe tener su propio impuesto  

   4. Listar los productos de forma Descendente 

   5. Restriccion adicional:
   //Aseguremos que los precios no pueden ser negativos al establecerlos en la clase Producto mediante un metodo

   haz que al final imprima todo el detalle de la orden con el total, impuesto y productos ordenados por precio descendente y el stock de productos que queda
*/
