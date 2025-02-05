//* 소수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
    let primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes.filter(Boolean).length; // true인 개수(소수 개수) 반환
}
