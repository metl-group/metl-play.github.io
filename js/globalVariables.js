//start
let enemy = document.getElementById('block');
let bush = document.getElementById('block1');
let cloud = document.getElementById('block2');
let startButton = document.getElementById('startbtn');

//game
let character = document.getElementById('character');
let img = new Image();
let count = 0;
var canceljump = true;
var t;

//sound
let ded = new Audio('/audio/death.ogg'); //dead sound
let runchar = new Audio('/audio/grass2.ogg'); //run sound
let clkalert = new Audio('/audio/wood_click.ogg'); //alertbox ok button sound
let jmp = new Audio('/audio/jump.ogg'); //jump sound
let lnd = new Audio('/audio/land.ogg'); //land sound
let lvup = new Audio('/audio/levelup.ogg'); //levelup sound
let haunted = new Audio('/audio/growl4.ogg'); //score "666" sound
let bkmsc = new Audio('/audio/pigstep.ogg'); //background music