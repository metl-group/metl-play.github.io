
function achivement(){
  lemath();
//t = setTimeout(achivement, 1000, window);
  t = setTimeout(achivement, 1e3, window);
  score();
}

/* OLD
function lemath() {
  count++;
  var counter = document.getElementById('counter');
  counter.innerHTML = 'Score: ' + (count - 1);
}
*/

function lemath() {
  count++;
  document.getElementById("counter").innerHTML="Score: "+(count-1)
}
/* OLD
function jump() {
	if(canceljump) return;
  if (character.classList != 'animate') {
    character.classList.add('animate');
    jmp.play();
    setTimeout(function() {
      character.classList.remove('animate');
      lnd.play();
    }, 500);
  }
}
*/

function jump(){
canceljump||"animate"!=character.classList&&(character.classList.add("animate"),jmp.play(),
setTimeout(function(){character.classList.remove("animate"),lnd.play()},500))
}

/*
function score(){
  if ((count - 1) == 10) lvup.play();
  if ((count - 1) == 20) lvup.play();
  if ((count - 1) == 50) lvup.play();
  if ((count - 1) == 100) lvup.play();
  if ((count - 1) == 200) lvup.play();
  if ((count - 1) == 500) lvup.play();
  if ((count - 1) == 666) haunted.play();
}
*/

function score(){
	count-1==10&&lvup.play();
	count-1==20&&lvup.play();
	count-1==50&&lvup.play();
	count-1==100&&lvup.play();
	count-1==200&&lvup.play();
	count-1==500&&lvup.play();
	count-1==666&&haunted.play()
}

/*
var checkDead = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  let blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'));
  if ((blockLeft < 20 && blockLeft > 0 || blockRight < 20 && blockRight > 0) && characterTop >= 130) {
    canceljump = true;
    runchar.muted = true;
    bkmsc.muted = true;
    jmp.muted = true;
    lnd.muted = true;
    character.innerHTML = '<img src="' + img.src + '" />';
    block.style.animation = 'none';
    block1.style.animation = 'none';
    block2.style.animation = 'none';
    block.style.display = 'none';
    block1.style.display = 'none';
    block2.style.display = 'none';

    if ((count - 1) > 0) {
      ded.play();
      alert('G4m3 0ver Score: ' + (count - 1));
      clkalert.play();
    }

    runchar.loop = false;
    bkmsc.loop = false;
    clearTimeout(t);
    counter.innerHTML = '*died* with a Score of: ' + (count - 1);
    restartbtn.style.visibility = '';
  }
},10);

img.src = '/textures/character01.png';
*/

var checkDead=setInterval(function(){
	((parseInt(window.getComputedStyle(block).getPropertyValue('left')) <20 && parseInt(window.getComputedStyle(block).getPropertyValue('left')) >0 || parseInt(window.getComputedStyle(block).getPropertyValue('right')) <20 && parseInt(window.getComputedStyle(block).getPropertyValue('right')) >0) && parseInt(window.getComputedStyle(character).getPropertyValue('top')) >=130) &&(
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
		count-1>0 && (
		ded.play(),
		alert("G4m3 0ver Score: "+(count-1)),
		clkalert.play()),
	runchar.loop=!1,
	bkmsc.loop=!1,
	clearTimeout(t),
	counter.innerHTML='*died* with a Score of '+(count-1),
	restartbtn.style.visibility='')
},10);