
let css = '#block { width: 20px; height: 20px; position: relative; top: 90px; left: 480px; animation: block 1s infinite linear; z-index: 4; } @keyframes block { 0% { left: 480px; } 100% { left: -40px; } } #block1 { width: 40px; height: 20px; position: relative; top: 110px; left: 480px; animation: block 1800ms infinite linear; z-index: 3; } @keyframes block1 { 0% { left: 480px; } 100% { left: -40px; } } #block2 { width: 40px; height: 20px; position: relative; top: -20px; left: 460px; animation: block 2000ms infinite linear; z-index: 2; } @keyframes block2 { 0% { left: 480px; } 100% { left: -40px; } }';
		head = document.head;
		stylee = document.createElement('style');

document.addEventListener('DOMContentLoaded', function() {
  sound();
})

startButton.addEventListener('click', function(){
	startbtn.style.visibility = 'hidden';
	setTimeout(start, 1000);
	canceljump = false;
	},
	{once: true}
)
function start(){
	character.innerHTML = '<img src="/textures/character01.gif" />'
	enemy.style = '';
	bush.style = '';
	cloud.style = '';
	head.appendChild(stylee);
	stylee.type = 'text/css';
	stylee.appendChild(document.createTextNode(css));
	runchar.play();
	bkmsc.play();
	achivement();
}