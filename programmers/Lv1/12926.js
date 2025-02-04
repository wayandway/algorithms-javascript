//* 시저 암호 https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let char of s) {
        if (char === ' ') {
            result += ' ';
        } else {
            const alphabet = char === char.toUpperCase() ? upper : lower;
            const newIndex = (alphabet.indexOf(char) + n) % 26;
            result += alphabet[newIndex];
        }
    }

    return result;
}

// 시간 복잡도는 O(n), n은 문자열 s의 길이