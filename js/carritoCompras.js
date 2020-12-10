// *** CARRITO DE COMPRAS ***
let addToShoppingCartButtons = document.querySelectorAll('.addCarrito');
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