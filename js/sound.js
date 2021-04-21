
function sound() {
  //sound_setup
  soundSetting();
  //preload the sounds
  runchar.preload = "auto";
  jmp.preload = "auto";
  lnd.preload = "auto";
  clkalert.preload = "auto";
  ded.preload = "auto";
  lvup.preload = "auto";
  haunted.preload = "auto";
  bkmsc.preload = "auto";
  bkmsc.preload = "auto";
}

function soundSetting() {
	jmp.volume = 0.1;
	lnd.volume = 0.2;
	ded.volume = 0.3;
	lvup.volume = 0.3;
	clkalert.volume = 0.8;
	bkmsc.volume = 0.1;
}
