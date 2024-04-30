'use strict'

const ACCESS_KEY = '9J7E2eUNDZoBxV94vNQ68v4LJOMKghzu0MWzHUEpLSI';

const containerEl = document.querySelector('.container');

let page = 1;

const getPhoto = async (page) => {
    const url = `https://api.unsplash.com/photos?page=${page}&client_id=${ACCESS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    for (let i = 0; i < data.length - 2; i++) {
        createPhoto(data[i].urls.small);
    }
    // data.forEach(element => {
    //     createPhoto(element.urls.small);
    // });
}

const createPhoto = (link) => {
    const imgEl = document.createElement('img');
    imgEl.classList.add('photo');
    imgEl.src = link;
    containerEl.appendChild(imgEl);
}

document.addEventListener('scroll', (e) => {
    if (window.scrollY + window.outerHeight >= document.body.offsetHeight) {
        getPhoto(++page);
    }
});

getPhoto(page);