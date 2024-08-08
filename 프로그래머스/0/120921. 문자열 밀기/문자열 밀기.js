function solution(A, B) {
    let shifted = A;
    if (A === B) return 0;
    if (A.length !== B.length) return -1;
    
    for(let start = 1; start < A.length; start++) {
        shifted = shifted.at(-1) + shifted.slice(0, shifted.length - 1);
        
        if (shifted === B) return start;
    }
    
    return -1;
}