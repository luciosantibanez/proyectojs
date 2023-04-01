//letiable que mantiene el estado visible del carrito
let carritoVisible = false;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready();
}

function ready(){
    
    //Agregremos funcionalidad a los botones eliminar del carrito
    let botonesEliminarItem = document.getElementsByClassName("btnEliminar");
    for(let i=0;i<botonesEliminarItem.length; i++){
        let button = botonesEliminarItem[i];
        button.addEventListener("click", eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    let botonesSumarCantidad = document.getElementsByClassName("sumarCantidad");
    for(let i=0;i<botonesSumarCantidad.length; i++){
        let button = botonesSumarCantidad[i];
        button.addEventListener("click",sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    let botonesRestarCantidad = document.getElementsByClassName("restarCantidad");
    for(let i=0; i< botonesRestarCantidad.length; i++){
        let button = botonesRestarCantidad[i];
        button.addEventListener("click",restarCantidad);
    }

    //Agregamos funcionalidad al boton Agregar al carrito
    let botonesAgregarAlCarrito = document.getElementsByClassName("btnItem");
    for(let i=0; i<botonesAgregarAlCarrito.length;i++){
        let button = botonesAgregarAlCarrito[i];
        button.addEventListener("click", agregarAlCarritoClick);
    }

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName("btnPagar")[0].addEventListener("click", pagarClick)
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClick(){
    alert("Gracias por la compra");
    //Elimino todos los elmentos del carrito
    let carritoItems = document.getElementsByClassName("carritoItems")[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}
//Funciòn que controla el boton clickeado de agregar al carrito
function agregarAlCarritoClick(event){
    let button = event.target;
    let item = button.parentElement;
    let titulo = item.getElementsByClassName("tituloItem")[0].innerText;
    let precio = item.getElementsByClassName("precioItem")[0].innerText;
    let imagenSrc = item.getElementsByClassName("imgItem")[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}

//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    let carrito = document.getElementsByClassName("carrito")[0];
    carrito.style.marginRight = "0";
    carrito.style.opacity = "1";

    let items =document.getElementsByClassName("contenedorItems")[0];
    // items.style.width = "60%";
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    let item = document.createElement("div");
    item.classList.add = ("item");
    let itemsCarrito = document.getElementsByClassName("carritoItems")[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    let nombresItemsCarrito = itemsCarrito.getElementsByClassName("carritoItemTitulo");
    for(let i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    let itemCarritoContenido = `
        <div class="carritoItem">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carritoItemDetalles">
                <span class="carritoItemTitulo">${titulo}</span>
                <div class="selectorCantidad">
                    <i class="fa-solid fa-minus restarCantidad"></i>
                    <input type="text" value="1" class="carritoItemCantidad" disabled>
                    <i class="fa-solid fa-plus sumarCantidad"></i>
                </div>
                <span class="carritoItemPrecio">${precio}</span>
            </div>
            <button class="btnEliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //Agregamos la funcionalidad eliminar al nuevo item
     item.getElementsByClassName("btnEliminar")[0].addEventListener("click", eliminarItemCarrito);

    //Agregmos al funcionalidad restar cantidad del nuevo item
    let botonRestarCantidad = item.getElementsByClassName("restarCantidad")[0];
    botonRestarCantidad.addEventListener("click",restarCantidad);

    //Agregamos la funcionalidad sumar cantidad del nuevo item
    let botonSumarCantidad = item.getElementsByClassName("sumarCantidad")[0];
    botonSumarCantidad.addEventListener("click",sumarCantidad);

    //Actualizamos total
    actualizarTotalCarrito();
}
//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event){
    let buttonClick = event.target;
    let selector = buttonClick.parentElement;
    console.log(selector.getElementsByClassName("carritoItemCantidad")[0].value);
    let cantidadActual = selector.getElementsByClassName("carritoItemCantidad")[0].value;
    cantidadActual++;
    selector.getElementsByClassName("carritoItemCantidad")[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event){
    let buttonClick = event.target;
    let selector = buttonClick.parentElement;
    console.log(selector.getElementsByClassName("carritoItemCantidad")[0].value);
    let cantidadActual = selector.getElementsByClassName("carritoItemCantidad")[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName("carritoItemCantidad")[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    let buttonClick = event.target;
    buttonClick.parentElement.parentElement.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    let carritoItems = document.getElementsByClassName("carritoItems")[0];
    if(carritoItems.childElementCount==0){
        let carrito = document.getElementsByClassName("carrito")[0];
        carrito.style.marginRight = "-100%";
        carrito.style.opacity = "0";
        carritoVisible = false;
    
        let items =document.getElementsByClassName("contenedorItems")[0];
        items.style.width = "100%";
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    let carritoContenedor = document.getElementsByClassName("carrito")[0];
    let carritoItems = carritoContenedor.getElementsByClassName("carritoItem");
    let total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(let i=0; i< carritoItems.length;i++){
        let item = carritoItems[i];
        let precioElemento = item.getElementsByClassName("carritoItemPrecio")[0];
        //quitamos el simobolo peso y el punto de milesimos.
        let precio = parseFloat(precioElemento.innerText.replace("$","").replace(".",""));
        let cantidadItem = item.getElementsByClassName("carritoItemCantidad")[0];
        console.log(precio);
        let cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName("carritoPrecioTotal")[0].innerText = "$"+total.toLocaleString("es") + ",00";

}


    const tbody = document.querySelector('#table tbody');

fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then(response => response.json())
  .then(data => {
    data.forEach(obj => {
      const row = document.createElement('tr');
      const currency = document.createElement('td');
      const buy = document.createElement('td');
      const sell = document.createElement('td');
      currency.textContent = obj.casa.nombre;
      buy.textContent = obj.casa.compra;
      sell.textContent = obj.casa.venta;
      row.appendChild(currency);
      row.appendChild(buy);
      row.appendChild(sell);
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error(error));

