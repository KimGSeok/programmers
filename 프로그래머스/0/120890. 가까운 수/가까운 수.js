function solution(array, n) {
    var answer = array[0];
    array.forEach((item) => {
        const result = Math.abs(n-item);
        const preResult = Math.abs(n-answer);
        if (preResult > result || (preResult === result && item < answer)) answer = item;
    })
    return answer;
}