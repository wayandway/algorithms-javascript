//* 약수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    let sum = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i; // 작은 약수 더하기
            if (i !== n / i) {
                sum += n / i; // 서로 다른 쌍의 큰 약수 더하기
            }
        }
    }

    return sum;
}

// 시간복잡도 O(√n)
