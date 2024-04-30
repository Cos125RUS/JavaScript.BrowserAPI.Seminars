'use strict'

const stockList = [
    { product: 'Apple Watch', category: 'electronic' },
    { product: 'Xiaomi Q120', category: 'electronic' },
    { product: 'Samsung TV', category: 'electronic' },
    { product: 'Coca Cola', category: 'product' },
    { product: 'Mars', category: 'product' },
    { product: 'MBW M5', category: 'transport' },
    { product: 'Lada Priora', category: 'transport' },
];

const selectEl = document.forms.stock.category;
const viewEl = document.querySelector('.stock-list');

const showList = (list) => {
    viewEl.innerHTML = '';
    list.forEach(element => {
        const liEl = document.createElement('li');
        liEl.innerText = element.product;
        viewEl.appendChild(liEl);
    });
}

selectEl.onchange = () => {
    if (selectEl.value !== 'default') {
        const sortedList = stockList.filter(el => el.category === selectEl.value);
        showList(sortedList);
    } else showList(stockList);
}

showList(stockList);