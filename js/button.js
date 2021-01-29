let buttond = document.getElementById('buttond');
let buttonw = document.getElementById('buttonw');

buttond.addEventListener('click', function(){
    html.style.background = '#36393f';
    html.style.color = 'white';
    titel.style.color = '#e2e2e2';
    by.style.color = '#e2e2e2';
    nav.style.background = 'purple';
    navul1.style.background = 'purple';
    navul2.style.background = 'purple';
    conhead.style.color = '#e2e2e2';
    content.style.color = '#e2e2e2';
})

buttonw.addEventListener('click', function(){
    html.style.background = 'white';
    html.style.color = '#36393f';
    titel.style.color = '#2d2d2d';
    by.style.color = '#2d2d2d';
    nav.style.background = '#d300d3';
    navul1.style.background = '#d300d3';
    navul2.style.background = '#d300d3';
    conhead.style.color = '#2d2d2d';
    content.style.color = '#2d2d2d';
})
