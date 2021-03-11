let d = document.getElementById('btnd');
let w = document.getElementById('btnw');
var wht = '#e2e2e2'; //white
var blk = '#2d2d2d'; //black
var prp = '#800080'; //purple
var lil = '#d300d3'; // lila
var dc = '#36393f'; //Discord Dark Theme color

d.addEventListener('click', function(){ //dunkles design button
    html.style.background = dc;
    html.style.color = blk;

    titel.style.color = wht;
    by.style.color = wht;

    btnd.style.background = prp;
    btnw.style.background = prp;

    nav.style.background = prp;
    navul0.style.background = prp;
    navul1.style.background = prp;
    navul2.style.background = prp;

    conhead.style.color = wht;
    con.style.color = wht;
    concon.style.color = wht;
    quote.style.color = wht;


    conlwrhead.style.color = wht;
    conlwr.style.color = wht;
})

w.addEventListener('click', function(){ //helles design button
    html.style.background = wht;
    html.style.color = dc;

    titel.style.color = blk;
    by.style.color = blk;

    btnd.style.background = lil;
    btnw.style.background = lil;

    nav.style.background = lil;
    navul0.style.background = lil;
    navul1.style.background = lil;
    navul2.style.background = lil;

    conhead.style.color = blk;
    con.style.color = blk;
    concon.style.color = blk;
    quote.style.color = blk;

    conlwrhead.style.color = blk;
    conlwr.style.color = blk;
})

/*
rgb.addEventListener('click', function(){
Placeholder for another 'Design' Button with id=buttonrgb
;
})
*/