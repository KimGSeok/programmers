function solution(board, moves) {
    
    let answer = 0;
    const busketStack = [];
    const gameStack = [...Array(board[0].length)].map(() => []);
    
    for(let index = 0; index < board[0].length; index++) {
        for(let stackIndex = board[0].length - 1; stackIndex >= 0; stackIndex--) {
            const item = board[stackIndex][index];
            if(item !== 0) gameStack[index].push(item);
        }
    }
        
    moves.forEach((move) => {
        
        if(gameStack[move - 1].length === 0) return;
        
        const busketTopItem = busketStack[busketStack.length - 1];
        
        const index = move - 1;

        const popItem = gameStack[index].pop();
        
        if(popItem !== busketTopItem) busketStack.push(popItem);
        else {
            busketStack.pop();
            answer+=2;
        }
    })
    
    return answer;
}