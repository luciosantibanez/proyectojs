let productos = [
  {
    nombre: "Producto 1",
    valor: 7,
    mts: 3 * 2,
    madera: "mdf",
    grosor: .30

  },
  {
    nombre: "Producto 2",
    valor: 15,
    mts: 4 * 5,
    madera: "mdf",
    grosor: .15
  },
  {
    nombre: "Producto 3",
    valor: 35,
    mts: 2 * 6,
    madera: "pino",
    grosor: .30
  }
];

alert("Introduce la cantidad de dinero que posees, y te dire cual producto te conviene por la cantidad de m2");

let plata = 0;
do {
  plata = prompt("$");
  document.write("Posees $ " + plata);
} while (plata == "" || plata == null);

let mejorProducto = productos[0];
let mtsMejorProducto = 0;

for (let i = 0; i < productos.length; i++) {
  let cociente = plata / productos[i].valor;
  let mts = cociente * productos[i].mts;
  cociente = Math.floor(cociente);
  mts = mts.toFixed(2);

  alert(`El valor del ${productos[i].nombre} es $${productos[i].valor} y tiene ${productos[i].mts} m2`);
  console.log(`El valor del ${productos[i].nombre} es $${productos[i].valor} y tiene ${productos[i].mts} m2`);

  if (plata >= productos[i].valor) {
    if (mts > mtsMejorProducto) {
      mejorProducto = productos[i];
      mtsMejorProducto = mts;
    }
  }
  
  if (plata >= productos[i].valor) {
    if (mts > mtsMejorProducto || i == 0) {
      mejorProducto = productos[i];
      mtsMejorProducto = mts;
    }
  }

  if (cociente > 0) {
    alert(`Puedes comprar ${cociente} unidades del ${productos[i].nombre}, da un total de ${mts} m2`);
    console.log(`Puedes comprar ${cociente} unidades del ${productos[i].nombre}, da un total de ${mts} m2`);
    if (plata % productos[i].valor > 0) {
      alert(`y tu vuelto es: $${plata % productos[i].valor}`);
      console.log(`y tu vuelto es: $${plata % productos[i].valor}`);
    }
  } else {
    alert(`No te alcanza el ${productos[i].nombre}`);
    console.log(`No te alcanza el ${productos[i].nombre}`);
  }
}

alert(`Tu mejor opción es el ${mejorProducto.nombre} con ${mtsMejorProducto} m2`);
document.write(` Tu mejor opción es el ${mejorProducto.nombre} con ${mtsMejorProducto} m2`);
console.log(`Tu mejor opción es el ${mejorProducto.nombre} con ${mtsMejorProducto} m2`);


//filtrado por grosor del material
let productosFiltrados = productos.filter(function(producto) {
  return producto.grosor >= 0.3;
  
});
console.log(productosFiltrados)

let productosFiltrados2 = productos.filter(function(producto) {
  return producto.valor <= 15;

});
console.log(productosFiltrados2)




