function solution(arr, k) {
    var answer = [];
    const unique = new Set(arr);
    const uniqueArray = [...unique];
    answer = uniqueArray.slice(0, k);
    
    while(answer.length < k) {
        answer.push(-1);
    }
    
    return answer;
}