function solution(my_str, n) {
    var answer = [];
    const stringLength = my_str.length;
    const round = Math.ceil(stringLength/n);
    for(let index = 0; index < round; index++){
        answer.push(my_str.substr(index * n, n))
    }
    return answer;
}