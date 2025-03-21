//* 전력망을 둘로 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
    let minDiff = Infinity;
    
    // 1. 그래프 생성 (인접 리스트)
    function buildGraph(wires) {
        const graph = Array.from({ length: n + 1 }, () => []);
        wires.forEach(([a, b]) => {
            graph[a].push(b);
            graph[b].push(a);
        });
        
        return graph;
    }
    
    // 2. BFS로 연결된 노드 개수 찾기
    function bfs(start, graph, visited) {
        let queue = [start];
        let count = 1; // 시작 노드 포함
        visited[start] = true;
        
        while (queue.length) {
            let node = queue.shift();
            for (let next of graph[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    count++;
                }
            }
        }
        
        return count;
    }
    
    // 3. 모든 간선을 하나씩 끊고, BFS 탐색 후 차이를 계산
    for (let [v1, v2] of wires) {
        const graph = buildGraph(wires.filter(([a, b]) => !(a === v1 && b === v2)));
        let visited = Array(n + 1).fill(false);
        let count1 = bfs(v1, graph, visited); // 한쪽 네트워크의 크기
        let count2 = n - count1; // 다른 네트워크의 크기
        minDiff = Math.min(minDiff, Math.abs(count1 - count2));
    }
    
    return minDiff;
}

/*
n개의 간선을 하나씩 제거 → O(n)
각 경우에서 BFS 탐색 수행 → O(n)
총 O(n^2) (최대 100^2 = 10,000)
*/