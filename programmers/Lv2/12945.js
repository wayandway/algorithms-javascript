//* 피보나치 수 https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = (a + b) % 1234567;
        a = b;
        b = next;
    }
    return b;
}