function solution(rank, attendance) {
    let maxRank = [];
    const rankArray = Array(100).fill(9999);
    rank.map((item, index) => {
        if(attendance[index]) rankArray[index] = item;
    })

    for(let index = 0; index < 3; index++){
        const max = Math.min(...rankArray);
        const maxIndex = rankArray.indexOf(max);
        maxRank.push(maxIndex);
        rankArray[maxIndex] = 9999;
    }
    const [a,b,c] = maxRank;
    return 10000 * a + 100 * b + c;
}