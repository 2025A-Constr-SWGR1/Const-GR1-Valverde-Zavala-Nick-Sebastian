# Práctica 134 - Clean Code en JavaScript

**Autor:** Nick Valverde

## Descripción del Proyecto

Este proyecto consiste en simular el funcionamiento de una máquina expendedora aplicando los principios de Clean Code en JavaScript. El objetivo es crear una operación que reciba dinero (como un array de monedas válidas) y un número que indique la selección del producto. 
El programa debe retornar el nombre del producto y un array con el dinero de vuelta utilizando el menor número de monedas posible. Si el dinero es insuficiente o el producto no existe, se mostrará un mensaje y se devolverán todas las monedas. Si no hay cambio, el array será vacío. Solo se trabajará con monedas de 5, 10, 50, 100 y 200 céntimos, y se validará que las monedas ingresadas sean soportadas. El enfoque principal es mejorar la legibilidad, mantenibilidad y calidad del código siguiendo buenas prácticas y patrones recomendados.

## Conceptos de Clean Code Utilizados

A continuación se listan algunos conceptos de Clean Code que se aplicaron en este proyecto, junto con algún ejemplo.

### 1. Nombres Significativos

```javascript
// Malo
let d;

// Bueno
let diasTranscurridos;
```

### 2. Funciones Pequeñas

```javascript
// Malo
function procesarDatos(datos) {
    // muchas operaciones aquí
}

// Bueno
function validarDatos(datos) { /* ... */ }
function transformarDatos(datos) { /* ... */ }
function guardarDatos(datos) { /* ... */ }
```

### 3. Evitar Comentarios Innecesarios

```javascript
// Malo
// Incrementa en 1 el contador
contador = contador + 1;

// Bueno
contador++;
```

### 4. Utiliza argumentos predefinidos en vez de utilizar condicionales 

---

### Aplicación en AppJS.js

En el archivo `practica_13/AppJS.js` se aplican los siguientes conceptos:

- **Nombres significativos:** Variables y funciones como `productosDisponibles`, `dineroIngresado`, `cantidadTotalDinero` y `seleccionarProducto` reflejan claramente su propósito.
- **Funciones con una sola responsabilidad:** La función `seleccionarProducto` solo se encarga de devolver el producto seleccionado.
- **Uso de estructuras de datos:** Se utiliza un arreglo de objetos para los productos y precios, facilitando la gestión y escalabilidad.
- **Evitar comentarios innecesarios:** Los comentarios explican bloques de lógica solo cuando es necesario, priorizando la claridad del código.
- **Código legible y estructurado:** El flujo del programa es claro, con bloques bien definidos para ingreso de dinero, selección y compra de productos.

Estos conceptos ayudan a mantener el código limpio, legible y fácil de mantener.

