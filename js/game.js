var character = document.getElementById('character');
var block = document.getElementById('block');
var img = new Image();
var count = 0;
var t;
var canceljump = false;


//starter
document.addEventListener('DOMContentLoaded', function () {
  sound();
  achivement();
})

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

function jump() {
	if(canceljump){
		return;
	}
  if (character.classList != 'animate') {
    character.classList.add('animate');
    character.innerHTML.add = '<img src="' + img.src + '" />';
    jmp.play();
    setTimeout(function () {
      character.classList.remove('animate');
      character.innerHTML.remove = '<img src="' + img.src + '" />';
      lnd.play();
    }, 500);
  }
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  var blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'));
  if ((blockLeft < 20 && blockLeft > 0 || blockRight < 20 && blockRight > 0) && characterTop >= 130) {
    canceljump = true;
    runchar.muted = true;
    bkmsc.muted = true;
    lnd.muted = true;
    block.style.animation = 'none';
    block1.style.animation = 'none';
    block2.style.animation = 'none';
    block.style.display = 'none';
    block1.style.display = 'none';
    block2.style.display = 'none';
    character.innerHTML = '<img src="' + img.src + '" />';
    if ((count - 1) > 0) {
      ded.play();
      alert('G4m3 0ver Score: ' + (count - 1));
      clkalert.play();
    }
    runchar.loop = false;
    bkmsc.loop = false;
    clearTimeout(t);
    counter.innerHTML = '*died* with a Score of: ' + (count - 1);
  }
},10);

img.src = '/textures/character01.png';
//Simple Game Textures made by https://www.youtube.com/channel/UC5fF703FjcwwxauExxyCYSA and edited by me(metl_play).