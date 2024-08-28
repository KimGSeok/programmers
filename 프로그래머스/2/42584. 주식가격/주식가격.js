function solution(prices) {
    const totalSeconds = prices.length;
    const answer = new Array(totalSeconds).fill(0);
    const stack = [];

    for (let i = 0; i < totalSeconds; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = totalSeconds - j - 1;
    }

    return answer;
}