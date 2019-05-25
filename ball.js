let ball = document.querySelector('div.ball');

let ballX = ball.offsetLeft;
let ballY = ball.offsetTop;
let aX = 1;
let aY = 1;
let index;

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
        clearInterval(index)
    }

    for (let i = 0; i < blockBoard.length; i++) {
        let blockLeft = blockBoard[i].offsetLeft;
        let blockRight = blockBoard[i].offsetLeft + blockBoard[i].offsetWidth;
        let blockTop = blockBoard[i].offsetTop;
        let blockBottom = blockBoard[i].offsetTop + blockBoard[i].offsetHeight;

        if (blockLeft <= ballX && ballX <= blockRight && blockTop <= ballY && ballY <= blockBottom) {
            aY *= (-1)
            blockBoard[i].remove();
        }
    }

    if (moveLeft <= ballX && ballX <= (moveLeft + deskWidth) && deskTop <= ballY && ballY <= (deskTop + deskHeight)) {

        aY *= (-1)
        console.log('sadad')
    }



    ballY += aY;
    ballX += aX;
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
}
setTimeout(function () {
    index = setInterval(ballMove, 10);
}, 1000)