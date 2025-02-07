let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Protein Shake',
        image: '1.jpg',
        price: 499
    },
    {
        id: 2,
        name: 'Protein Powder',
        image: '2.jpg',
        price: 599
    },
    {
        id: 3,
        name: 'Gofit Protein',
        image: '3.jpg',
        price: 729
    },
    {
        id: 4,
        name: 'Hello Tempayy',
        image: '4.jpg',
        price: 349
    },
    {
        id: 5,
        name: 'Marinated Tempayy',
        image: '5.jpg',
        price: 429
    },
    {
        id: 6,
        name: 'Vitamin A,D,K',
        image: '6.jpg',
        price: 999
    },
    {
        id: 7,
        name: 'B-Complex Vitamins',
        image: '7.jpg',
        price: 899
    },
    {
        id: 8,
        name: 'Proteins Shaker',
        image: '8.jpg',
        price: 129
    },
    {
        id: 9,
        name: '5kg Dumbells',
        image: '9.jpg',
        price: 499
    },
    {
        id: 10,
        name: '20lb Dumbell Set',
        image: '10.jpeg',
        price: 1299
    },
    {
        id: 11,
        name: 'Yoga Mat',
        image: '11.jpg',
        price: 359
    },
    {
        id: 12,
        name: '2.5kg Dumbell',
        image: '12.jpg',
        price: 429
    }

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}