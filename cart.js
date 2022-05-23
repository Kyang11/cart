let addtocart= document.getElementsByClassName("add-cart")

let products = [
    {
    name: "Grey Tshirt",
    tag: "greytshort",
    price: 15,
    inCart:0
    },
    {
    name: "Hat",
    tag: "hat",
    price: 15,
    inCart:0
    },
    {
    name: "black shoes",
    tag: "lackshoes",
    price: 15,
    inCart:0
    },
    {
    name: "classix Hat",
    tag: "oldhat",
    price: 15,
    inCart:0
    },
    {
    name: "woman Tshirt",
    tag: "yellowtshirt",
    price: 15,
    inCart:0
    },
    {
    name: "hmong Clothes",
    tag: "hmongsiste",
    price: 15,
    inCart:0
    },
    {
    name: "jean",
    tag: "jean",
    price: 15,
    inCart:0
    },
    {
    name: "Pizza Shoes",
    tag: "pizzashoe",
    price: 15,
    inCart:0
    },
    {
    name: "reebok shoes",
    tag: "reebok",
    price: 15,
    inCart:0
    },
    {
    name: "office shoes",
    tag: "officeshoes",
    price: 15,
    inCart:0
    },
    {
    name: "sneakers shoes",
    tag: "sneakers",
    price: 15,
    inCart:0
    },
    {
    name: "wheel shoes",
    tag: "wheelshoes",
    price: 15,
    inCart:0
    },

];

for (let i = 0; i < addtocart.length; i++){
    addtocart[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onloadingCartnumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.getElementsByClassName(".cart span").textContent = productNumbers;

    }

}

function cartNumbers(product){
    let productNumbers=localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers)

    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector(".cart span").textContent = productNumbers +1;
}else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector(".cart span").textContent = 1;
    }
    setItem(product)

}

function setItem(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);

    if (cartItems != null){

        if(cartItems[product.tag] == undefined) {

            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1; 
    }else{

    product.inCart =1;
    cartItems={
    [product.tag]: product

    }
}


    localStorage.setItem('productsInCart', JSON.stringify
    (cartItems));

}

function totalCost(product) {
    let cartCost =localStorage.getItem('totalCost');

    console.log(" my cartCost is ", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);

    }else{
        localStorage.setItem('totalCost', product.price);
    }


}

function displayCart(){
    let cartItems=localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.getElementsByClassName(".products");
    let cartCost =localStorage.getItem('totalCost');
    if (cartItems && productContainer ){

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=`
            <div class="product">
                <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span> ${item.name}</span>
            </div> 
            <div class="price">${item.price}</div>    
            <div class="quantity">
                <ion-icon class="decrease"
                name="arrow-dropleft-cirle"></ion-icon>
                <span> ${item.inCart}</span>
                <ion-icon class="decrease"
                name="arrow-dropright-cirle"></ion-icon>
            </div>  
            
            <div class ="total">
            $${item.inCart *item.price}, 00
            </div>
            
            `

// continues tomorrow

        })

        productContainer.innerHTML =+ `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Bastket Total
        </h4>

        <h4 class="basketTotal">
            $${cartCost}
        </h4>

        `

    }

}

onloadingCartnumbers();
displayCart()