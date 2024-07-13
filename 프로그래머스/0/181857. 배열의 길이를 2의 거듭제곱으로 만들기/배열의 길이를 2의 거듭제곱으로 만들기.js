function solution(arr) {
    let powFlag = 0;
    let arrLength = arr.length;
    
    while(2 ** powFlag < arrLength){
        powFlag++;
    }
    
    const targetLength = 2 ** powFlag;
    
    while(arr.length < targetLength){
        arr.push(0);
    }
    return arr;
};