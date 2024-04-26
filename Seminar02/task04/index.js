'use strict'

const containerBox = document.querySelector('.container');

const titleEl = document.createElement('h1');
titleEl.innerText = 'Questions';

const hrEl = document.createElement('hr');

const formEl = document.createElement('form');

const newQuestion = () => {
    let count = 1;

    const newOption = (option, name) => {
        const labelEl = document.createElement('label');

        const optionEl = document.createElement('input');
        optionEl.type = 'radio';
        optionEl.value = option;
        optionEl.id = option;
        optionEl.name = name;
        labelEl.appendChild(optionEl);

        const textLabel = document.createTextNode(option);
        labelEl.appendChild(textLabel);

        return labelEl;
    }

    return (question, ...options) => {
        const divBox = document.createElement('div');
        divBox.classList.add('question');

        const titleEl = document.createElement('h3');
        titleEl.innerText = `Question ${count}: ${question}`;

        divBox.appendChild(titleEl);

        options.forEach(option => {
            divBox.appendChild(newOption(option, 'question ' + count));
        });

        count++;
        return divBox;
    }
}

const createQuestion = newQuestion();
const questionOneBox = createQuestion('Your favorite color?', 'black', 'grey', 'brown');
const questionTwoBox = createQuestion('Your favorite animal?', 'dog', 'cat', 'snake');

const finishBtn = document.createElement('button');
finishBtn.innerText = 'Finish';

finishBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const data = new FormData(formEl);
    const resultBox = document.createElement('div');
    if (Array.from(data).length === 2) {
        const errorEl = document.querySelector('.error');
        if (errorEl){
            errorEl.style.display = 'none';
        }
        const resTitle = document.createElement('h4');
        resTitle.innerText = 'Results:';
        resultBox.appendChild(resTitle);
        for (const entry of data) {
            const resQuestion = document.createElement('p');
            resQuestion.innerText = `${entry[0]}: ${entry[1]}`;
            resultBox.appendChild(resQuestion);
        }
        containerBox.appendChild(resultBox);
    } else {
        const errorText = document.createElement('h3');
        errorText.innerText = 'Answer all questions';
        errorText.classList.add('error');
        errorText.style.color = 'red';

        containerBox.appendChild(errorText);
    }
});

formEl.appendChild(questionOneBox);
formEl.appendChild(questionTwoBox);
formEl.appendChild(finishBtn);

containerBox.appendChild(titleEl);
containerBox.appendChild(hrEl);
containerBox.appendChild(formEl);
