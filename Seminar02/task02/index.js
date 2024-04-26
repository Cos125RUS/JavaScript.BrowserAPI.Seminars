'use strict'

const containerBox = document.querySelector('.container');

const openButton = document.createElement('button');
openButton.textContent = 'Open';
openButton.classList.add('open-button');
openButton.addEventListener('click', function (e) {
    this.style.display = 'none';
    document.querySelector('.modal').classList.remove('closed');
    document.querySelector('.modal').classList.add('open');
});

const modalBox = document.createElement('div');
modalBox.classList.add('modal', 'closed');

const titleEl = document.createElement('h1');
titleEl.innerText = 'Modal Window';
modalBox.appendChild(titleEl);

const textEl = document.createElement('p');
textEl.innerText = 'Click "Close" to close this modal window';
modalBox.appendChild(textEl);

const closeButton = document.createElement('button');
closeButton.innerText = 'Close';
closeButton.addEventListener('click', function (e) {
    this.parentElement.classList.remove('open');
    this.parentElement.classList.add('closed');
    document.querySelector('.open-button').style.display = 'block';
});
modalBox.appendChild(closeButton);


containerBox.appendChild(openButton);
containerBox.appendChild(modalBox);