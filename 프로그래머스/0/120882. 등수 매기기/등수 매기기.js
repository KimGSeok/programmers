function solution(score) {
    var answer = [];
    
    let avrArr = score.map(item => (item[0]+item[1])/2);
    let sortedArr = avrArr.slice().sort((a,b) => b-a);

    return avrArr.map((item => sortedArr.indexOf(item) + 1));
}