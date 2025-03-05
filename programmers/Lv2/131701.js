//* 연속 부분 수열 합의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
    let uniqueSums = new Set();
    const n = elements.length;
    const extended = [...elements, ...elements]; // 원형 수열 구현

    for (let length = 1; length <= n; length++) { // 부분 수열 길이
        for (let start = 0; start < n; start++) { // 시작 위치
            const sum = extended.slice(start, start + length).reduce((a, b) => a + b, 0);
            uniqueSums.add(sum);
        }
    }

    return uniqueSums.size;
}

/*
length는 n까지 증가
start도 n까지 증가
내부에서 slice와 reduce 연산이 수행됨
총 시간 복잡도 : O(n²)
*/