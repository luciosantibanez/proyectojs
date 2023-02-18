
let valorProducto1 = 7
let valorProducto2 = 15
let valorProducto3 = 35

let mtsProducto1 = 3 * 2
let mtsProducto2 = 4 * 5
let mtsProducto3 = 2 * 6

alert ("El valor del producto 1 es $" + valorProducto1 + " y tiene " + mtsProducto1 + " m2")

alert ("El valor del producto 2 es $" + valorProducto2 + " y tiene " + mtsProducto2 + " m2")

alert ("El valor del producto 3 es $" + valorProducto3 + " y tiene " + mtsProducto3 + " m2")

alert("Introduce la cantidad de dinero que posees, y te dire cual producto te conviene por la cantidad de m2")

do{
  plata = prompt("$")
  document.write("Posees $" + plata )

  let cociente1 = plata/valorProducto1
  let mt1 = cociente1 * mtsProducto1
  
  let cociente2 = plata/valorProducto2
  let mt2 = cociente2 * mtsProducto2
  
  let cociente3 = plata/valorProducto3
  let mt3 = cociente3 * mtsProducto3
  
  cociente1 = cociente1.toFixed(0)
  cociente2 = cociente2.toFixed(0)
  cociente3 = cociente3.toFixed(0)

    mt1 = mt1.toFixed(2)
    mt2 = mt2.toFixed(2)
    mt3 = mt3.toFixed(2)

function cuentaProducto1(){
  
  if ( plata > valorProducto1 ){
    alert("Puedes comprar " +  cociente1 + " unidades del producto 1, da un total de " + mt1 + " m2");
    console.log("Puedes comprar " +  cociente1 + " unidades del producto 1, da un total de " + mt1 + " m2");
    
    alert(" y tu vuelto es: $" + plata % valorProducto1);
    console.log(" y tu vuelto es: $" + plata % valorProducto1);
    
    }
    else if (plata == valorProducto1 ){ 
    alert("Solo te alcanza para 1 producto 1");
    console.log("Solo te alcanza para 1 producto 1");
    }

    else {
    alert("No te alcanza el producto 1");
    console.log("No te alcanza el producto 1");
    }
  
}
cuentaProducto1()

function cuentaProducto2(){
 
  if ( plata > valorProducto2 ){
  alert("Puedes comprar " +  cociente2 + " unidades del producto 2, da un total de " + mt2 + " m2");
  console.log("Puedes comprar " +  cociente2 + " unidades del producto 2, da un total de " + mt2 + " m2");

  alert(" y tu vuelto es: $" + plata % valorProducto2);
  console.log(" y tu vuelto es: $" + plata % valorProducto2);
  
  }
  else if (plata == valorProducto2 ){ 
  alert("Solo te alcanza para 1 producto 2");
  console.log("Solo te alcanza para 1 producto 2");
  }

  else {
  alert("No te alcanza el producto 2");
  console.log("No te alcanza el producto 2");
  }

}
cuentaProducto2()

function cuentaProducto3(){
 
  if ( plata > valorProducto3 ){
  alert("Puedes comprar " +  cociente3 + " unidades del producto 3, da un total de " + mt3 + " m2");
  console.log("Puedes comprar " +  cociente3 + " unidades del producto 3, da un total de " + mt3 + " m2");

  alert(" y tu vuelto es: $" + plata % valorProducto3);
  console.log(" y tu vuelto es: $" + plata % valorProducto3);
  
  }
  else if (plata == valorProducto3 ){ 
  alert("Solo te alcanza para 1 producto 3");
  console.log("Solo te alcanza para 1 producto 3");
  }

  else {
  alert("No te alcanza el producto 3");
  console.log("No te alcanza el producto 3");
  }

}
cuentaProducto3()

if(plata>=valorProducto1){
  if( mt1 > mt2 || plata<valorProducto2){
    alert("Tu mejor opcion es el Producto 1 con " + mt1 + "m2")
    document.write("Tu mejor opcion es el Producto 1 con " + mt1 + "m2")
    console.log("Tu mejor opcion es el Producto 1 con " + mt1 + "m2")
  }

  else if( plata>=valorProducto2){
    alert("Tu mejor opcion es el Producto 2 con " + mt2 + "m2")
    document.write("Tu mejor opcion es el Producto 2 con " + mt2 + "m2")
    console.log("Tu mejor opcion es el Producto 2 con " + mt2 + "m2")

  }
  else if(mt3 > mt1 && mt3 > mt2){
    alert("Tu mejor opcion es el Producto 3 con " + mt3 + "m2")
    document.write("Tu mejor opcion es el Producto 3 con " + mt3 + "m2")
    console.log("Tu mejor opcion es el Producto 3 con " + mt3 + "m2")
  }

  else{
    alert("No tienes dinero")
  }
}

}while(plata >0)



