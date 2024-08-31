const direction = {
    up: [0, 1],
    down: [0, -1],
    left: [-1, 0],
    right: [1, 0]
}

function solution(keyinput, board) {
    let answer = [0, 0];
    const [boardX, boardY] = board;
    const maxXLength = (boardX - 1) / 2;
    const maxYLength = (boardY - 1) / 2;
          
    keyinput.forEach((item) => {
        
        const [x,y] = direction[item];
        
        answer[0] += Math.abs(answer[0] + x) > maxXLength ? 0 : x;
        answer[1] += Math.abs(answer[1] + y) > maxYLength ? 0 : y;
    })
    
    return answer;
}