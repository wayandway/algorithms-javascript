
//* 가장 먼 노드 https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
    // 그래프 생성 (인접 리스트)
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // BFS 수행
    const queue = [1];  // 시작 노드는 1번
    const visited = Array(n + 1).fill(-1);  // 방문 및 거리 저장 (-1 = 방문 안함)
    visited[1] = 0;  // 1번 노드의 거리는 0

    while (queue.length) {
        const node = queue.shift();

        for (const next of graph[node]) {
            if (visited[next] === -1) {  // 아직 방문하지 않은 노드라면
                visited[next] = visited[node] + 1;  // 거리 업데이트
                queue.push(next);
            }
        }
    }

    // 가장 먼 거리 찾기
    const maxDist = Math.max(...visited);
    return visited.filter(dist => dist === maxDist).length;
}

// BFS 탐색은 O(N + M) (노드 개수 N, 간선 개수 M)
// 최대 20,000개의 노드와 50,000개의 간선이므로 BFS 사용 가능