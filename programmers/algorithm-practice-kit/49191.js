//* 순위 https://school.programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
    // 1. 그래프 초기화
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    // 2. 경기 결과 반영
    for (const [win, lose] of results) {
        graph[win][lose] = 1;  // win이 lose를 이김
        graph[lose][win] = -1; // lose는 win에게 짐
    }

    // 3. 플로이드-워셜 알고리즘 적용 (모든 선수 간 승패 관계 갱신)
    for (let k = 1; k <= n; k++) {  // 중간 선수
        for (let i = 1; i <= n; i++) {  // 출발 선수
            for (let j = 1; j <= n; j++) {  // 도착 선수
                if (graph[i][k] === 1 && graph[k][j] === 1) {
                    graph[i][j] = 1;  // i가 k를 이기고, k가 j를 이기면 i가 j를 이김
                }
                if (graph[i][k] === -1 && graph[k][j] === -1) {
                    graph[i][j] = -1; // i가 k에게 지고, k가 j에게 지면 i가 j에게 짐
                }
            }
        }
    }

    // 4. 확정된 순위 찾기
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= n; j++) {
            if (graph[i][j] !== 0) count++; // 승패 관계가 확정된 경우
        }
        if (count === n - 1) answer++; // 모든 선수와의 관계가 확정된 경우 순위 결정 가능
    }

    return answer;
}

/*
플로이드-워셜 알고리즘: O(n³)
n ≤ 100 이므로 최대 1,000,000 연산 → 충분히 가능
*/