//* 최대공약수와 최소공배수 https://school.programmers.co.kr/learn/courses/30/lessons/12940
function solution(n, m) {
    // 최대공약수(GCD) - 유클리드 알고리즘
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    
    // 최소공배수(LCM)
    const lcm = (n * m) / gcd(n, m);

    return [gcd(n, m), lcm];
}
