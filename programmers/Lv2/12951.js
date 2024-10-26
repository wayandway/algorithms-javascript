//* JadenCase 문자열 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    let lowerStr = s.toLowerCase();

    return lowerStr
        .split(' ') // 공백을 기준으로 단어 나누기
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 각 단어의 첫 글자만 대문자로
        .join(' '); // 단어를 다시 공백으로 연결
}

// 시간복잡도 : O(n)
