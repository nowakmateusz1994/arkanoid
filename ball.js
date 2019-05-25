let ball = document.querySelector('div.ball');
let playAgain = document.querySelector('div.info button');
let divInfoSpan = document.querySelector('div.info div span')

let ballX = ball.offsetLeft;
let ballY = ball.offsetTop;
const startBallX = ball.offsetLeft;
const startBallY = ball.offsetTop;
let aX = 1;
let aY = 1;
let index;

let borderBoardRight = document.querySelector('div.board').offsetWidth;
let borderBoardBottom = document.querySelector('div.board').offsetHeight;

let scoresPoint = document.querySelector('span.scores');
let score = 0;

function ballMove() {
    if (ballX == borderBoardRight - ball.offsetWidth) {
        aX *= -1;
    } else if (ballX == 0) {
        aX *= -1;
    }

    if (ballY == 0) {
        aY *= -1
    } else if (ballY == borderBoardBottom - ball.offsetWidth) {
        clearInterval(index)
        if (lives > 0) {
            lives -= 1;
            ballX = startBallX;
            ballY = startBallY;
            ball.style.top = startBallY + 'px';
            ball.style.left = startBallY + 'px';
            divInfoSpan.innerHTML = score;
            setTimeout(function () {
                index = setInterval(ballMove, 10);
            }, 1000)
        } else {
            document.querySelector('div.info').style.display = 'block'
        }

    }

    for (let i = 0; i < blockBoard.length; i++) {
        let blockLeft = blockBoard[i].offsetLeft;
        let blockRight = blockBoard[i].offsetLeft + blockBoard[i].offsetWidth;
        let blockTop = blockBoard[i].offsetTop;
        let blockBottom = blockBoard[i].offsetTop + blockBoard[i].offsetHeight;

        if (blockLeft <= ballX && ballX <= blockRight && blockTop <= ballY && ballY <= blockBottom) {
            aY *= (-1)
            blockBoard[i].remove();
            score += 10;
            scoresPoint.innerHTML = score;
        }
    }

    if (moveLeft <= ballX && ballX <= (moveLeft + deskWidth) && deskTop <= ballY && ballY <= (deskTop + deskHeight)) {
        aY *= (-1)
    }

    if (score >= 10) {
        aX = 1.1;
        aY = 1.1;
    }


    ballY += aY;
    ballX += aX;
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
}
setTimeout(function () {
    index = setInterval(ballMove, 10);
}, 1000)

playAgain.addEventListener('click', function () {
    lives = 2;
    score = 0;
    allX = startBallX;
    ballY = startBallY;
    document.querySelector('div.info').style.display = 'none'
    index = setInterval(ballMove, 10);
})