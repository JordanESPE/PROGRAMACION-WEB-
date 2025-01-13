class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    listarProductos(orden = 'ascendente') {
        let productosOrdenados = [...this.productos];
        for (let i = 0; i < productosOrdenados.length - 1; i++) {
            for (let j = 0; j < productosOrdenados.length - 1 - i; j++) {
                if ((orden === 'ascendente' && productosOrdenados[j].precio > productosOrdenados[j + 1].precio) ||
                    (orden === 'descendente' && productosOrdenados[j].precio < productosOrdenados[j + 1].precio)) {
                    let temp = productosOrdenados[j];
                    productosOrdenados[j] = productosOrdenados[j + 1];
                    productosOrdenados[j + 1] = temp;
                }
            }
        }
        console.log(`PRODUCTOS DE FORMA ${orden.toUpperCase()}`);
        console.log("PRODUCTO - PRECIO - CANTIDAD");
        for (let i = 0; i < productosOrdenados.length; i++) {
            console.log(`${productosOrdenados[i].nombre}: Precio - $${productosOrdenados[i].precio}, Cantidad - ${productosOrdenados[i].cantidad}`);
        }
    }

    filtrarPorCategoria(categoria) {
        const productosFiltrados = [];
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].categoria === categoria) {
                productosFiltrados.push(this.productos[i]);
            }
        }
        return productosFiltrados;
    }

    aplicarDescuento(categoria, porcentaje) {
        if (porcentaje >= 100) {
            console.log("No puede exceder el límite de descuento");
            return;
        }
        console.log("Se ha aplicado el descuento a la categoria " + categoria);
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].categoria === categoria) {
                this.productos[i].precio *= (1 - porcentaje / 100);
            }
        }
    }

    get productoMasVendido() {
        let max = this.productos[0];
        for (let i = 1; i < this.productos.length; i++) {
            if (this.productos[i].cantidad > max.cantidad) {
                max = this.productos[i];
            }
        }
        return max;
    }

    imprimirReporte(ventas) {
        console.log();
        console.log("REPORTE AVANZADO");
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${this.productos[i].nombre}: Precio - $${this.productos[i].precio}, Cantidad - ${this.productos[i].cantidad}`);
        }
        console.log("El producto más vendido es: " + this.productoMasVendido.nombre);
        console.log();
        console.log("VENTAS REALIZADAS:");
        let gananciasTotales = 0;
        for (let i = 0; i < ventas.length; i++) {
            const ganancia = ventas[i].producto.precio * ventas[i].cantidad;
            gananciasTotales += ganancia;
            console.log(`Producto: ${ventas[i].producto.nombre}, Cantidad: ${ventas[i].cantidad}, Fecha: ${ventas[i].fecha}, Ganancia: $${ganancia.toFixed(2)}`);
        }
        console.log();
        console.log(`GANANCIAS TOTALES: $${gananciasTotales.toFixed(2)}`);
    }
}

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventas = [];
    }

    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos.find(p => p.nombre === nombreProducto);
        if (!producto) {
            console.log("El producto no consta en stock, no existe");
            return;
        }
        if (producto.cantidad >= cantidad) {
            producto.cantidad -= cantidad;
            this.ventas.push({ producto, cantidad, fecha: new Date() });
            console.log(`Se vendió ${cantidad} de ${producto.nombre}.`);
        } else {
            console.log(`Su pedido excede la cantidad de ${producto.nombre} en stock.`);
        }
    }
}

class Descuento {
    constructor(productos) {
        this.productos = productos;
    }

    aplicarDescuento(porcentaje, categoria) {
        if (porcentaje >= 100) {
            console.log("No puede exceder el límite de descuento");
            return;
        }
        console.log("Se ha aplicado el descuento a la categoria " + categoria);
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].categoria === categoria) {
                this.productos[i].precio *= (1 - porcentaje / 100);
            }
        }
    }
}

class Reporte {
    constructor(productos) {
        this.productos = productos;
    }

    reporte() {
        console.log("REPORTE DE INVENTARIO");
        for (let i = 0; i < this.productos.length; i++) {
            console.log(`${this.productos[i].nombre}: Precio - $${this.productos[i].precio}, Cantidad - ${this.productos[i].cantidad}`);
        }
    }
}

// Creación de productos
let p1 = new Producto("Procesador", 200.00, 10, "Procesadores");
let p2 = new Producto("Memoria RAM", 80.00, 20, "Memorias RAM");
let p3 = new Producto("Disco Duro", 50.00, 15, "Discos Duros");
let p4 = new Producto("Tarjeta Grafica", 300.00, 5, "Tarjetas Graficas");

// Creación del inventario y agregación de productos
const inventario = new Inventario();
inventario.agregarProducto(p1);
inventario.agregarProducto(p2);
inventario.agregarProducto(p3);
inventario.agregarProducto(p4);

// Aplicación de descuentos
const descuento = new Descuento(inventario.productos);
descuento.aplicarDescuento(10, 'Procesadores');
descuento.aplicarDescuento(20, 'Memorias RAM');
descuento.aplicarDescuento(5, 'Discos Duros');
descuento.aplicarDescuento(15, 'Tarjetas Graficas');

// Generación de reporte
const reporte = new Reporte(inventario.productos);
reporte.reporte();

// Listado de productos en orden ascendente y descendente
inventario.listarProductos('ascendente');
inventario.listarProductos('descendente');

// Filtrado de productos por categoría
console.log("PRODUCTOS FILTRADOS POR CATEGORIA 'Memorias RAM'");
const productosFiltrados = inventario.filtrarPorCategoria('Memorias RAM');
for (let i = 0; i < productosFiltrados.length; i++) {
    console.log(`${productosFiltrados[i].nombre}: Precio - $${productosFiltrados[i].precio}, Cantidad - ${productosFiltrados[i].cantidad}`);
}
