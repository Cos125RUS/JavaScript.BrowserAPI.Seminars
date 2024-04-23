'use strict'

let articles = [{
    title: "Title 1",
    content: "Content article 1"
},
{
    title: "Title 2",
    content: "Content article 2"
}];

const containerEl = document.querySelector('.container');

const createForm = () => {
    const formEl = document.createElement('form');
    formEl.classList.add('add-form');

    const titleEl = document.createElement('input');
    titleEl.type = 'text';
    titleEl.classList.add('input-title');
    formEl.appendChild(titleEl);

    const contentEl = document.createElement('textarea');
    contentEl.classList.add('input-content');
    formEl.appendChild(contentEl);

    formEl.style.display = 'none';
    containerEl.prepend(formEl);
}

const addForm = (event, article) => {
    const formEl = document.querySelector('.add-form');
    const titleInput = formEl.querySelector('.input-title');
    const contentInput = formEl.querySelector('.input-content');
    const addButton = document.querySelector('.add-button');

    if (!article) {
        titleInput.value = 'New Article';
        contentInput.placeholder = 'Enter your article content here...';
    } else {
        titleInput.value = article.title;
        contentInput.value = article.content;
    }

    formEl.style.display = 'block';
    addButton.onclick = (e) => {
        formEl.style.display = 'none';
        
        if (!article) {
            addArticle({ title: titleInput.value, content: contentInput.value });
            articles.push({ title: titleInput.value, content: contentInput.value });
        } else {
            const articleBox = event.target.parentElement.parentElement;
            articleBox.querySelector('.title').innerText = titleInput.value;
            articleBox.querySelector('.content').innerText = contentInput.value;
            const findArticle = articles.filter(art => art === article)[0];
            findArticle.title = titleInput.value;
            findArticle.content = contentInput.value;
        }
        e.target.onclick = addForm;

        titleInput.value = 'New Article';
        contentInput.value = '';

        localStorage.setItem('articles', JSON.stringify(articles));
    };
}

const createAddButton = () => {
    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Add article';
    addButton.onclick = addForm;
    containerEl.appendChild(addButton);
}

const addArticle = (article) => {
    const articleEl = document.createElement('div');
    articleEl.classList.add('article');

    const titleEl = document.createElement('h2');
    titleEl.innerText = article.title;
    titleEl.classList.add('title');
    articleEl.appendChild(titleEl);
    const contentEl = document.createElement('p');
    contentEl.innerText = article.content;
    contentEl.classList.add('content');
    articleEl.appendChild(contentEl);

    const buttonsBox = document.createElement('div');
    const delButton = document.createElement('button');
    delButton.classList.add('del-button');
    delButton.textContent = 'Delete';
    delButton.addEventListener('click', () => {
        containerEl.removeChild(articleEl);
        articles = articles.filter(art => art !== article);
    });
    buttonsBox.appendChild(delButton);
    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        addForm(this.event, article);
    });
    buttonsBox.appendChild(editButton);

    articleEl.appendChild(buttonsBox);
    containerEl.appendChild(articleEl);
}

createAddButton();
createForm();
articles = JSON.parse(localStorage.getItem('articles'));
articles.forEach(article => addArticle(article));