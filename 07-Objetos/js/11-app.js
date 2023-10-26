const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('TV', 500);
console.log(producto3);