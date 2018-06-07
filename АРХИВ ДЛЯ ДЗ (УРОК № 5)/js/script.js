let menuItem = document.getElementsByClassName("menu-item"),
	title = document.getElementById('title'),
	column = document.getElementById('column'),
	adv = document.getElementsByClassName('adv'),
	answer = document.getElementById('prompt'),
	menu = document.querySelector(".menu");
menu.insertBefore(menuItem[1], menuItem[3]);

let li = document.createElement('li');
li.textContent = 'пятый пункт';
li.classList.add('menu-item');

menu.appendChild(li);

document.body.style.backgroundImage ='url("img/apple_true.jpg")';
title.innerHTML = 'Мы продаем только подлинную технику Apple';
let remoteAdv = column.removeChild(column.childNodes[3]);

let question;
while((typeof(question)) === 'string'  && question == '' || question == null) {
	question = prompt('отношение к технике apple?');
}
answer.innerHTML = question;