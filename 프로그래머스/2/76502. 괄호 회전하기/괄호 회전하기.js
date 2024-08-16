function solution(s) {
    var answer = 0;
    const rotationLength = s.length;
    const stack = [];
    let isCorrect = true;
    let str = s;
    
    if(rotationLength % 2 === 1) return 0;
    
    for(let index = 0; index < rotationLength; index++) {
        str = `${str.slice(1)}${str[0]}`;
        isCorrect = true;
        for(let n of str){
            if(n === "[" || n === "{" || n === "(" ){
                stack.push(n);
            }else{
                let opening = stack.pop();
                if (opening === "(" && n === ")") continue;
                if (opening === "{" && n === "}") continue;
                if (opening === "[" && n === "]") continue;
              	isCorrect = false;
                break;
            };
        };
        if (isCorrect) answer++;
    }
    return answer;
}