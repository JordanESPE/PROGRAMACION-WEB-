//Jordan Guaman

const inventario = {
    producto: { nombre: '', precio:'', categoria: '', cantidad: '' },
    producto: { nombre: '', precio: '', cantidad: '', categoria: ' ' },
    producto: { nombre: '', precio: '', cantidad: '', categoria: ' ' },
    producto: { nombre: '', precio: '', cantidad: '', categoria: '' },
    producto: { nombre: '', precio: '', cantidad: '', categoria: '' },
};


class Inventario {
    constructor() {
        this.inventario = {};
    }

    agregarProducto(producto) {
        this.inventario[producto.nombre] = producto.nombre;
        this.inventario[producto.nombre].cantidad = producto.cantidad;
        this.inventario[producto.nombre].precio = producto.precio;
        this.inventario[producto.nombre].categoria = producto.categoria;
    }



    listarProductosAscendente_Descendente() {
        
        let productos = Object.values(this.inventario);
        let productosOrdenadosAscendente = [];
        let productosOrdenadosDescendente = [];

        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            let j = 0;

            while (j < productosOrdenadosAscendente.length && productosOrdenadosAscendente[j].precio < producto.precio) {
                j++;
            }

            productosOrdenadosAscendente.splice(j, 0, producto);
        }

        productosOrdenadosDescendente = productosOrdenadosAscendente.slice().reverse();

        console.log('Productos ordenados por precio ascendente:', productosOrdenadosAscendente);
        console.log('Productos ordenados por precio descendente:', productosOrdenadosDescendente);
    }

    filtrarProductos_Categoria(){
        let productos = Object.values(this.inventario);
        let categoria = 'Tarjetas Graficas';
        let productosFiltrados = productos.filter(producto => producto.categoria === categoria);
        console.log(`Productos de la categoria ${categoria}:`, productosFiltrados);
    }
}

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
    }

  realizarVentar(nombreProducto, cantidad) {
    for (let key in this.inventario) {
        if (this.inventario[key].nombre === nombreProducto) {
            if (this.inventario[key].cantidad >= cantidad) {
                this.inventario[key].cantidad -= cantidad;
                console.log(`Venta exitosa: Cantidad : ${cantidad} ${nombreProducto} , vendido.`);
            } else {
                console.log(`Stock insuficiente de ${nombreProducto}.`);
            }
            return;
        }
    }
    console.log(`Producto "${nombreProducto}" no encontrado en Inventario.`);
  }
}

class Descuento {
    constructor(inventario) {
        this.inventario = inventario;
    }

    aplicarDescuento(porcentaje, categoria) {
        for (let key in this.inventario) {
            if (this.inventario[key].categoria === categoria) {
                let descuento = this.inventario[key].precio * (porcentaje / 100);
                let nuevoPrecio = this.inventario[key].precio - descuento;

                if (nuevoPrecio < 0) {
                    nuevoPrecio = 0;
                }

                this.inventario[key].precio = nuevoPrecio;
            }
        }
        console.log(`Descuento del ${porcentaje}% aplicado a todos los productos de la categoria ${categoria}.`);
    }
}



class Reporte {
    reporte(){
        let ventas = [];
        let ingresos = 0;
        let productosVendidos = {};

        for (let key in this.inventario) {
            ingresos += this.inventario[key].precio * (this.inventario[key].cantidad);
        }

        ventas.push({
            fecha: new Date(),
            producto: 'Procesador Intel i9',
            cantidad: 5,
        });

        ventas.push({
            fecha: new Date(),
            producto: 'Memoria RAM 8GB',
            cantidad: 10,
        });

        ventas.push({
            fecha: new Date(),
            producto: 'Disco Duro 1TB',
            cantidad: 2,
        });

        ventas.push({
            fecha: new Date(),
            producto: 'Tarjeta Grafica GTX 4090',
            cantidad: 3,
        });

        ventas.push({
            fecha: new Date(),
            producto: 'Mouse Inalambrico PTX',
            cantidad: 1,
        });

        ventas.forEach(venta => {
            if (productosVendidos[venta.producto]) {
                productosVendidos[venta.producto] += venta.cantidad;
            } else {
                productosVendidos[venta.producto] = venta.cantidad;
            }
        });

        let productoMasVendido = Object.keys(productosVendidos).reduce((a, b) => productosVendidos[a] > productosVendidos[b] ? a : b);
        console.log('Ingresos Generados:', ingresos);
        console.log('Producto mas vendido:', productoMasVendido);
    }
}


const inventario = new Inventario();
inventario.agregarProducto({ nombre: 'Procesador Intel i9', precio: 500, cantidad: 10, categoria: 'Procesadores' });
inventario.agregarProducto({ nombre: 'Memoria RAM 8GB', precio: 100, cantidad: 20, categoria: 'Memorias RAM' });
inventario.agregarProducto({ nombre: 'Disco Duro 1TB', precio: 80, cantidad: 15, categoria: 'Discos Duros' });
inventario.agregarProducto({ nombre: 'Tarjeta Grafica GTX 4090', precio: 700, cantidad: 5, categoria: 'Tarjetas Graficas' });

const venta = new Venta(inventario.inventario);
venta.realizarVenta('Procesador Intel i9', 15);
venta.realizarVenta('Memoria RAM 8GB', 5);
venta.realizarVenta('Disco Duro 1TB', 2);
venta.realizarVenta('Tarjeta Grafica GTX 4090', 1);

const descuento = new Descuento(inventario.inventario);
descuento.aplicarDescuento(10, 'Procesadores');
descuento.aplicarDescuento(20, 'Memorias RAM');
descuento.aplicarDescuento(5, 'Discos Duros');
descuento.aplicarDescuento(15, 'Tarjetas Graficas');    

const reporte = new Reporte(inventario.inventario);
reporte.reporte();

inventario.listarProductosAscendente_Descendente();
inventario.filtrarProductos_Categoria();





