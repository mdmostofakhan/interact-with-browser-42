// const addClick = () =>{
//     const productField = document.getElementById('product-name')
//     const quantityField = document.getElementById('product-quantity')
//     const product = productField.value;
//     const quantity = quantityField.value;
//     productField.value = '';
//     quantityField.value = '';


//     console.log(product, quantity);
//     displayProducts(product, quantity);
//     saveStriiongToLocals(product, quantity);
// }

// const displayProducts = (product, quantity) =>{
//     const ul = document.getElementById('container-product')
//     const li = document.createElement('li');
//     li.innerText = `${product}: ${quantity}`;
//     ul.appendChild(li);

// }

// const shopingToStriongCart = () =>{
  
//     let cart = {};
//     const stringCart = localStorage.getItem('cart');
//     if(stringCart){
//         cart = JSON.parse(stringCart);
//     }
//     return cart;
// }

// const saveStriiongToLocals = (product, quantity) =>{
//   const cart = shopingToStriongCart();
//   cart[product] = quantity;
//   const cartStringfiend = JSON.stringify(cart)
//  localStorage.setItem('cart', cartStringfiend);
// }

// const displayShowLocalStriong = () =>{
//     const savedCart = shopingToStriongCart();
//     console.log(savedCart);
//     for(const product in savedCart){
//         const quantity = savedCart[product];
//         console.log(product, quantity);
//         displayProducts(product, quantity);
//     }
// }

// displayShowLocalStriong();
const ul = document.getElementById('container-product');
const addClick = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

     console.log(product, quantity);
     displayProducts(product, quantity);
     showStringToLoCals(product, quantity);
}
const displayProducts = (product, quantity) =>{
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    // li.innerText = product + ':' + quantity;
    ul.appendChild (li) ;
}

const saveStringToLocals = ()=>{
    let cart = {};
    const stringCart = localStorage.getItem('cart')
    if(stringCart){
         cart = JSON.parse(stringCart);
    }
    return cart;
}

const showStringToLoCals = (product, quantity) =>{
    const cart = saveStringToLocals()
    cart [product] = quantity;
    const stringCartLocal = JSON.stringify(cart)
    localStorage.setItem('cart', stringCartLocal);
} 

const localStorageMultiPlay = ()=>{
    const savedCart = saveStringToLocals()
    for(const product in savedCart){
        const li = document.createElement('li');
        li.innerText = `${product}: ${savedCart[product]}`

        ul.appendChild(li);
    }
}

localStorageMultiPlay();


