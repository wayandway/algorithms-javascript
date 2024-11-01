//* 순서대로 방문하기(DFS) https://softeer.ai/practice/6246

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  console.log(solution(input));
});

function solution(input) {
  // 첫 줄에서 n과 m을 추출
  const [n, m] = input[0].map(Number); // 첫 줄을 숫자로 변환
  const grid = input.slice(1, n + 1).map(row => row.map(Number)); // 격자 정보 숫자 배열로 변환
  const targets = input.slice(n + 1).map(coords => coords.map(Number).map(x => x - 1)); // 방문할 좌표를 숫자로 변환하고 0-based로 변경

  return countPaths(grid, targets, n, m);
}

function countPaths(grid, targets, n, m) {
  let result = 0;

  // 이동 가능한 방향 (상, 하, 좌, 우)
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  function dfs(x, y, targetIdx, visited) {
    // 모든 목표를 방문한 경우 경로를 하나 찾은 것임
    if (targetIdx === m) {
      result++;
      return;
    }

    const [nextX, nextY] = targets[targetIdx];

    // 현재 위치에서 모든 방향으로 이동 시도
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // 격자 범위 내에 있고, 벽이 아니며, 아직 방문하지 않은 경우
      if (
        newX >= 0 && newX < n && 
        newY >= 0 && newY < n && 
        grid[newX][newY] === 0 && 
        !visited[newX][newY]
      ) {
        // 방문 표시
        visited[newX][newY] = true;

        // 목표 지점에 도달하면 다음 목표로 이동
        if (newX === nextX && newY === nextY) {
          dfs(newX, newY, targetIdx + 1, visited);
        } else {
          // 목표 지점에 도달하지 않은 경우 계속 탐색
          dfs(newX, newY, targetIdx, visited);
        }

        // 백트래킹: 방문 표시 해제
        visited[newX][newY] = false;
      }
    }
  }

  const [startX, startY] = targets[0];
  // 방문 여부를 기록하기 위한 배열
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  visited[startX][startY] = true;
  dfs(startX, startY, 1, visited);

  return result;
}
