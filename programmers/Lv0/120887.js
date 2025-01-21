//* k의 개수 https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    let count = 0; // k의 등장 횟수를 저장할 변수 초기화

    // i부터 j까지 모든 숫자를 순회
    for (let x = i; x <= j; x++) {
        let num = x; // 현재 숫자를 num 변수에 저장
        
        // num의 각 자릿수를 순회
        while (num > 0) {
            // 1의 자리가 k와 같으면 count 증가
            if (num % 10 === k) count++;
            // 1의 자리를 제거 (다음 자릿수 확인을 위해)
            num = Math.floor(num / 10);
        }
    }
    
    return count; // k가 등장한 총 횟수 반환
}

/**
 * for문 : i부터 j까지 순회. O(n)
 * while문 : 숫자 x에서 각 자릿수를 확인하는 시간 복잡도는 O(log10(x)) 
 * 총 시간 복잡도 : O(n log10(x))
 */