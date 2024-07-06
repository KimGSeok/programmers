function solution(board, k) {
    var answer = 0;
    board.map((item, index) => {
        item.map((element, elIndex) => {
            if(index + elIndex <= k) answer += board[index][elIndex]
        })
    })
    return answer;
}