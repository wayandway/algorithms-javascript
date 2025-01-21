//* 치킨 쿠폰 https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
    let serviceChickens = 0; // 서비스 치킨 수
    let coupons = chicken;  // 현재 남은 쿠폰 수

    while (coupons >= 10) {
        const newChickens = Math.floor(coupons / 10); // 새로 받을 수 있는 서비스 치킨 수
        serviceChickens += newChickens;              // 서비스 치킨 추가
        coupons = newChickens + (coupons % 10);      // 남은 쿠폰 계산
    }

    return serviceChickens;
}

/**
 * 시간복잡도 O(log₁₀(n)): coupons가 10씩 나누어지므로 루프는 대략 log₁₀(chicken)번 실행됨.
 */