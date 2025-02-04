//* 콜라 문제 https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
    let result = 0;

    while (n >= a) {
        let exchanged = Math.floor(n / a) * b;
        result += exchanged;
        n = exchanged + (n % a);
    }

    return result;
}

// 총 시간복잡도 O(log n) : n은 매 반복마다 a로 나눈 만큼 감소