const euclidean = (num1, num2) => {
    while(num2 !== 0) {
        let start = num2;
        num2 = num1 % num2;
        num1 = start;
    }
    
    return num1;
}

function solution(a, b) {
    b /= euclidean(a, b);
    
    while(b % 2 === 0) {
        b /= 2;
    }
    
    while(b % 5 === 0) {
        b /= 5;
    }

    return b === 1 ? 1 : 2;
}