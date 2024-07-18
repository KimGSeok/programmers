function solution(dots) {
    const xArray = dots.map((item) => item[0]);
    const yArray = dots.map((item) => item[1]);
    
    const minX = Math.min(...xArray);
    const maxX = Math.max(...xArray);
    const minY = Math.min(...yArray);
    const maxY = Math.max(...yArray);
    
    const width = maxX - minX;
    const height = maxY - minY;
    
    return width * height;
}