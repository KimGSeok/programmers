const factorial = (number) => {
    let start = 1;
    let result = 1;
    while(result < number){
        start++;
        result *= start
    }
    return result > number ? start - 1 : start;
}

function solution(n) {
    return factorial(n);
}