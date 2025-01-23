//* 이진수 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1, bin2) {
    // 이진수 문자열을 10진수로 변환
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    
    // 두 10진수를 더한 결과를 이진수 문자열로 변환
    const sum = num1 + num2;
    return sum.toString(2);
}

/**
 * parseInt, toString은 문자열 길이에 비례해 동작하므로 O(n)
 */