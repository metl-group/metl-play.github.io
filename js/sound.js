
function sound() {
  //preload the sounds
  runchar.preload;
  jmp.preload;
  lnd.preload;
  clkalert.preload;
  ded.preload;
  lvup.preload;
  haunted.preload;
  bkmsc.preload;
  bkmsc.preload;
  //sound_setup
  soundSetting;
}

function soundSetting() {
	runchar.loop = true;
	bkmsc.loop = true;

	jmp.volume = 0.1;
	lnd.volume = 0.2;
	ded.volume = 0.3;
	lvup.volume = 0.3;
	clkalert.volume = 0.8;
	bkmsc.volume = 0.1;
}
