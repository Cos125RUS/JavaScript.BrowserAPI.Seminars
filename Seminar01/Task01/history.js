'use strict'

document.querySelector('.back-button').onclick = () => {
    window.history.back();
};

document.querySelector('.forward-button').onclick = () => {
    window.history.forward();
}