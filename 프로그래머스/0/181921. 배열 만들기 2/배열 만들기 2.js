function solution(l, r) {
    var answer = [];
    for(let index = l; index <= r; index++){
        answer.push(`${index}`);
    }
    const result = answer.filter((item) => {
        return [...item].every(char => char === '0' || char === '5');
    }).map((el) => Number(el))
    return result.length === 0 ? [-1] : result
}