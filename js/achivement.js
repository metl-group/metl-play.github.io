var count = 0;
var t;

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
