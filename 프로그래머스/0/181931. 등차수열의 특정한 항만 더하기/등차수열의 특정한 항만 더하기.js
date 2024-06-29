function solution(a, d, included) {
    var answer = 0;
    included.reduce((acc, item) => {
        if(item) answer += acc;
        return acc + d;
    }, a)
    return answer;
}