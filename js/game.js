let character = document.getElementById('character');
var img = new Image();
var canceljump = false;

//preload
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

var checkDead = setInterval(function() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  let blockRight = parseInt(window.getComputedStyle(block).getPropertyValue('right'));
  if ((blockLeft < 20 && blockLeft > 0 || blockRight < 20 && blockRight > 0) && characterTop >= 130) {
    canceljump = true;
    runchar.muted = true;
    bkmsc.muted = true;
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

    runchar.loop = false;
    bkmsc.loop = false;
    clearTimeout(t);
    counter.innerHTML = '*died* with a Score of: ' + (count - 1);
  }
},10);

img.src = '/textures/character01.png';
//Simple Game Textures made by https://www.youtube.com/channel/UC5fF703FjcwwxauExxyCYSA and edited by me(metl_play).