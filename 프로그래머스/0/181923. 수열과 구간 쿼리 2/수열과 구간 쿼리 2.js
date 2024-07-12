function solution(arr, queries) {
    return queries.map(([s,e,k]) => {
        const targetArr = arr.slice(s,e + 1).sort((a,b) => a-b);
        const findArr = targetArr.find(num => num > k);
        return findArr ? findArr : -1
    });
}