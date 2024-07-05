const checkArithmetic = (array) => {
    const length = array.length;
    const reduceSum = array.reduce((acc, item) => acc += item);
    const arithmeticSum = (length * (array[0] + array[length-1])) / 2;
    
    return reduceSum === arithmeticSum
}

const getArithmetic = (array) => {
    const arithmetic = array[1] - array[0];
    return array[array.length - 1] + arithmetic;
}

const getGeometric = (array) => {
    const geometric = array[1] / array[0];
    return array[array.length - 1] * geometric;
}

function solution(common) {
    const isArithmetic = checkArithmetic(common);
    if(isArithmetic) return getArithmetic(common);
    else return getGeometric(common);
}