
function achivement(){
	lemath();
	t = setTimeout(achivement, 1e3, window);
}

function lemath() {
	count++;
	score();
	document.getElementById("counter").innerHTML="Score: "+(count-1)
}

function jump(){
canceljump||"animate"!=character.classList&&(character.classList.add("animate"),
	jmp.play(),
	setTimeout(function(){character.classList.remove("animate"),lnd.play()},500))
}

function score(){
	count-1==10&&lvup.play();
	count-1==20&&lvup.play();
	count-1==50&&lvup.play();
	count-1==100&&lvup.play();
	count-1==200&&lvup.play();
	count-1==500&&lvup.play();
	count-1==666&&haunted.play()
}

function gameover(){
count-1>0 && (
ded.play(),
alert("G4m3 0ver Score: "+(count-1)),
clkalert.play()),
}

var checkDead=setInterval(function(){
	((parseInt(window.getComputedStyle(block).getPropertyValue('left')) <20 && parseInt(window.getComputedStyle(block).getPropertyValue('left')) >0 ||
	parseInt(window.getComputedStyle(block).getPropertyValue('right')) <20 && parseInt(window.getComputedStyle(block).getPropertyValue('right')) >0) &&
	parseInt(window.getComputedStyle(character).getPropertyValue('top')) >=130) &&(
	canceljump=!0,
	runchar.muted=!0,
	bkmsc.muted=!0,
	jmp.muted=!0,
	lnd.muted=!0,
	character.innerHTML='<img src="/textures/character01.png"/>',
	block.style.animation="none",
	block1.style.animation="none",
	block2.style.animation="none",
	block.style.display="none",
	block1.style.display="none",
	block2.style.display="none",
	gameover();
	runchar.loop=!1,
	bkmsc.loop=!1,
	clearTimeout(t),
	counter.innerHTML='*died* with a Score of '+(count-1),
	restartbtn.style.visibility='')
},10);
