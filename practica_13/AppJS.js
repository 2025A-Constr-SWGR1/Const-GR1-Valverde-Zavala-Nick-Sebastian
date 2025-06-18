
//Definición de varaibles con precios en centavos
let productosDisponibles = [{"Producto": 'Manzana', "Precio": 100},
    {"Producto": 'Pera', "Precio": 150},
    {"Producto": 'Naranja', "Precio": 120},
    {"Producto": 'Plátano', "Precio": 80},
]


//Definición de cuanto dinero tendra la máquina
let seguirIngresando = true;
let dineroIngresado = [];
let cantidadDineroIngresado = 0;
let cantidadTotalDinero = 0;
while (seguirIngresando) {
    cantidadDineroIngresado = prompt('Ingresa la cantidad de dinero en centavos:');
    dineroIngresado.push(parseInt(cantidadDineroIngresado));
    console.log('Dinero ingresado:', cantidadDineroIngresado, 'centavos');
    document.body.innerHTML = `<h1>Dinero ingresado: ${cantidadDineroIngresado}  centavos</h1>`;
    seguirIngresando = confirm('¿Deseas ingresar dinero?');
};

//Suma del dinero de la máquina
console.log('Dinero ingresado:', seguirIngresando);

dineroIngresado.forEach((monedas) => {
    cantidadTotalDinero += monedas;
});

console.log('Cantidad total de dinero en la máquina:', cantidadTotalDinero, 'centavos');

//logica de la máquina expendedora
console.log('Productos disponibles:');
productosDisponibles.forEach((producto) => {
    console.log(`${producto.Producto} a ${producto.Precio} centavos\nSi compra le quedarían` + (cantidadTotalDinero - producto.Precio) + ' centavos restantes.' );
});



seguirIngresando = true;
//Definición de la lógica de la máquina expendedora
while (seguirIngresando) {
    seguirIngresando = confirm('¿Deseas comprar un producto?');
    if (seguirIngresando) {
        let productoSeleccionado = prompt('Selecciona un producto Manzana (1), Pera (2), Naranja (3), Plátano (4):');
        productoSeleccionado = seleccionarProducto(productoSeleccionado);
        

        if (productoSeleccionado) {
            if (cantidadTotalDinero >= productoSeleccionado.Precio) {
                cantidadTotalDinero -= productoSeleccionado.Precio;
                console.log(`Has comprado ${productoSeleccionado.Producto} por ${productoSeleccionado.Precio} centavos.`);
                console.log('Dinero restante:', cantidadTotalDinero, 'centavos');
                alert('Producto seleccionado: ' + (productoSeleccionado ? productoSeleccionado.Producto : 'Ninguno') + " Le queda: " + cantidadTotalDinero + ' centavos');
            } else {
                console.log('No tienes suficiente dinero para comprar este producto.');
                // Mostrar el mensaje en el documento HTML
                const mensaje = `No tienes suficiente dinero para comprar este producto. Dinero restante: ${cantidadTotalDinero} centavos.<br>`;
                document.body.innerHTML += mensaje;
                alert('No tienes suficiente dinero para comprar este producto.');
            }
        }
    }else
    {
        // Mostrar mensaje de despedida
        document.body.innerHTML += `<h2>Gracias por usar la máquina expendedora.</h2>`;
        document.body.innerHTML += `<p>Dinero restante: ${cantidadTotalDinero} centavos</p>`;
            console.log('Gracias por usar la máquina expendedora.');
        }
}



console.log('Dinero restante:', cantidadTotalDinero, 'centavos');




function seleccionarProducto(productoSeleccionado = '') {
    if (productoSeleccionado === '1') {
        return productosDisponibles[0];
    } else if (productoSeleccionado === '2') {
        return productosDisponibles[1];
    } else if (productoSeleccionado === '3') {
        return productosDisponibles[2];
    }
    else if (productoSeleccionado === '4') {
        return productosDisponibles[3];
    } else {
        console.log('Producto no válido');
        return null;
    }
};