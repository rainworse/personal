let paragraph = document.createElement("p");
paragraph.style.color = 'red';
paragraph.textContent = 'MONEY MOMEY';
document.querySelector('div').appendChild(paragraph);

let h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = 'MONEY MOMEY';
document.querySelector('div').appendChild(h3);

let div = document.createElement('div');
let divh3 = document.createElement('h3');
let divp = document.createElement('p');
div.style.border = 'black 2px solid';
divh3.textContent = 'ZZZZZZ';
divp.textContent = 'ZZZZZZZZZZZZ';
div.appendChild(divp);
div.appendChild(divh3);
document.querySelector('#container').appendChild(div);

document.querySelector('#butt').onclick = () => { alert('revolution') };
let btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) { e.target.style.background = 'blue'; });