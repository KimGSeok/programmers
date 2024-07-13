function solution(my_string, queries) {
    const array = [...my_string];
    queries.forEach(([s,e]) => {
        const reverseArray = array.slice(s, e+1).reverse();
        array.splice(s, e - s + 1, ...reverseArray);
    })
    return array.join('');
}