//* 콜라츠 수열 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
    let result = [];
    
    // 1을 포함한 결과 배열 생성
    while (n !== 1) {
        result.push(n); 
        
        // 짝수일 때 n을 반으로 나누고, 홀수일 때는 3배하고 1을 더함
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
    }
    
    result.push(1);  // 마지막에 1 추가
    return result;
}

// 최악의 경우 시간 복잡도 : O(n)?