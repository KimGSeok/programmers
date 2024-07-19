const remainder = (item) => item % 10;

function solution(array) {
    var answer = 0;
    array.map((item) => {
        let target = item;
        while(target > 0){    
            if(remainder(target) === 7) {
                answer++;
            }
            target = Math.floor(target / 10);
        }
    })
    return answer;
}