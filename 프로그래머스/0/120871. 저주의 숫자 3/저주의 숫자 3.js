function solution(n) {
    let count = 1;
    let answer = 1;
    
    while(count < n) {
        answer++;
        if(answer % 3 !== 0 && !answer.toString().includes('3')) {
            count++;
        }
    }
    
    return answer;
}