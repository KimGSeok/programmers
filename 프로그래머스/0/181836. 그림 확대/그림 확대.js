function solution(picture, k) {
    const answer = [];
    picture.map((item) => {
        for(let start = 0; start < k; start++) {
            const atom = [...item];
            answer.push(atom.map((el) => {
                return Array(k).fill(el).join('');
            }).join(''));
        }
    });

    return answer;
}