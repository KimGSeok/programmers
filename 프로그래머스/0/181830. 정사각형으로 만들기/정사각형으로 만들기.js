function solution(arr) {
    const rowLength = arr.length;
    const columnLength = arr[0].length;

    if(rowLength > columnLength) {
        for(let index = 0; index < rowLength; index++) {
            while(arr[index].length < rowLength) {
                arr[index].push(0);
            }
        }
    }
    else if(rowLength < columnLength) {
        for(let index = 0; index < columnLength; index++){
            if(arr.length < columnLength) {
                arr.push(Array(columnLength).fill(0));
            }
        }
    }
    
    return arr;
}