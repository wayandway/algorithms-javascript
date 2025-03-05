//* 정수 삼각형 https://school.programmers.co.kr/learn/courses/30/lessons/43105

function solution(triangle) {
    let n = triangle.length;

    // 아래에서부터 위로 계산
    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 현재 위치 값 + 아래 행의 왼쪽 또는 오른쪽 값 중 최댓값
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }

    // 꼭대기의 최댓값 반환
    return triangle[0][0];
}