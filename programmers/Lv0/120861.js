//* 캐릭터의 좌표 https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
    // 좌표 이동 정의
    const direction = {
        "right": [1, 0],
        "left": [-1, 0],
        "up": [0, 1],
        "down": [0, -1]
    };

    // 현재 위치
    let position = [0, 0];
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);

    // 명령어 처리
    for (let command of keyinput) {
        const [dx, dy] = direction[command];
        let [newX, newY] = [position[0] + dx, position[1] + dy];

        // 범위 제한
        position[0] = Math.max(-xLimit, Math.min(xLimit, newX)); // x좌표
        position[1] = Math.max(-yLimit, Math.min(yLimit, newY)); // y좌표
    }

    return position;
}
