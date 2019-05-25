let ball = document.querySelector('div.ball');

let ballX = ball.offsetLeft;
let ballY = ball.offsetHeight;
let aX = 1;
let aY = 1;

let borderRight = document.querySelector('div.board').offsetWidth;
let borderBottom = document.querySelector('div.board').offsetHeight;

function ballMove() {
    if (ballX == borderRight - ball.offsetWidth) {
        aX = -1;
    } else if (ballX == 0) {
        aX = 1;
    }
    if (ballY == 0) {
        aY = 1
    } else if (ballY == borderBottom - ball.offsetWidth) {
        aY = -1
    }

    ballY += aY;
    ballX += aX;
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
}

setInterval(ballMove, 25);