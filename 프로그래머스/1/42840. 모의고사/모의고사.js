const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
]

function solution(answers) {
    const highestScores = [];
    const scores = [0,0,0];
    
    for(const [i, answer] of answers.entries()){
        for(const [j, pattern] of patterns.entries()){
            if(answer === pattern[i % pattern.length])
                scores[j] += 1;
        }
    }
    
    const maxScore = Math.max(...scores);
    
    for(let index = 0; index < scores.length; index++) {
        if(scores[index] === maxScore)
            highestScores.push(index + 1);
    }
    
    return highestScores;
}