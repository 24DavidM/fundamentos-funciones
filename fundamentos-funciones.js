// VARIABLES
var cantidadComprasMes = 2000; 
let disponibleEnAmazon = true;
const precioActual = 17.55;

console.log(`Compras el mes pasado: ${cantidadComprasMes} | Disponible en Amazon: ${disponibleEnAmazon} | Precio actual: $${precioActual}`)


// STRINGS
let nombreProducto = "Logitech Altavoces USB S150 con sonido digital";
let tienda = "Logitech";
let estilo = "Altavoces";

console.log(`El producto: ${nombreProducto.toUpperCase()} | Tienda: ${tienda} | Estilo: ${estilo}`);


// NUMBERS
let precioOriginal = 19.99;
let descuentoPorcentaje = 15;
let envioAEcuador = 11.41;

console.log(`Precio original: $${precioOriginal}, Descuento: ${descuentoPorcentaje}%, Costo de envío a Ecuador: $${envioAEcuador}`);


// OBJETO PRODUCTO

let producto = {
  marca: "Logitech",
  potenciaSalidaMax: "25 Vatios",
  conectividad: "con cable",
  salidaAudio: "Estéreo",
  voltajeEntrada: "5 Voltios"
};

console.log("Sobre Articulo")
console.log(producto)
