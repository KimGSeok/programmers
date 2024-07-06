const factorial = (number) => {
    let start = 1n;
    let result = 1n;
    while(start <= number){
        result *= start
        start++;
    }
    return result;
}

function solution(balls, share) {
    const denominator = factorial(balls);
    const molecule = factorial(balls-share) * factorial(share)
    const result = denominator / molecule
    return result;
}