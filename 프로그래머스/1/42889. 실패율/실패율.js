function solution(N, stages) {
    var answer = [];

    let totalPersons = stages.length;
    let totalStages = N;
    let lastStage = N + 1;
    let nowStage = 1;
    let failPersonCount = 0;
    
    const stageResult = new Array(lastStage).fill(0);
    const stageFailPersonResult = new Array(lastStage).fill(0);
    
    for(let startStage = 1; startStage <= totalStages; startStage++) {
        failPersonCount = 0;
        stages.forEach((item) => {
            if(item === nowStage) {
                failPersonCount++;
                stageResult[item]++;
            }
        });
        nowStage++;
        stageFailPersonResult[startStage] = totalPersons;
        totalPersons -= failPersonCount;
    }
    
    for(let failRateIndex = 1; failRateIndex < stageResult.length; failRateIndex++) {
        const item = stageResult[failRateIndex] / stageFailPersonResult[failRateIndex];
        answer.push(item);
    }
    
    const sortedResult = Array.from(answer.entries()).sort((a,b) => b[1] - a[1])
    
    return sortedResult.map((item) => Number(item[0] + 1))
}