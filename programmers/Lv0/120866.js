//* 안전지대 https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
    const n = board.length; // 2차원 배열의 크기
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1], [1, 0], [1, 1]
    ]; // 8방향 (위, 아래, 좌, 우 및 대각선)
  
    // 위험 지역 표시를 위한 새로운 2차원 배열
    const dangerZone = Array.from({ length: n }, () => Array(n).fill(0));
  
    // 지뢰를 기준으로 위험 지역 표시
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 1) {
          // 지뢰가 있는 위치를 기준으로 8방향 확인
          for (const [dx, dy] of directions) {
            const nx = i + dx;
            const ny = j + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
              dangerZone[nx][ny] = 1; // 위험 지역으로 표시
            }
          }
          dangerZone[i][j] = 1; // 지뢰가 있는 지역도 위험 지역
        }
      }
    }
  
    // 안전한 지역 계산
    let safeCount = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dangerZone[i][j] === 0) safeCount++;
      }
    }
  
    return safeCount;
  }
  
// 시간 복잡도 O(n^2)