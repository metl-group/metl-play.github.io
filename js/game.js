var character = document.getElementById('character');
var block = document.getElementById('block');
var img = new Image();
var count = 0;
var t;
var canceljump = false;

//starter
document.addEventListener('DOMContentLoaded', function() {
  sound();
  sound(runchar.play());
  sound(bkmsc.play());
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
  if ((count - 1) == 10) sound(lvup.play());
  if ((count - 1) == 20) sound(lvup.play());
  if ((count - 1) == 50) sound(lvup.play());
  if ((count - 1) == 100) sound(lvup.play());
  if ((count - 1) == 200) sound(lvup.play());
  if ((count - 1) == 500) sound(lvup.play());
  if ((count - 1) == 666) sound(haunted.play());
}

function jump() {
	if(canceljump){
		return
	}
  if (character.classList != 'animate') {
    character.classList.add('animate');
    sound(jmp.play());
    setTimeout(function() {
      character.classList.remove('animate');
      sound(lnd.play());
    }, 500);
  }
}

var checkDead = setInterval(function() {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  var blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'));
  var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
  if ((blockLeft < 20 && blockLeft > 0 || blockRight < 20 && blockRight > 0) && characterTop >= 130) {
    canceljump = true;
    sound(runchar.muted = true);
    sound(bkmsc.muted = true);
    sound(lnd.muted = true);
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

    sound(runchar.loop = false);
    sound(bkmsc.loop = false);
    clearTimeout(t);
    counter.innerHTML = '*died* with a Score of: ' + (count - 1);
  }
},10);

img.src = '/textures/character01.png';
//Simple Game Textures made by https://www.youtube.com/channel/UC5fF703FjcwwxauExxyCYSA and edited by me(metl_play).