//* 피로도 https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
    let maxDungeons = 0;
    const visited = new Array(dungeons.length).fill(false);

    function dfs(k, count) {
        maxDungeons = Math.max(maxDungeons, count);

        for (let i = 0; i < dungeons.length; i++) {
            const [required, cost] = dungeons[i];

            if (!visited[i] && k >= required) {
                visited[i] = true;
                dfs(k - cost, count + 1);
                visited[i] = false; // 백트래킹
            }
        }
    }

    dfs(k, 0);
    return maxDungeons;
}

// 시간복잡도 : O(N!) -> 1 <= N <= 8 이므로 가능