var ded = new Audio('/audio/death.ogg'); //dead sound
var runchar = new Audio('/audio/grass2.ogg'); //run sound
var clkalert = new Audio('/audio/wood_click.ogg'); //alertbox ok button sound
var jmp = new Audio('/audio/jump.ogg'); //jump sound
var lnd = new Audio('/audio/land.ogg'); //land sound
var lvup = new Audio('/audio/levelup.ogg'); //levelup sound
var haunted = new Audio('/audio/growl4.ogg'); //score "666" sound
var bkmsc = new Audio('/audio/pigstep.ogg'); //background music

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
  //looped sounds need to get muted and loop set to false like runchar on dead
  runchar.loop = true;
  bkmsc.loop = true;
  //adjust the individual sound volume
  jmp.volume = 0.1;
  lnd.volume = 0.3;
  ded.volume = 0.5;
  lvup.volume = 0.5;
  clkalert.volume = 0.8;
  bkmsc.volume = 0.2;
}
