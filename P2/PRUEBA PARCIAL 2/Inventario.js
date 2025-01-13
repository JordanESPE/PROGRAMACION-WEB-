class Producto {
    #nombre;
    #precio;
    #cantidad;
    #categoria;

    constructor(nombre, precio, cantidad, categoria) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#cantidad = cantidad;
        this.#categoria = categoria;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get precio() {
        return this.#precio;
    }

    set precio(precio) {
        this.#precio = precio;
    }

    get cantidad() {
        return this.#cantidad;
    }

    set cantidad(cantidad) {
        this.#cantidad = cantidad;
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(categoria) {
        this.#categoria = categoria;
    }
}

class Inventario {
    #productos;

    constructor() {
        this.#productos = [];
    }

    get productos() {
        return this.#productos;
    }

    set productos(productos) {
        this.#productos = productos;
    }

    // Agrega un producto al inventario
    agregarProducto(producto) {
        this.#productos.push(producto);
    }

    // Lista los productos ordenados por precio
    listarProductos(orden = 'ascendente') {
        let productosOrdenados = [...this.#productos];
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
        console.log(PRODUCTOS DE FORMA ${orden.toUpperCase()});
        console.log("PRODUCTO - PRECIO - CANTIDAD");
        for (let producto of productosOrdenados) {
            console.log(${producto.nombre}: Precio - $${producto.precio}, Cantidad - ${producto.cantidad});
        }
    }

    // Filtra los productos por categoría
    filtrarPorCategoria(categoria) {
        return this.#productos.filter(producto => producto.categoria === categoria);
    }

    // Aplica un descuento a los productos de una categoría
    aplicarDescuento(categoria, porcentaje) {
        if (porcentaje >= 100) {
            console.log("No puede exceder el límite de descuento");
            return;
        }
        console.log(Se ha aplicado el descuento del ${porcentaje}% a la categoria ${categoria});
        this.#productos.forEach(producto => {
            if (producto.categoria === categoria) {
                producto.precio *= (1 - porcentaje / 100);
            }
        });
    }

    // Obtiene el producto más vendido
    get productoMasVendido() {
        return this.#productos.reduce((max, producto) => producto.cantidad < max.cantidad ? producto : max, this.#productos[0]);
    }

    // Imprime un reporte del inventario y las ventas realizadas
    imprimirReporte(ventas) {
        console.log("\nREPORTE AVANZADO");
        this.#productos.forEach(producto => {
            console.log(${producto.nombre}: Precio - $${producto.precio}, Cantidad - ${producto.cantidad});
        });
        console.log("El producto más vendido es: " + this.productoMasVendido.nombre);
        console.log("\nVENTAS REALIZADAS:");
        let gananciasTotales = 0;
        ventas.forEach(venta => {
            const ganancia = venta.producto.precio * venta.cantidad;
            gananciasTotales += ganancia;
            console.log(Producto: ${venta.producto.nombre}, Cantidad: ${venta.cantidad}, Fecha: ${venta.fecha}, Ganancia: $${ganancia.toFixed(2)});
        });
        console.log(\nGANANCIAS TOTALES: $${gananciasTotales.toFixed(2)});
    }
}

class Venta {
    #inventario;
    #ventas;

    constructor(inventario) {
        this.#inventario = inventario;
        this.#ventas = [];
    }

    get ventas() {
        return this.#ventas;
    }

    set ventas(ventas) {
        this.#ventas = ventas;
    }

    // Realiza una venta de un producto
    realizarVenta(nombreProducto, cantidad) {
        const producto = this.#inventario.productos.find(p => p.nombre === nombreProducto);
        if (!producto) {
            console.log("El producto no consta en stock, no existe");
            return;
        }
        if (producto.cantidad >= cantidad) {
            producto.cantidad -= cantidad;
            this.#ventas.push({ producto, cantidad, fecha: new Date() });
            console.log(Se vendió ${cantidad} de ${producto.nombre}.);
        } else {
            console.log(Su pedido excede la cantidad de ${producto.nombre} en stock.);
        }
    }
}

// Creación de productos
let p1 = new Producto("Arroz", 1.00, 200, "Granos");
let p2 = new Producto("Harina", 1.50, 150, "Granos");
let p3 = new Producto("Azúcar", 1.20, 180, "Granos");
let p4 = new Producto("Aceite", 3.00, 100, "Aceites");
let p5 = new Producto("Leche", 0.90, 250, "Lácteos");

// Creación del inventario y agregación de productos
const inventario = new Inventario();
inventario.agregarProducto(p1);
inventario.agregarProducto(p2);
inventario.agregarProducto(p3);
inventario.agregarProducto(p4);
inventario.agregarProducto(p5);

// Creación de la clase Venta y realización de ventas
const venta = new Venta(inventario);
venta.realizarVenta("Arroz", 20);
venta.realizarVenta("Harina", 30);
venta.realizarVenta("Azúcar", 10);
venta.realizarVenta("Aceite", 5);

// Aplicación de descuento y generación de reporte
inventario.aplicarDescuento("Granos", 10);
inventario.imprimirReporte(venta.ventas);

// Listado de productos en orden ascendente y descendente
inventario.listarProductos('ascendente');
inventario.listarProductos('descendente');

// Filtrado de productos por categoría
console.log("\nPRODUCTOS FILTRADOS POR CATEGORIA 'Granos'");
const productosFiltrados = inventario.filtrarPorCategoria('Granos');
productosFiltrados.forEach(producto => {
    console.log(${producto.nombre}: Precio - $${producto.precio}, Cantidad - ${producto.cantidad});
});