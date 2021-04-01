let ded = new Audio('/audio/death.ogg'); //dead sound
let runchar = new Audio('/audio/grass2.ogg'); //run sound
let clkalert = new Audio('/audio/wood_click.ogg'); //alertbox ok button sound
let jmp = new Audio('/audio/jump.ogg'); //jump sound
let lnd = new Audio('/audio/land.ogg'); //land sound
let lvup = new Audio('/audio/levelup.ogg'); //levelup sound
let haunted = new Audio('/audio/growl4.ogg'); //score "666" sound
let bkmsc = new Audio('/audio/pigstep.ogg'); //background music

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
  gameover.preload;
  //looped sounds need to get muted and loop set to false like runchar on dead
  runchar.loop = true;
  bkmsc.loop = true;
  //adjust the individual sound volume
  jmp.volume = 0.1;
  lnd.volume = 0.2;
  ded.volume = 0.3;
  lvup.volume = 0.3;
  clkalert.volume = 0.8;
  bkmsc.volume = 0.1;
  gameover.volume = 0.2;
}
