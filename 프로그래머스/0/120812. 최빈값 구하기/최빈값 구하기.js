function solution(array) {
    const countArray = new Array(1000).fill(0);
    
    array.forEach((item) => countArray[item]++);
    
    const max = Math.max(...countArray);
    const maxs = countArray.filter((item) => item === max)
    
    if(maxs.length > 1) return -1;
    
    return countArray.findIndex((item) => item === max);
}