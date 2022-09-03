const arrowHeader = document.querySelector('.navbar-right_arrow');
const menuHeader =document.querySelector('.desktop-menu');
const burguer = document.querySelector('.menu');
const menuBurguer = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-right_carrito');
const menuCarrito = document.querySelector('.menuCarrito');

const cardsContainer = document.querySelector('.container-cards');


arrowHeader.addEventListener('click', toggleMenuHeader);
burguer.addEventListener('click', toggleMenuBurguer);
menuCarritoIcon.addEventListener('click' , toggleMenuCarrito);


function toggleMenuHeader() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactivo');
    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactivo');
    }
    menuHeader.classList.toggle('inactivo');
}

function toggleMenuBurguer() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactivo');
    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactivo');
    }
    menuBurguer.classList.toggle('inactivo');
}

function toggleMenuCarrito(){
    const isMenuBurguerClose = menuBurguer.classList.contains('inactivo');
    const isMenuHeaderClosed = menuHeader.classList.contains('inactivo');
    if (!isMenuBurguerClose) {
        menuBurguer.classList.add('inactivo');
    }
    if (!isMenuHeaderClosed) {
        menuHeader.classList.add('inactivo');
    }

    menuCarrito.classList.toggle('inactivo');
}

//Productos
//Carga

const productList = [];

productList.push({
    name:'Bike',
    price: 10000,
    image:'https://pedalia.cc/wp-content/uploads/2016/07/FeatureBiciMontana-770x513.jpg',

});

productList.push({
    name:'Computadora',
    price: 200000,
    image:'https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/032/729/original/compu.jpg?1430413991',

});

productList.push({
    name:'Celular',
    price: 80600,
    image:'https://marcimex.vteximg.com.br/arquivos/ids/188520-320-320/34663---CELULAR-I_APPLE_IPHONE-13-PRO-128GB_GRA.jpg?v=637902369438870000',

});

productList.push({
    name:'Bike',
    price: 10000,
    image:'https://pedalia.cc/wp-content/uploads/2016/07/FeatureBiciMontana-770x513.jpg',

});

productList.push({
    name:'Computadora',
    price: 200000,
    image:'https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/032/729/original/compu.jpg?1430413991',

});

productList.push({
    name:'Celular',
    price: 80600,
    image:'https://marcimex.vteximg.com.br/arquivos/ids/188520-320-320/34663---CELULAR-I_APPLE_IPHONE-13-PRO-128GB_GRA.jpg?v=637902369438870000',

});
productList.push({
    name:'Bike',
    price: 10000,
    image:'https://pedalia.cc/wp-content/uploads/2016/07/FeatureBiciMontana-770x513.jpg',

});

productList.push({
    name:'Computadora',
    price: 200000,
    image:'https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/032/729/original/compu.jpg?1430413991',

});

productList.push({
    name:'Celular',
    price: 80600,
    image:'https://marcimex.vteximg.com.br/arquivos/ids/188520-320-320/34663---CELULAR-I_APPLE_IPHONE-13-PRO-128GB_GRA.jpg?v=637902369438870000',

});

//Creamos las tarjetas con JS

function createCards (arr) {

    for (product of arr){

        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const containerDescription = document.createElement('div');
        containerDescription.classList.add('container-desciption');

        const containerDescriptionDiv = document.createElement('div');
        containerDescriptionDiv.classList.add('product-card_description');

        const productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.innerText= '$' + product.price;

        const productName = document.createElement('p');
        productName.classList.add('product-description');
        productName.innerText = product.name;

        containerDescriptionDiv.appendChild(productPrice);
        containerDescriptionDiv.appendChild(productName);

        const productFigure = document.createElement('figure');
        
        const productImgIconCart = document.createElement('img');
        productImgIconCart.setAttribute('src', "../iconos-img/carrito-compras.png");

        productFigure.appendChild(productImgIconCart);

        containerDescription.appendChild(containerDescriptionDiv);
        containerDescription.appendChild(productFigure);

        productDiv.appendChild(productImg);
        productDiv.appendChild(containerDescription);

        cardsContainer.appendChild(productDiv);


    }
}

createCards(productList);


