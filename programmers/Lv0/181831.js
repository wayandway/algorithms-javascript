//* 특별한 이차원 배열 2 https://school.programmers.co.kr/learn/courses/30/lessons/181831
//* 대칭 행렬

function solution(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }

    return 1;
}