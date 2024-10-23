//* [스택/큐] 올바른 괄호 https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(') {
            stack.push(char);  // 여는 괄호는 스택에 추가
        } else if (char === ')') {
            if (stack.length === 0) {
                return false;  // 스택이 비어있으면 닫는 괄호가 더 많음
            }
            stack.pop();  // 짝이 맞는 여는 괄호를 제거
        }
    }

    // 스택이 비어있으면 올바른 괄호, 그렇지 않으면 잘못된 괄호
    return stack.length === 0;
}