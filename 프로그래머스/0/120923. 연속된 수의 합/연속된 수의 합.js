const plusLoop = (number) => {
    let result = 0;
    let start = 0;
    while (start < number) {
        start++;
        result += start;
    }
    return result;
}

function solution(num, total) {
    const plusData = plusLoop(num-1);
    const targetNumber = (total - plusData) / num;

    return Array.from({ length: num },(_, i) => targetNumber+i);
}