//* 연속된 수의 합 https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
    // 시작 숫자 계산
    const start = Math.floor((total - (num * (num - 1)) / 2) / num);
    
    // 연속된 숫자 배열 생성
    return Array.from({ length: num }, (_, i) => start + i);
}

/**
 * 1부터 n까지의 합 : (n * (n-1)) / 2
 * 등차수열의 합 : 만약 num = 3 이면, x + (x+1) + (x+2) = (num * x) + (num * (num-1) / 2) = total
 * 
 * 시간 복잡도 : 배열 생성으로 인해 O(num)
 */
