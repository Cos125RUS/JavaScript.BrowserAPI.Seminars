'use strict'

const articles = [{
    title: "Title 1",
    content: "Content article 1"
},
{
    title: "Title 2",
    content: "Content article 2"
}];

const containerEl = document.querySelector('.container');

const addFrame = (event, article) => {
    const formEl = document.createElement('form');

    const titleEl = document.createElement('input');
    titleEl.type = 'text';
    if (!article) {
        titleEl.value = 'New Article';
    } else {
        titleEl.value = article.title;
    }
    formEl.appendChild(titleEl);

    const contentEl = document.createElement('textarea');
    if (!article) {
        contentEl.placeholder = 'Enter your article content here...';
    } else {
        contentEl.value = article.content;
    }
    formEl.appendChild(contentEl);

    containerEl.prepend(formEl);

    event.target.onclick = (event) => {
        event.target.onclick = addFrame;
        containerEl.removeChild(formEl);
        if (!article) {
            addArticle({ title: titleEl.value, content: contentEl.value });
        } else {

        }
    };
}

const addButton = document.createElement('button');
addButton.classList.add('add-button');
addButton.textContent = 'Add article';
addButton.onclick = addFrame;
containerEl.appendChild(addButton);

const addArticle = (article) => {
    const articleEl = document.createElement('div');
    articleEl.classList.add('article');

    const titleEl = document.createElement('h2');
    titleEl.innerText = article.title;
    articleEl.classList.add('title');
    articleEl.appendChild(titleEl);
    const contentEl = document.createElement('p');
    contentEl.innerText = article.content;
    articleEl.classList.add('content');
    articleEl.appendChild(contentEl);

    const buttonsBox = document.createElement('div');
    const delButton = document.createElement('button');
    delButton.classList.add('del-button');
    delButton.textContent = 'Delete';
    delButton.addEventListener('click', () => {
        containerEl.removeChild(articleEl);
    });
    buttonsBox.appendChild(delButton);
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        addFrame(this.Event, article);
    });
    buttonsBox.appendChild(editButton);

    articleEl.appendChild(buttonsBox);
    containerEl.appendChild(articleEl);
    articles.push({ title: titleEl.value, content: contentEl.value });
}

articles.forEach(article => addArticle(article));