//* 행렬의 곱셈 https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(A, B) {
    let m = A.length; // A의 행 개수
    let n = A[0].length; // A의 열 개수
    let p = B[0].length; // B의 열 개수

    // 결과 행렬 초기화
    let C = Array.from({ length: m }, () => Array(p).fill(0));

    // 행렬 곱 계산
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < p; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}