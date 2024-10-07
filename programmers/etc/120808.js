//* 분수의 덧셈 https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
    // 최대공약수 함수 (유클리드 호제법 사용)
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    // 두 분수의 덧셈 계산
    let numerator = numer1 * denom2 + numer2 * denom1;  // 분자 계산
    let denominator = denom1 * denom2;  // 분모 계산

    // 분자와 분모의 최대공약수를 구해 기약분수로 만들기
    let divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;

    return [numerator, denominator];  // 기약분수 반환
}
