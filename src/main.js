const arrowHeader = document.querySelector('.navbar-right_arrow');
const menuHeader =document.querySelector('.desktop-menu');

const burguer = document.querySelector('.menu');
const menuBurguer = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-right_carrito');
const menuCarrito = document.querySelector('.menuCarrito');

const cardsContainer = document.querySelector('.container-cards');

const closeIconDetails = document.querySelector('.icon-close');
const productDetails = document.querySelector('.productDetails');

const productDetailsImg = document.querySelector('.productDetailsImg');

const cardDescripcionPrice = document.querySelector('.cardDescripcionPrice');
const cardDescripcionTitle = document.querySelector('.cardDescripcionTitle');
const cardDescripcionInfo = document.querySelector('.cardDescripcionInfo');

const cardCounter = document.querySelector('.cardCounter');


arrowHeader.addEventListener('click', toggleMenuHeader);
burguer.addEventListener('click', toggleMenuBurguer);
menuCarritoIcon.addEventListener('click' , toggleMenuCarrito);
closeIconDetails.addEventListener('click', closeDetails );


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
    id:0,
});

productList.push({
    name:'Computadora',
    price: 200000,
    image:'https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/032/729/original/compu.jpg?1430413991',
    id:1,
});

productList.push({
    name:'Celular',
    price: 80600,
    image:'https://images.fravega.com/f300/cabca5b1bd1f2610c788944f374a9bbe.jpg.webp',
    id:2,
});

productList.push({
    name:'Bike 3',
    price: 10000,
    image:'https://pedalia.cc/wp-content/uploads/2016/07/FeatureBiciMontana-770x513.jpg',
    id:3,
});

productList.push({
    name:'Computadora 4',
    price: 200000,
    image:'https://drawfolio.s3.amazonaws.com/public/system/pictures/images/000/032/729/original/compu.jpg?1430413991',
    id:4,
});

productList.push({
    name:'Celular 5',
    price: 80600,
    image:'https://images.fravega.com/f300/cabca5b1bd1f2610c788944f374a9bbe.jpg.webp',
    id:5,
});

//Creamos las tarjetas con JS

function createCards (arr) {

    for (product of arr){

        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openDetails);

        const containerDescription = document.createElement('div');
        containerDescription.classList.add('container-desciption');

        const containerDescriptionDiv = document.createElement('div');
        containerDescriptionDiv.classList.add('product-card_description');


        console.log(product.id);

       
        //accion
        
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
        productImgIconCart.classList.add('iconCard');
        productImgIconCart.addEventListener('click' , addProductCard);

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
//Cerrar aside detalles
function closeDetails(){
    productDetails.classList.add('inactivo');
}
function openDetails(e){
    productDetails.classList.remove('inactivo');
    productDetailsImg.setAttribute('src' , e.target.src );
    cardDescripcionPrice.innerText = e.target.nextElementSibling.firstChild.firstChild.innerText;
    cardDescripcionTitle.innerText = e.target.nextElementSibling.firstChild.lastChild.innerText;

    console.log(e);
}
let aux = 0;
function addProductCard(e){
  
    aux = aux +1;
    if (aux > 0){
        cardCounter.innerText = aux;
    }
    console.log(e);
    


}

console.log(cardsContainer);
