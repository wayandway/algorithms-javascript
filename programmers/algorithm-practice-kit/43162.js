//* 네트워크 https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
    const visited = Array(n).fill(false);
    let networkCount = 0;

    function dfs(node) {
        visited[node] = true;
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) { 
            dfs(i); // dfs로 연결된 노드들을 모두 방문
            networkCount++; // 네트워크 개수 +1 증가
        }
    }

    return networkCount;
}
