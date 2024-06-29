function solution(order) {
    var answer = 0;

    const americano = 4500;
    const cafelatte = 5000;
    
    order.map((item) => item.includes('cafelatte') ? answer += cafelatte : answer += americano);
      
    return answer;
}