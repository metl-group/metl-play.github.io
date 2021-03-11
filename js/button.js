let d = document.getElementById('btnd');
let w = document.getElementById('btnw');
var wht = '#e2e2e2';
var blk = '#2d2d2d';

d.addEventListener('click', function(){
    html.style.background = '#36393f';
    html.style.color = blk;

    titel.style.color = wht;
    by.style.color = wht;

    btnd.style.background = '#800080';
    btnw.style.background = '#800080';

    nav.style.background = '#800080';
    navul0.style.background = '#800080';
    navul1.style.background = '#800080';
    navul2.style.background = '#800080';

    conhead.style.color = wht;
    con.style.color = wht;
    concon.style.color = wht;
    quote.style.color = wht;


    conlwrhead.style.color = wht;
    conlwr.style.color = wht;
})

w.addEventListener('click', function(){
    html.style.background = wht;
    html.style.color = '#36393f';

    titel.style.color = blk;
    by.style.color = blk;

    btnd.style.background = '#d300d3';
    btnw.style.background = '#d300d3';

    nav.style.background = '#d300d3';
    navul0.style.background = '#d300d3';
    navul1.style.background = '#d300d3';
    navul2.style.background = '#d300d3';

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