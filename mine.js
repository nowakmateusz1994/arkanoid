let board = document.querySelector('div.board');
let blockBoard = [];
let lives = 2;

function gameGenerator() {

    let column = 2;
    for (let i = 0; i < 4; i++) {
        let row = 2;
        for (let j = 0; j < 10; j++) {
            let blocks = document.createElement('div');
            blocks.classList.add('blocks');
            blocks.style.left = row + 'px';
            blocks.style.top = column + 'px';
            board.appendChild(blocks);
            row += 100;
            blockBoard.push(blocks);
        }
        column += 22;
    }
}

gameGenerator();

