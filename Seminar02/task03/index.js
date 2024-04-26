'use strict'

const containerBox = document.querySelector('.container');

const buyBtn = document.createElement('button');
buyBtn.innerText = 'Buy';
buyBtn.classList.add('buy-btn');

buyBtn.onclick = (e) => {
    if (e.isTrusted) {
        const originText = buyBtn.innerText;
        buyBtn.innerText = 'Product in stock';
        setTimeout(() => { buyBtn.innerText = originText; }, 2000);
    }
}

containerBox.appendChild(buyBtn);