function solution(sides) {
    const [a,b] = sides;
    
    const maxLength = a + b -1
    const minLength = Math.abs(a - b) + 1
    
    return maxLength - minLength + 1;
}