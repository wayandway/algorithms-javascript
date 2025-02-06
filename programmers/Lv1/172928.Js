//* 공원 산책 https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
    let [r, c] = park.flatMap((row, i) => row.includes('S') ? [[i, row.indexOf('S')]] : []).flat();
    const move = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

    for (const route of routes) {
        let [d, n] = route.split(' ');
        let [dr, dc] = move[d];
        let [nr, nc] = [r, c];
        
        for (let i = 0; i < n; i++) {
            nr += dr;
            nc += dc;
            if (!park[nr]?.[nc] || park[nr][nc] === 'X') { // park의 범위를 벗어나거나 장애물이 있을 때
                nr = r; nc = c;
                break;
            }
        }
        [r, c] = [nr, nc];
    }

    return [r, c];
}

// 최종 시간복잡도 : O(m * n + k * N)
// m * n은 O(park의 크기)
// k * N은 O(routes의 수 * 각 경로의 최대 길이)