function solution(arr, query) {
    var answer = arr;
    query.forEach((item, index) => {
        const isEven = index % 2 === 0;
        if(isEven) answer = answer.slice(0, item + 1);
        else answer = answer.slice(item);
    });
    return answer;
}