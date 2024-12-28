// N1
let title = document.querySelector('#title');
let container = document.createElement('div');
let wrapper = document.querySelector('.wrapper')
wrapper.appendChild(container);
container.textContent = 'Текст внутри контейнера';

// N2
let btn = document.querySelector('.wrapper');
let btnAdd = document.createElement('button');
wrapper.appendChild(btnAdd);
btnAdd.textContent = 'Применить';

// N3
btnAdd.addEventListener ('click', () => {
    title.textContent = title.textContent.toUpperCase();
})

// N4 + N5 + N6
let secondDiv;
btnAdd.addEventListener ('click', () => {
    secondDiv = document.createElement('div');
    wrapper.appendChild(secondDiv);
    secondDiv.textContent = 'Блок сохдан при клике на кнопку';
    secondDiv.style.color = 'seagreen';
    secondDiv.style.paddingTop = '20px';
    secondDiv.style.width = '200px';
    secondDiv.style.height = '50px';
    secondDiv.style.padding = '50px';
})

// N7
let btn2 = document.querySelector('.wrapper');
let btnAdd2 = document.createElement('button');
wrapper.appendChild(btnAdd2);
btnAdd2.textContent = 'Заменить';

btnAdd2.addEventListener('click', () => {
    secondDiv.textContent = 'Текст заменен при клике на кнопку';
})

// N8
let btn3 = document.querySelector('#buttonnn2');
let paragraph1 = document.querySelector('#paragraph');
btn3.addEventListener ('click', () => {
    console.log(paragraph1.textContent);
})

// N9
let btn4 = document.querySelector('#button3');
let paragraph2 = document.querySelector('#paragraph2');
let paragraph3 = document.querySelector('#paragraph3');
btn4.addEventListener ('click', () => {
    console.log(+paragraph2.textContent + +paragraph3.textContent);
})