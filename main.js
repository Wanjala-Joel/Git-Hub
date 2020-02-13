const btn = document.querySelector('.colorBtn');
const body = document.querySelector('body');
const colors = ['violet','teal','indigo'];

btn.addEventListener('click', changeColor);

function changeColor(){
	//body.style.backgroundColor = "brown";
	let random = Math.floor(Math.random()*colors.length);
	body.style.backgroundColor = colors[random];
}

function msg(){
	alert('Welcome to my first GitHub tutorial from scratch');
}