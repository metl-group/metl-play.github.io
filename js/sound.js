var ded = new Audio('/audio/death.ogg');
var runchar = new Audio('/audio/grass2.ogg');
var clkalert = new Audio('/audio/wood_click.ogg');
var jmp = new Audio('/audio/jump.ogg');
var lnd = new Audio('/audio/land.ogg');
var lvup = new Audio('/audio/levelup.ogg');
var haunted = new Audio('/audio/growl4.ogg');
var bkmsc = new Audio('/audio/pigstep.ogg');

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
              //looped sounds need to get muted and loop set to false like runchar
              runchar.loop = true;
              bkmsc.loop = true;
              //adjust the individual sound volume
              jmp.volume = 0.1;
              lnd.volume = 0.3;
              ded.volume = 0.5;
              lvup.volume = 0.5;
              clkalert.volume = 0.8;
              bkmsc.volume = 0.2;
              //sounds to play from start of Game
              runchar.play();
              bkmsc.play();
            }