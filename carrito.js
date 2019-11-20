const productos = ["Celular", "Cartera", "Taza", "Vaso", "Florero"];
let accion = prompt(`Que accion queres realizar en tu carrito de compras? 
(Borrar, Editar o Agregar)`)
let productoEditado
let productoABorrar

accion = accion.toUpperCase()

console.log(productos);

if (accion === "BORRAR") {
    productoABorrar = prompt("Que producto queres borrar?")
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === productoABorrar) {
            productos.splice(i, 1)
        }
    }
}

if (accion === "EDITAR") {
    productoAEditar = prompt("Que producto queres editar?")
    productoEditado = prompt("Por que producto lo vas a reemplazar?")
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === productoAEditar) {
            productos[i] = productoEditado
        }
    }
}

if (accion === "AGREGAR") {
    productoAAgregar = prompt("Que producto queres agregar?")
    for (let i = 0; i < 1; i++) {
    productos.push(productoAAgregar)
    }
}
    
console.log(productos);