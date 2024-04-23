'use strict'

let count = 3;

const boxesEl = document.querySelector('.boxes');

document.querySelector('.add-button').addEventListener('click', () => {
    const boxEl = document.createElement('div');
    boxEl.innerText = ++count;
    boxEl.classList.add('box');
    boxesEl.appendChild(boxEl);
});

document.querySelector('.del-button').addEventListener('click', () => {
    boxesEl.children[boxesEl.children.length - 1].remove();
    count--;
});

document.querySelector('.clone-button').addEventListener('click', () => {
    const cloneEl = boxesEl.children[boxesEl.children.length - 1].cloneNode(true);
    boxesEl.appendChild(cloneEl);
    count++;
});