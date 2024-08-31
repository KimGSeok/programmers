const getSlope = (dot1, dot2) => {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    return (y2 - y1) / (x2 - x1);
}

function solution(dots) {
  
    const slopes = [
        getSlope(dots[0], dots[1]),
        getSlope(dots[0], dots[2]),
        getSlope(dots[0], dots[3]),
        getSlope(dots[1], dots[2]),
        getSlope(dots[1], dots[3]),
        getSlope(dots[2], dots[3])
    ];
   
    if (slopes[0] === slopes[5] || slopes[1] === slopes[4] || slopes[2] === slopes[3]) {
        return 1;
    }
    
    return 0;
}