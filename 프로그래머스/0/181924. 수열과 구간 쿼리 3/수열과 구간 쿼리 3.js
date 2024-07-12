function solution(arr, queries) {
    var answer = [...arr];
    queries.forEach((item) => {
        const [x,y] = item;
        const prev = answer[x];
        answer[x] = answer[y];
        answer[y] = prev;
    })
    return answer;
}