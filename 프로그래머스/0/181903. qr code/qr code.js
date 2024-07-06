function solution(q, r, code) {
    var answer = '';
    [...code].map((item, index) => {
        if(index % q === r) answer += item;
    })
    return answer;
}