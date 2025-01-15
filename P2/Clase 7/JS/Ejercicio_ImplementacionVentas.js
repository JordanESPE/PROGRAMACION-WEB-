// Sistema de Ventas
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this.precio = precio;
        this._categoria = categoria;
        this._stock = stock;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio >= 0) {
            this._precio = precio;
        } else {
            console.error("El precio no puede ser negativo.");
        }
    }

    get categoria() {
        return this._categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(cantidad) {
        if (cantidad >= 0) {
            this._stock = cantidad;
        } else {
            console.error("El stock no puede ser negativo.");
        }
    }

    aplicarDescuento() {
        const descuentos = { "Electrónica": 0.1, "Ropa": 0.15, "Hogar": 0.05 };
        const descuento = descuentos[this._categoria] || 0;
        return this._precio * (1 - descuento);
    }

    reducirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
        } else {
            console.log(`Stock insuficiente para el producto ${this._nombre}.`);
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}, categoría: ${this._categoria}, stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto, cantidad) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.stock >= cantidad) {
                for (let i = 0; i < cantidad; i++) {
                    this._productos.push(producto);
                    producto.reducirStock(1);
                }
            } else {
                console.log(`Stock insuficiente para el producto ${producto.nombre}.`);
            }
        } else {
            console.log('No se pueden agregar más productos a la orden, máximo 5 productos.');
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let i = 0; i < this._productos.length; i++) {
            totalVenta += this._productos[i].aplicarDescuento();
        }
        return totalVenta;
    }

    calcularImpuesto() {
        let totalImpuesto = 0;
        const impuestos = { "Electrónica": 0.16, "Ropa": 0.12, "Hogar": 0.08 };
        for (let i = 0; i < this._productos.length; i++) {
            const impuesto = impuestos[this._productos[i].categoria] || 0;
            totalImpuesto += this._productos[i].aplicarDescuento() * impuesto;
        }
        return totalImpuesto;
    }

    mostrarOrden() {
        for (let i = 0; i < this._productos.length; i++) {
            for (let j = i + 1; j < this._productos.length; j++) {
                if (this._productos[i].precio < this._productos[j].precio) {
                    let temp = this._productos[i];
                    this._productos[i] = this._productos[j];
                    this._productos[j] = temp;
                }
            }
        }

        let productosOrden = '';
        for (let i = 0; i < this._productos.length; i++) {
            productosOrden += `\n{ ${this._productos[i].toString()} }`;
        }

        const total = this.calcularTotal();
        const impuesto = this.calcularImpuesto();
        const totalConImpuesto = total + impuesto;

        console.log(`Orden: ${this._idOrden}`);
        console.log(`Productos:${productosOrden}`);
        console.log(`Total: $${parseInt(total)}`);
        console.log(`Impuesto: $${parseInt(impuesto)}`);
        console.log(`Total con Impuesto: $${parseInt(totalConImpuesto)}`);
    }
}

/*
Datos Quemados
*/
const producto1 = new Producto('Laptop', 1000, 'Electrónica', 5);
const producto2 = new Producto('Pantalón', 500, 'Ropa', 10);
const producto3 = new Producto('Mesa', 300, 'Hogar', 3);
const producto4 = new Producto('Monitor', 200, 'Electrónica', 7);
const producto5 = new Producto('Zapatos', 150, 'Ropa', 8);

// Creando 3 órdenes de compra
const orden1 = new Orden();
orden1.agregarProducto(producto2, 4); // 3 Pantalones
orden1.agregarProducto(producto3, 1); // 1 Mesa
orden1.agregarProducto(producto4, 1); // 1 Monitor
orden1.mostrarOrden();

const orden2 = new Orden();
orden2.agregarProducto(producto2, 2); // 2 Pantalones
orden2.agregarProducto(producto4, 2); // 2 Monitores
orden2.mostrarOrden();

const orden3 = new Orden();
orden3.agregarProducto(producto1, 1); // 1 Laptop
orden3.agregarProducto(producto3, 2); // 2 Mesas
orden3.agregarProducto(producto2, 1); // 1 Pantalón
orden3.agregarProducto(producto5, 1); // 1 Zapato
orden3.mostrarOrden();

// Mostrar el stock restante de cada producto
console.log("\nStock restante:");
console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
console.log(producto4.toString());
console.log(producto5.toString());
