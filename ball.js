let ball = document.querySelector('div.ball');

let ballX = ball.offsetLeft;
let ballY = ball.offsetTop;
let aX = 1;
let aY = 1;

let borderBoardRight = document.querySelector('div.board').offsetWidth;
let borderBoardBottom = document.querySelector('div.board').offsetHeight;

function ballMove() {
    if (ballX == borderBoardRight - ball.offsetWidth) {
        aX = -1;
    } else if (ballX == 0) {
        aX = 1;
    }
    if (ballY == 0) {
        aY = 1
    } else if (ballY == borderBoardBottom - ball.offsetWidth) {
        aY = -1
    }

    ballY += aY;
    ballX += aX;
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
}
setTimeout(function(){
    setInterval(ballMove, 25);
}, 1000)
