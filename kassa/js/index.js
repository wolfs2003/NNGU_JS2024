//import {database} from './database.js';


const database = [
    {
        id: 123,
        title: 'Молоко',
        price: '100',
        src: '',
    },
    {
        id: 321,
        title: 'Шоколад',
        price: '50',
        src: '',
    },
    {
        id: 231,
        title: 'Вода',
        price: '24',
        src: '',
    },
    {
        id: 412,
        title: 'Хлеб',
        price: '33',
        src: '',
    }   
]
let cart = [];
const form = document.querySelector('.form');
const cartUI = document.querySelector('.cart');

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    let item = database.find(el=>el.id === e.target[0].valueAsNumber)
    if(item){
        cart.push(item)
        e.target[0].value = ''
    } else {
        alert('Товар не найден')
    }

    cartUI.innerHTML = `
        <div>${item.title}</div>
    `

})

const logCart = (id) =>{
    const item = database.find(el => el.id === id)
    console.log(item || 'Товар не найден');
}
console.log(logCart(123));
