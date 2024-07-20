function solution(a, b, c, d) {
    const array = Array(7).fill(0);
    const diceArray = [a,b,c,d];
    let value = [];

    diceArray.map((item) => {
        array[item]++;
    })
    
    const duplicateFour = array.indexOf(4) !== -1;
    const duplicateThree = array.indexOf(3) !== -1;

    if(duplicateFour) return 1111 * a;
    else if(duplicateThree && (array.indexOf(1) !== array.indexOf(3)))
        return (10 * array.indexOf(3) + array.indexOf(1))**2;
    else if(array.filter(el => el === 2).length === 2){   
        array.forEach((item, index) => {if(item === 2) value.push(index)});
        const [p, q] = value;
        
        return (p+q) * Math.abs(p - q)
    }else if(array.filter(el => el === 2).length === 1){
        array.forEach((item, index) => {
            if(item === 1) value.push(index)
        });
        return value[0] * value[1];
    }else {
        array.forEach((item, index) => {
            if(item === 1) value.push(index)
        });
        return value.sort((a,b) => a-b)[0];
    }
}
