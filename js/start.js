let start = document.getElementById('start');
var css = '@keyframes block { 0% { left: 480px; } 100% { left: -40px; } }',
		head = document.head,
		style = document.createElement('style');

start.addEventListener('click', function(){
	head.appendChild(style);
	style.type = 'text/css';
	style.appendChild(document.createTextNode(css));
	runchar.play();
	bkmsc.play();
	achivement();
})
