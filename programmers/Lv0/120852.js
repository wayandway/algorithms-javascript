//* 소인수분해 https://school.programmers.co.kr/learn/courses/30/lessons/120852
// 시간 복잡도 : O(n√n)
function solution1(n) {
    const factors = [];
    let divisor = 2;

    // n이 1이 될 때까지 나눠가며 소인수 분해
    while (n > 1) {
        if (n % divisor === 0) {
            factors.push(divisor); // 소인수 배열에 추가
            n /= divisor; // n을 나눠서 업데이트
        } else {
            divisor++; // 다음 소수로 이동
        }
    }

    // 중복된 소인수를 제거하고 오름차순 정렬된 배열 반환
    return [...new Set(factors)];
}



//* 에라토스테네스의 체 알고리즘
// 시간 복잡도 : O(n log log n)
function solution2(n) {
    let dp = new Array(n+1).fill(1);  // 1로 채워진 배열 생성 (크기: n+1)
    
    for (let i = 2; i <= n; i++) {    // 2부터 n까지 반복
        if (dp[i]) {                  // i가 소수일 경우
            for (let j = 2; i * j <= n; j++) {
                dp[i * j] = 0;        // i의 배수는 합성수로 표시 (0으로 설정)
            }
        }
    }

    return dp.filter(el => el === 0).length;  // 합성수의 개수 반환
}