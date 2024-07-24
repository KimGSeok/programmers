const isPrime = (number) => {
    if(number <= 3) return true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(n) {
    var answer = [];
    for(let index = 2; index <= n; index++){
        if (n % index === 0 && isPrime(index)) {
            answer.push(index);
        }
    }
    return answer;
}