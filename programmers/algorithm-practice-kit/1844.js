//* 게임 맵 최단거리 https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1] // 하, 상, 우, 좌
    ];

    // 덱을 사용하여 큐 최적화
    const queue = [];
    queue.push([0, 0, 1]); // (y, x, 거리) -> 현재 위치와 그 지점까지의 거리
    
    // visited 배열을 따로 관리하여 중복 방문을 방지
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [y, x, dist] = queue.shift();
        
        // 목표 지점 도달 시 거리 반환
        if (y === n - 1 && x === m - 1) return dist;
        
        for (const [dy, dx] of directions) {
            const ny = y + dy;
            const nx = x + dx;

            // 범위 체크 & 길이 있는 곳만 이동 & 방문하지 않은 곳
            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true; // 방문 처리
                queue.push([ny, nx, dist + 1]);
            }
        }
    }

    return -1; // 상대 팀 진영에 도달할 수 없는 경우
}

/**
 * 총 시간 복잡도는 O(N * M)
 * N은 maps의 행(row) 수
 * M은 maps의 열(column) 수
*/