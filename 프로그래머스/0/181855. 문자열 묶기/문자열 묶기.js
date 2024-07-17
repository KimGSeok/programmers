function solution(strArr) {
    const map = new Map();
    strArr.forEach((item) => {
        const key = item.length;
        if(map.has(key)){
            map.get(key).push(item);
        }
        else map.set(key, [item]);
    })
    
    let maxSize = 0;
    map.forEach((item) => {
        if(item.length > maxSize){
            maxSize = item.length;
        }
    })
    
    return maxSize;
}