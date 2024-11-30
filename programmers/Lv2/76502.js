//* 괄호 회전하기 https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
    const isValid = (str) => {
        const stack = [];
        const matching = { ')': '(', ']': '[', '}': '{' };
        
        for (const char of str) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char); // 열린 괄호는 스택에 추가
            } else {
                // 닫힌 괄호는 스택의 마지막과 매칭되는지 확인
                if (stack.length === 0 || stack.pop() !== matching[char]) {
                    return false;
                }
            }
        }
        // 스택이 비어 있으면 올바른 괄호 문자열
        return stack.length === 0;
    };

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // 문자열 회전
        const rotated = s.slice(i) + s.slice(0, i);
        if (isValid(rotated)) count++;
    }
    
    return count;
}