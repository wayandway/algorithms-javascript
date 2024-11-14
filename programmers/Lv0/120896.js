//* 한 번만 등장한 문자 https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
    const charCount = new Map();

    // 각 문자의 등장 횟수 계산
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // 등장 횟수가 1인 문자만 필터링
    const uniqueChars = [...charCount]
        .filter(([char, count]) => count === 1)
        .map(([char]) => char);

    // 사전 순 정렬 후 문자열로 변환
    return uniqueChars.sort().join('');
}

// 시간 복잡도 O(n + k log k)
