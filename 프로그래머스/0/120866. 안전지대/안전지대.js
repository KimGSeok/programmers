const danger = (item) => {
    const [x,y] = item;
    
    return [
        [x+1, y+1],
        [x+1, y],
        [x+1, y-1],
        [x, y+1],
        [x, y],
        [x, y-1],
        [x-1, y+1],
        [x-1, y],
        [x-1, y-1],
    ]
};

function solution(board) {
    
    const boardLength = board[0].length;
    const dangerousSet = new Set();
    const mineArr = [];
    
    board.forEach((arr, row) => {
        arr.forEach((item, col) => {
           if(item === 1) mineArr.push([row, col])
        });
    })
    
    mineArr.forEach((item) => {
        danger(item).forEach(([x, y]) => {
            if (x >= 0 && x < boardLength  && y >= 0 && y < boardLength) {
                dangerousSet.add(`${x},${y}`);
            }
        });
    });
    
    return (boardLength * boardLength) - dangerousSet.size;
}