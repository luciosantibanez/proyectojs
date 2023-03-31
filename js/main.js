let carritoVisible = false;

if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded", ready)

}else{
    ready();
}

function ready(){

const btnEliminarItem = document.getElementsByClassName("btnEliminar")
for(let i=0; i < btnEliminarItem.length; i++){
    let btn = btnEliminarItem[i];
    btn.addEventListener('click', eliminarItemCarrito)
    }
    //boton sumar
    let btnSumar = document.getElementsByClassName("sumar");
    for(let i=0; i < btnSumar.length; i++){
        let btn = btnSumar[i];
        btn.addEventListener("click", sumarCantidad);
    }

    //boton restar
    let btnRestar = document.getElementsByClassName("restar");
    for(let i=0; i < btnRestar.length; i++){
        let btn = btnRestar[i];
        btn.addEventListener("click", restarCantidad);
    }

    //agregar al carro
    let btnAgregarAlCarrito = document.getElementsByClassName("btnItem");
    for(let i=0; i < btnAgregarAlCarrito.length; i++){
        let btn= btnAgregarAlCarrito[i];
        btn.addEventListener("click", agregarAlCarritoClick);

    }

}


function eliminarItemCarrito(event){
    let btnClick = event.target;
    btnClick.parentElement.remove();
    
    actualizarPrecioTotal();

    ocultarCarrito();

}

function actualizarPrecioTotal(){
    let carritoContenedor = document.getElementsByClassName("carrito")[0];
    let carritoItem = carritoContenedor.getElementsByClassName("carritoItem");
    let total = 0;

    for(let i=0; i < carritoItem.length; i++){
        let item = carritoItem[i];
        let precioElemento = item.getElementsByClassName("carritoItemPrecio")[0];
        let precio = parseFloat(precioElemento.innerText.replace("$","").replace(".",""));
        console.log(precio)
        let cantidadItem = item.getElementsByClassName("carritoItemCantidad")[0];
        let cantidad = cantidadItem.value 
        console.log(cantidad);
        total = total + (precio * cantidad);
   }
   total = Math.round(total*100)/100;
   document.getElementsByClassName("carritoPrecioTotal")[0].innerText = "$"+ total;
}

function ocultarCarrito (){
    let carritoItems = document.getElementsByClassName("carritoItems")[0];
    if(carritoItems.childElementCount==0){
        let carrito = document.getElementsByClassName("carrito")[0];
        carrito.style.marginRigth = "-100%";
        carrito.style.opacity="0";
        carritoVisible = false;


        let items = document.getElementsByClassName("contenedorItems")[0];
        items.style.width="100%";

    }
}

function sumarCantidad(event){
    let btnClick = event.target;
    let selector = btnClick.parentElement;
    let cantidadActual = selector.getElementsByClassName("carritoItemCantidad")[0].value;
    cantidadActual++;
    selector.getElementsByClassName("carritoItemCantidad")[0].value = cantidadActual;

    actualizarPrecioTotal();
}

function restarCantidad(event){
    let btnClick = event.target;
    let selector = btnClick.parentElement;
    let cantidadActual = selector.getElementsByClassName("carritoItemCantidad")[0].value;
    cantidadActual--;

    if(cantidadActual >=1){
        selector.getElementsByClassName("carritoItemCantidad")[0].value = cantidadActual;
        actualizarPrecioTotal();
    }
}

function agregarAlCarritoClick(event){
    let btn = event.target;
    let item = btn.parentElement;
    let titulo = item.getElementsByClassName("tituloItem")[0].innerText;
    console.log(titulo)
    let precio = item.getElementsByClassName("precioItem")[0].innerText;
    let imgSrc = item.getElementsByClassName("imgItem")[0].scr;

    agregarItemAlCarrito(titulo, precio, imgSrc);
}

function agregarItemAlCarrito(titulo,precio,imgSrc){
    let item = document.createElement("div");
    item.classList.add = "items";
    let itemsCarrito = document.getElementsByClassName("carritoItem")[0];

    let nombresItemCarrito = itemsCarrito.getElementsByClassName("carritoItemTitulo");
    for(let i=0; 0 < nombresItemCarrito.length; i++){
        if(nombresItemCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    let itemCarritoContenido = `
    <div class="carritoItem">
        <img src="./img/escritorioClaro.png" alt="" width="80px">
    <div class="carritoItemDetalles">
      <span class="carritoItemTitulo">Escritorio Melamina</span>
        <div class="selectorCantidad">
          <i class="fa-solid fa-minus restar"></i>
          <input type="text" value="1" class="carritoItemCantidad" disabled>
          <i class="fa-solid fa-plus sumar"></i>
        </div>
        <span class="carritoItemPrecio">$26.000</span>
    </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

}

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

