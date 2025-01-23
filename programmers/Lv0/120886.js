//* A로 B만들기 https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
    const getFrequency = str => {
        const freq = {};
        for (const char of str) {
            // 현재 문자 'char'의 빈도를 1 증가시킨다. 
            // 처음 등장하는 문자일 경우 0으로 초기화한 뒤 1을 더하고, 
            // 이미 등장한 문자일 경우 기존 값에 1을 더하여 빈도를 갱신한다.
            freq[char] = (freq[char] || 0) + 1;
        }
        return freq;
    };

    const beforeFreq = getFrequency(before);
    const afterFreq = getFrequency(after);

    // 두 빈도 객체 비교
    for (const key in beforeFreq) {
        if (beforeFreq[key] !== afterFreq[key]) return 0;
    }
    return Object.keys(beforeFreq).length === Object.keys(afterFreq).length ? 1 : 0;
}

/**
 * getFrequency: 문자열 순회 → O(n)
 * 두 개의 빈도 객체 비교 → O(k) (문자 종류 수 k는 최대 26)
 * 전체 시간 복잡도는 O(n)
 */