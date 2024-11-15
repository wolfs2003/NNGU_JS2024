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
    },   
]
let cart = []
const form = document.querySelector('.form')
const cartUI = document.querySelector('.cart')
const total = document.querySelector('.total')

const setItemInUICart = (item) => {
    const itemUI = document.createElement('div')
    if(item.count){
         itemUI.textContent = `${item.title + ' x' + item.count} ---------------- ${item.price*item.count} р.`
    } else {
        itemUI.textContent = `${item.title} ---------------- ${item.price}`
    }

return itemUI

}

const getItem = (item) => {
    const element = cart.find(el => el.id === item.id)
    const elementIndex = cart.findIndex(el => el.id === item.id)

    if(Boolean(element)) {
        cart.splice(elementIndex, 1)
        return {    
            ...element,
            count: element.count ? element.count + 1 : 2
        }   
    }

    return item
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const item = database.find(el => el.id === e.target[0].valueAsNumber)

    if(item) {
        cart.push(getItem(item))
        e.target[0].value = ''
    } else {
        alert('Товар не найден')
    }

    while (cartUI.firstChild) {
        cartUI.firstChild.remove()
    }

    cart.forEach((el) => {
        cartUI.appendChild(setItemInUICart(el))
    })

    total.textContent = `ИТОГ: ${cart.reduce((total, el) => total += el.count ? el.count * el.price : el.price, 0)}рублей`

})


