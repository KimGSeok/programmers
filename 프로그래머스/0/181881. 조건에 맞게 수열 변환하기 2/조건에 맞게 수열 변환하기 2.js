const loopArray = (array) => {
    return array.map((item) => {
        if(item >= 50 && item % 2 === 0)
            return item / 2;
        else if(item < 50 && item % 2 === 1)
            return (item * 2) + 1
        else return item;
    });
}

const isEqualArray = (prevArray, nextArray) => {
    if(prevArray.length !== nextArray.length) return false;
    for(let index = 0; index < prevArray.length; index++){
        if(prevArray[index] !== nextArray[index]) return false;
    }
    return true;
}

function solution(arr) {
    var answer = 0;    
    let prevArray = [...arr];
    
    while(true) {
        const nextArray = loopArray(prevArray);
        if(isEqualArray(nextArray, prevArray)) {
            break;
        }else {
            prevArray = [...nextArray];
            answer++;
        }
    }
    return answer;
}