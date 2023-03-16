const productos = [
  {
  nombre: "Producto 1",
  valor: 7,
  mts: 3 * 2,
  madera: "mdf",
  grosor: 0.3
  },
  {
  nombre: "Producto 2",
  valor: 15,
  mts: 4 * 5,
  madera: "mdf",
  grosor: 0.15
  },
  {
  nombre: "Producto 3",
  valor: 12,
  mts: 2 * 4,
  madera: "pino",
  grosor: 0.4
  },
  {
  nombre: "Producto 4",
  valor: 20,
  mts: 5 * 4,
  madera: "cedro",
  grosor: 0.2
  }
  ];
  
  // Obtenemos referencias a los elementos relevantes del DOM
  const plataInput = document.getElementById('plata');
  const mejorProductoTexto = document.getElementById('mejorProductoTexto');
  const productosTabla = document.getElementById('productosTabla');
  const noAlcanza = document.getElementById('noAlcanza');
  const botonCalcular = document.querySelector('button');
  
  // Agregamos un controlador de eventos para el botón de cálculo
  botonCalcular.addEventListener('click', () => {
  let plata = plataInput.value; 


  // Limpiamos la tabla de productos
productosTabla.innerHTML = '';

// Calculamos la mejor opción de compra
let mejorProducto = productos[0];
let mtsMejorProducto = 0;

for (let i = 0; i < productos.length; i++) {
  let cociente = plata / productos[i].valor;
  let mts = cociente * productos[i].mts;
  let cocienteEntero = Math.floor(cociente);
  mts = mts.toFixed(2);

 

// Actualizamos la tabla de productos
if (!productosTabla.querySelector('thead')) {
  let encabezado = document.createElement('thead');
  encabezado.innerHTML = `
    <tr>
      <th>Nombre</th>
      <th>Valor</th>
      <th>Metros cuadrados</th>
      <th>Tipo de madera</th>
      <th>Grosor</th>
    </tr>
  `;
  productosTabla.appendChild(encabezado);
}

let fila = document.createElement('tr');
fila.innerHTML = `
  <td>${productos[i].nombre}</td>
  <td>$${productos[i].valor}</td>
  <td>${productos[i].mts} m<sup>2</sup></td>
  <td>${productos[i].madera}</td>
  <td>${productos[i].grosor}</td>
`;
productosTabla.appendChild(fila);

  // Verificamos si esta opción es la mejor
  if (plata >= productos[i].valor) {
    if (mts > mtsMejorProducto) {
      mejorProducto = productos[i];
      mtsMejorProducto = mts;
    }
  }

}

// Actualizamos el texto que muestra la mejor opción de compra
mejorProductoTexto.innerHTML = `
  La mejor opción de compra es ${mejorProducto.nombre}, que te permitirá cubrir un área de ${mtsMejorProducto} m<sup>2</sup>.
`;
})