function solution(s)
{
    let answer = 0;
    const stack = [];
    for(let start = 0; start < s.length; start++) {
        const item = s[start];
        const lastItem = stack[stack.length - 1];
              
        if(stack.length > 0 && lastItem === item) {
            stack.pop();
            answer++;
        }
        else stack.push(item);
    }
    
    return stack.length === 0  ? 1 : 0;
}