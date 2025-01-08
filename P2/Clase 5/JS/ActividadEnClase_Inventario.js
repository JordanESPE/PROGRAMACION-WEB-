/*Ejercicio: Gestión de Inventario con Objetos en JavaScript
Instrucciones
Una tienda necesita administrar su inventario de productos mediante un programa en JavaScript.
Cada producto debe tener las propiedades nombre, precio, y cantidad. La tienda requiere las siguientes funcionalidades:
Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades mencionadas.
Sella el objeto del inventario: Asegúrate de que no puedan agregarse ni eliminarse productos, pero que sea posible modificar las cantidades y precios.

Implementa una función para vender un producto:
La función debe aceptar el nombre del producto y la cantidad a vender.
Si el producto existe y tiene suficiente stock, reduce la cantidad en el inventario y muestra un mensaje confirmando la venta.
Si el producto no existe o no tiene suficiente stock, muestra un mensaje de error.
Implementa una función para aplicar un descuento a todos los productos:
La función debe aceptar un porcentaje de descuento y reducir el precio de todos los productos en base a este porcentaje.
Asegúrate de que los precios no sean negativos.
Usa las funciones creadas:
Vende algunos productos.
Aplica un descuento del 10% a todo el inventario.
Muestra el inventario final utilizando console.log().

Resultados esperados
Al vender productos: Se confirma la venta si hay stock suficiente o se muestra un mensaje de error.
Estado final del inventario: Refleja los cambios en cantidades y precios después de las operaciones */

const inventario = {
    producto1: { nombre: 'Procesador Intel i5', precio: 200, cantidad: 30 },
    producto2: { nombre: 'Memoria RAM 8GB', precio: 50, cantidad: 100 },
    producto3: { nombre: 'Disco Duro 1TB', precio: 60, cantidad: 50 },
    producto4: { nombre: 'Tarjeta Grafica GTX 4090', precio: 300, cantidad: 20 }
};

Object.seal(inventario);//Inventario estatico

function venderProducto(nombreProducto, cantidad) {
    for (let key in inventario) {
        if (inventario[key].nombre === nombreProducto) {
            if (inventario[key].cantidad >= cantidad) {
                inventario[key].cantidad -= cantidad;
                console.log(`Venta exitosa: Cantidad : ${cantidad} ${nombreProducto} , vendido.`);
            } else {
                console.log(`Stock insuficiente de ${nombreProducto}.`);
            }
            return;
        }
    }
    console.log(`Producto "${nombreProducto}" no encontrado en Inventario.`);
}


function aplicarDescuento(porcentaje) {
    for (let key in inventario) {
        let descuento = inventario[key].precio * (porcentaje / 100);//Aplicacion de Descuentos
        let nuevoPrecio = inventario[key].precio - descuento;

       
        if (nuevoPrecio < 0) {
            nuevoPrecio = 0;
        }

        inventario[key].precio = nuevoPrecio;
    }
    console.log(`Descuento del ${porcentaje}% aplicado a todos los productos.`);
}

//Valores quemados para q ue trabajen las funciones en proporcion del stock
venderProducto('Procesador Intel i5', 64); 
venderProducto('Memoria RAM 8GB', 12); 
venderProducto('Dell Inspiron 3505', 43); 

aplicarDescuento(10); 


console.log('Inventario final:', inventario);
