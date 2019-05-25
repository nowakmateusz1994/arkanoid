
let desk = document.querySelector('div.desk');

let borderRight = document.querySelector('div.board').offsetWidth - desk.offsetWidth;
let borderLeft = document.querySelector('div.board').offsetLeft;

let moveLeft = desk.offsetLeft;

let deskWidth = desk.offsetWidth ;
let deskTop = desk.offsetTop;
let deskHeight = desk.offsetHeight;

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










