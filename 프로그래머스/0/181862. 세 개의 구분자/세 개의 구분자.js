function solution(myStr) {
    var answer = [];
    var string = '';
    
    const isSubStringFlag = (str) => {
        return (str === 'a' || str === 'b' || str === 'c')
    };
    
    [...myStr].map((item) => {
        if(isSubStringFlag(item)) {
            if (string.length > 0) {
                answer.push(string);
                string = '';
            }
        }
        else {
            string += item;
        }
    });
    
    if (string.length > 0) answer.push(string);
    
    return answer.length > 0 ? answer : ["EMPTY"];
}