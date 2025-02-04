// 가장 가까운 같은 글자 https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
    const result = [];
    const lastIndexMap = {};  // 각 문자의 마지막 등장 인덱스를 저장할 객체

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastIndexMap[char] !== undefined) {
            // 이미 등장한 문자의 마지막 인덱스를 결과에 저장
            result.push(i - lastIndexMap[char]);
        } else {
            // 처음 등장한 문자일 경우 -1을 결과에 저장
            result.push(-1);
        }
        // 현재 문자의 마지막 등장 인덱스를 갱신
        lastIndexMap[char] = i;
    }

    return result;
}