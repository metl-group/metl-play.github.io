var character = document.getElementById("character");
var block = document.getElementById("block");
var count = 0;

function lemath()
{
    count++;
    var counter = document.getElementById('counter');
    counter.innerHTML = "Counter: " + (count -1);
}

function begin()
{
    lemath();
    setTimeout(begin, 1000, window);
}

document.addEventListener('DOMContentLoaded', function () {
    begin();
});

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 &&
    characterTop>=130){
        block.style.animation = "none";
        block1.style.animation = "none";
        block2.style.animation = "none";
        block.style.display = "none";
        block1.style.display = "none";
        block2.style.display = "none";
        alert("u lose. Score: " + (count -1));
        count = "none";
    }
},10);