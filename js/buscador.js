document.querySelector(".boton__dolar").addEventListener("click", devolverDatos)
// INICIO AJAX
function devolverDatos(e){
    e.preventDefault();
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','discos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //JSON.parse transforma el texto a json
            //La variable precios contiene el json pasado a json y no texto
            let precios = JSON.parse(this.responseText);
            //console.log(precios)
            let respuesta = document.querySelector(".discos");
            //Se genera el res.innerhtml vacío para que comience con un valor inicial
            respuesta.innerHTML = '';
            for(let item of precios){
                respuesta.innerHTML += `
                <div class="card" style="width: 18rem;">
                <img loading="lazy" src="${item.portada}" class="card-img-top" alt="Portada Álbum 'Queen'">
                    <div class="card-body">
                        <h5 class="card-title">${item.titulo}</h5>
                        <p class="card-text">Publicación: ${item.publicacion} || Sello: ${item.sello}</p>
                        <p class="card-price">${item.precioDolar}</p>
                        <a href="${item.spotify}" target="_blank" class="btn btn-primary">Escuchar Álbum</a>
                    </div>
                </div>
                
                ` //Error, el boton de compra no funciona :(
            }
        }
    }
}
// FIN AJAX
// *** CARRITO DE COMPRAS ***
let addToShoppingCartButtons = document.querySelectorAll(".addCarrito");
addToShoppingCartButtons.forEach(function(addToCartButton){
    addToCartButton.addEventListener('click', addToCartClicked);
});
//Botón de compra
let buttonBuy = document.querySelector('.comprarButton')
buttonBuy.addEventListener('click', compraButtonClicked)

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
//Siempre que haya un eventListener el callback envía un evento
//Esta función añade el disco al carrito al clickear
function addToCartClicked(e){
    let button = e.target
    let item = button.closest('.card');
    
    let itemTitle = item.querySelector('.card-title').textContent;
    let itemPrice = item.querySelector('.card-price').textContent;
    let itemImage = item.querySelector('.card-img-top').src;
    addItemToShoppingCart(itemTitle,itemPrice,itemImage);
}

function addItemToShoppingCart(itemTitle,itemPrice,itemImage){
    //Evita que se repitan las compras y que solamente aumente la cantidad
    let elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++){
        if(elementsTitle[i].innerText == itemTitle){
           let elementQuantity = elementsTitle[i]
           .parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
           
           elementQuantity.value++;
           $('.toast').toast('show'); //Alert visible de Bootsrap
           updateShoppingCartTotal(); //Hace que aumente el precio total, si no se agregara esto no cambiaría
           return;
           //El return hace que vuelva a comenzar el código, si no estuviera el return aumentaría la cantidad del producto 
           //y TAMBIÉN se mostraría 2 veces
        };
    }

    //Visualiza en la página las compras dentro del carrito
    let shoppingCartRow = document.createElement('div');
    let shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src='${itemImage}' class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
    //Eliminar compras del carrito
    shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
    //Modifica el valor total al eliminar una compra del carrito
    shoppingCartRow.querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged)
    updateShoppingCartTotal()
}
//Añade el precio final de los productos
function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    let shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    

    shoppingCartItems.forEach(function(shoppingCartItem){
        //Toma todo el elemento
        let shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        //Toma solo el elemento seleccionado (precio), se pasa de string a number y se le quita el "$"
        let shoppingCartItemPrice = Number(
            shoppingCartItemPriceElement.textContent.replace('$', '')
        );
        //Toma todo el elemento de la etiqueta
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
        //Toma solamente el elemento deseado (valor)
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$${total}`;//.toFixed(2) para compras que incluyan centavos
}
//Elimina las compras del carrito
function removeShoppingCartItem(e){ //Al clickear, sucederá el siguiente evento:
    let buttonClicked = e.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}
//Modifica la cantidad de unidades
function quantityChanged(e){//Al clickear, modificará la cantidad
   let input = e.target
   if(input.value <= 0){
       input.value = 1;
   }
   updateShoppingCartTotal(); //Y se modifica la cantidad.
}
//Vacía el carrito al finalizar la compra
function compraButtonClicked(){//Es decir, el usuario al clickear sucederá esto:
    shoppingCartItemsContainer.innerHTML = ''; //Vacío
    updateShoppingCartTotal();//También vacía el precio total
}

// Aparecer el carrito de compra
//$("#carritoDeCompras").hide() //ERROR

//$("#showCarrito").click(function(){
//    $("#carritoDeCompras").show();
//});
//NOTAS:
/*La función updateShoppingCartTotal() hace que se modifique el valor, ya que no es un valor en sí, sino que se actualiza constantemente.
Y al hacer que esté en otras funciones, toma en cuenta los eventos y modificaciones de dicha función a la cual se llamó
*/

// *** FIN CARRITO DE COMPRAS ***








/*
function ajax(){
    const http = new XMLHttpRequest();
    const url = "../discos.json";

    http.onreadystatechange = function(){
        //Esta condicional (readyState y status) son parámetros para controlar que se realice el llamado correctamente
        //En caso de que se ejecute el llamado de manera efectiva, se ejecutará la condicional
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.getElementsByClassName("card-body").innerHTML = this.responseText;//responseText devuelve valor en texto
        }
    }
    http.open("GET", url);
    http.send();
}
document.getElementById("boton__dolar").addEventListener("click", function(){
    ajax();
}) */



/* Sector HTML
<div class="buscador">
        <form class="form-inline my-2 my-lg-0" id="formulario">
            <input class="form-control mr-sm-2" type="text" placeholder="Escriba un Álbum" id="buscador__discos">
            <button class="btn btn-primary" id="boton_carritoCompras"><a href="#"><i class="fas fa-shopping-cart"></i></a></button>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="boton__busqueda">Buscar</button>                             
        </form>
</div>
*/

/* Sector JS    
const resultado = document.getElementsByClassName("discos");
const formulario = document.getElementById("formulario");


window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}
function validarFormulario(e){
    e.preventDefault();
    const buscador = document.querySelector("#buscador__discos").value;

    if (buscador === '') {
        mostrarAlerta("Completa el campo para continuar");
        return;
    }
    
    buscarDiscos(buscador);
}

function mostrarAlerta(mensaje){
    //Esta variable + la condicional evita que se muestre el mensaje de error varias veces en pantalla
    const existeAlerta = document.querySelector('.bg-red-100');
    if(!existeAlerta){
        const alerta = document.createElement('p');
        //Lo siguiente son estilos agregados a la variable, en este caso, "alerta".
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alert-danger');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
        formulario.appendChild(alerta);

        setTimeout( () =>{
            alerta.remove();
        }, 3000)
    }
}

function buscarDiscos() {
    const url = '../discos.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarPortadas(resultado);
        })
}

function mostrarPortadas(portadas){
    console.log(portadas)
    //Remueve el elemento anteriormente creado
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }   

    //Itera sobre el array de discos y construye el HTML
    portadas.forEach( imagen => {
        const { titulo, publicacion, precio, portada, sello} = imagen;
        resultado.innerHTML += `
        <img loading="lazy" src="${imagen.portada}" class="card-img-top" alt="Portada Álbum 'Queen'">
                  <div class="card-body">
                      <h5 class="card-title">${titulo}</h5>
                      <p class="card-text">Publicación: ${publicacion} || Sello: ${sello}</p>
                      <p class="card-price">$${precio}</p>
                      <a href="https://open.spotify.com/album/1kkb8xlG9yssEVsWKiEtAB" target="_blank" class="btn btn-primary">Escuchar Álbum</a>
                      <button class="btn btn-primary addCarrito showCarrito">Comprar Álbum</button>
                  </div>
        `
    })
}

*/
//No logré que funcione el buscador :(