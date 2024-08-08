function solution(dirs) {
    let x = 0, y = 0;

    const visited = new Set();

    const moves = {
        'U': [0, 1],
        'D': [0, -1],
        'L': [-1, 0],
        'R': [1, 0]
    };

    for (let dir of dirs) {
        let [dx, dy] = moves[dir];
        let nx = x + dx;
        let ny = y + dy;

        if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {

            let path1 = `${x},${y},${nx},${ny}`;
            let path2 = `${nx},${ny},${x},${y}`;

            if (!visited.has(path1) && !visited.has(path2)) {
                visited.add(path1);
                visited.add(path2);
            }

            x = nx;
            y = ny;
        }
    }

    return visited.size / 2;
}