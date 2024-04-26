'use strict'

const containerBox = document.querySelector('.container');

const navigationBox = document.createElement('nav');
navigationBox.classList.add('nav');

const ulBox = document.createElement('ul');
ulBox.classList.add('nav__list');

const createNavEl = (name) => {
    const navEl = document.createElement('li');
    navEl.classList.add('nav__item');
    
    const linkEl = document.createElement('a');
    linkEl.classList.add('nav__link');
    linkEl.href = '#';
    linkEl.innerText = name;

    navEl.appendChild(linkEl);

    navEl.addEventListener('mouseover', function (e) {
        navEl.classList.add('focused');
    });

    navEl.addEventListener('mouseleave', function (e) {
        navEl.classList.remove('focused');
    });

    return navEl;
}

ulBox.appendChild(createNavEl('Main'));
ulBox.appendChild(createNavEl('About'));
ulBox.appendChild(createNavEl('Services'));
ulBox.appendChild(createNavEl('Contacts'));

ulBox.addEventListener('click', function (e) {
    if(e.target.classList.contains('nav__link')) {
        e.preventDefault();
    }

    Array.from(this.children).forEach(element => {
        element.classList.remove('used');
    });

    e.target.closest('.nav__item').classList.add('used');
});

navigationBox.appendChild(ulBox);
containerBox.appendChild(navigationBox);