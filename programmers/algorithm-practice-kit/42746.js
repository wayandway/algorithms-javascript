//* 가장 큰 수 https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
    // 1. 숫자를 문자열로 변환 후, 커스텀 정렬 (내림차순)
    let result = numbers
        .map(num => num.toString())  // 숫자를 문자열로 변환
        .sort((a, b) => (b + a) - (a + b))  // 문자열을 이어붙여 비교 정렬
        .join("");  // 정렬된 숫자를 하나로 합침
    
    // 2. "000" 같은 경우 예외 처리 (가장 큰 숫자가 0이면 "0" 반환)
    return result[0] === "0" ? "0" : result;
}

/**
 * map(): O(N)
 * sort(): O(N log N)
 * join(): O(N)
 * 따라서 전체 시간 복잡도는 O(N log N)
 */
