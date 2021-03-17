let block = document.getElementById('block');
let startbtn = document.getElementById('startbtn');
var css = '#block { width: 20px; height: 20px; position: relative; top: 90px; left: 480px; animation: block 1s infinite linear; z-index: 4; } @keyframes block { 0% { left: 480px; } 100% { left: -40px; } }',
		head = document.head,
		style = document.createElement('style');

startbtn.addEventListener('click', function(){
	setTimeout(start, 1000);
	startbtn.style.visibility = 'hidden';
})

function start(){

	character.innerHTML = '<img src="/textures/character01.gif" />'
	block.style.display = '';
	head.appendChild(style);
	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	runchar.play();
	bkmsc.play();
	achivement();
}