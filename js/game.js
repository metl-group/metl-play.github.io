let character = document.getElementById('character');
let img = new Image();
let canceljump = true;
let count = 0;
var t;

document.addEventListener('DOMContentLoaded', function() {
  sound();
})

function jump() {
	if(canceljump){
		return
	}
  if (character.classList != 'animate') {
    character.classList.add('animate');
    jmp.play();
    setTimeout(function() {
      character.classList.remove('animate');
      lnd.play();
    }, 500);
  }
}

function achivement() {
  lemath();
  t = setTimeout(achivement, 1000, window);
  score();
}

function lemath() {
  count++;
  var counter = document.getElementById('counter');
  counter.innerHTML = 'Score: ' + (count - 1);
}

function score(){
  if ((count - 1) == 10) lvup.play();
  if ((count - 1) == 20) lvup.play();
  if ((count - 1) == 50) lvup.play();
  if ((count - 1) == 100) lvup.play();
  if ((count - 1) == 200) lvup.play();
  if ((count - 1) == 500) lvup.play();
  if ((count - 1) == 666) haunted.play();
}

var checkDead = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  let blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'));
  if ((blockLeft < 20 && blockLeft > 0 || blockRight < 20 && blockRight > 0) && characterTop >= 130) {
    canceljump = true;
    runchar.muted = true;
    bkmsc.muted = true;
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
      sound(clkalert.play());
    }

    runchar.loop = false;
    bkmsc.loop = false;
    clearTimeout(t);
    counter.innerHTML = '*died* with a Score of: ' + (count - 1);
  }
},10);

img.src = '/textures/character01.png';
//Simple Game Textures made by https://www.youtube.com/channel/UC5fF703FjcwwxauExxyCYSA and edited by metl_play.
