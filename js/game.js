var character = document.getElementById("character");
var block = document.getElementById("block");
var img = new Image();
var count = 0;
var t;
var ded = new Audio("/audio/death.ogg");
var runchar = new Audio("/audio/grass2.ogg");
var clkalert = new Audio("/audio/wood_click.ogg");
var jmp = new Audio("/audio/jump.ogg");
var lnd = new Audio("/audio/land.ogg");
var lvup = new Audio("/audio/levelup.ogg");
var haunted = new Audio("/audio/growl4.ogg");

//starter
document.addEventListener('DOMContentLoaded', function (){
	begin();
	sound();
})

function sound(){
//preload the sounds
	runchar.preload;
	jmp.preload;
	lnd.preload;
	clkalert.preload;
	ded.preload;
	lvup.preload;
	haunted.preload;
//looped sounds need to get muted and loop set to false like runchar
	runchar.loop = true;
//adjust the individual sound volume
	jmp.volume = 0.1;
	lnd.volume = 0.1;
	ded.volume = 0.5;
	lvup.volume = 0.5;
	clkalert.volume = 0.8;
//sounds to play from start of Game
	runchar.play();
}

function begin(){
	lemath();
	t = setTimeout(begin, 995, window);
}

function lemath(){
	count++;
	var counter = document.getElementById('counter');
	counter.innerHTML = "Score: " + (count -1);
	if((count -1) == 10){
		lvup.play();
		} if((count -1) == 20){
				lvup.play();
				} if((count -1) == 50){
						lvup.play();
						} if((count -1) == 100){
								lvup.play();
								} if((count -1) == 200){
										lvup.play();
										} if((count -1) == 500){
												lvup.play();
												} if((count -1) == 666){
														haunted.play();
														}
}

function jump(){
	if(character.classList != "animate"){
		character.classList.add("animate");
		//jmp.play();
			setTimeout(function(){
				character.classList.remove("animate");
				lnd.play();
},500);}
}

var checkDead = setInterval(function(){

	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	if(blockLeft<20 && blockLeft>0 && characterTop>=130){
		runchar.muted = true;
		block.style.animation = "none";
		block1.style.animation = "none";
		block2.style.animation = "none";
		block.style.display = "none";
		block1.style.display = "none";
		block2.style.display = "none";
		character.innerHTML = '<img src="'+img.src+'" />';
		if((count -1) > 0){
		ded.play();
		alert("G4m3 0ver Score: " + (count -1));
		clkalert.play();
		}
		runchar.loop = false;
		clearTimeout(t);
		counter.innerHTML = "*died* with a Score of: " + (count -1);
}
},20);

img.src = '/textures/character01.png';

//Simple Game Textures made by https://www.youtube.com/channel/UC5fF703FjcwwxauExxyCYSA and edited by me(metl_play).