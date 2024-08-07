function solution(arr1, arr2) {
    let result = [];
    
    const rowLength = arr1.length;
    const columnLength = arr2[0].length;
    
    for(let index = 0; index < rowLength; index++){
        result.push(new Array(columnLength).fill(0));
    }
    
    for(let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
        for(let columnIndex = 0; columnIndex < columnLength; columnIndex++)    {
            for(let index = 0; index < arr1[0].length; index++){
                result[rowIndex][columnIndex] += arr1[rowIndex][index] * arr2[index][columnIndex]
            }
        }
    }
    
    
    return result;
}