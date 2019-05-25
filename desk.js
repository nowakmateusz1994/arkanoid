
let desk = document.querySelector('div.desk');

let borderRight = document.querySelector('div.board').offsetWidth - desk.offsetWidth;
let borderLeft = document.querySelector('div.board').offsetLeft;

var moveLeft = desk.offsetLeft;

document.addEventListener('keydown', function(el){
    if (el.keyCode == '39') {
        if (moveLeft <= borderRight) {
            moveLeft+=10;
            desk.style.left = moveLeft + 'px';
        }
    }
    if (el.keyCode == '37') {
        if(moveLeft > 0) {
            moveLeft-=10;
            desk.style.left = moveLeft + 'px';
        } 
    }
});








