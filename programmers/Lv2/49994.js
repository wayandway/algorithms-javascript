//* 방문 길이 https://school.programmers.co.kr/learn/courses/30/lessons/49994

function isValidMove(nx, ny) {
    // 좌표평면을 벗어나는지 확인하는 함수
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x, y, dir) {
    switch(dir) {
        case "U":
            return [x, y+1];
        case "D":
            return [x, y-1];
        case "R":
            return [x+1, y];
        case "L":
            return [x-1, y];
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    const visited = new Set();
    
    for(const dir of dirs) {
        const [nx, ny] = updateLocation(x,y,dir);
        
        if(!isValidMove(nx,ny))
            continue;
    

        visited.add(`${x}${y}${nx}${ny}`); // (x,y) 에서 (nx, ny)까지 방문
        visited.add(`${nx}${ny}${x}${y}`);
        [x, y] = [nx, ny];
    }
    
    return visited.size / 2;
}
