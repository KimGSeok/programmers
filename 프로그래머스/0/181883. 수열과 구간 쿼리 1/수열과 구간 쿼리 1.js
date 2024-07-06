function solution(arr, queries) {
    var answer = [...arr];
    queries.map((item) => {
        const [s,e] = item;
        arr.map((element, index) => { if(s <= index && e >= index) answer[index] = answer[index] + 1 });
    })
    return answer;
}