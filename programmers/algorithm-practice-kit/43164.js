//* 여행 경로 https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
    // 그래프 초기화 (사전순 방문을 위해 정렬 후 저장)
    const graph = {};
    tickets.forEach(([from, to]) => {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    });

    // 각 출발지의 목적지를 알파벳 순으로 정렬
    Object.keys(graph).forEach((key) => graph[key].sort());

    const route = []; // 최종 경로 저장

    function dfs(airport) {
        while (graph[airport] && graph[airport].length > 0) {
            dfs(graph[airport].shift()); // 사전순 공항 방문
        }
        route.push(airport); // 경로 저장 (후위 순회)
    }

    dfs("ICN"); // "ICN"에서 출발
    return route.reverse(); // 후위 순회 결과를 뒤집어 올바른 경로 반환
}

/* 
티켓 정렬: O(N log N)
DFS 탐색: O(N)
전체 시간복잡도: O(N log N)
*/